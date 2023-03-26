import React, { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import CreateRequest from "./components/CreateRequest";
import { Layout, Menu, Select, Button, Badge, Modal } from "antd";
import { APP_DESC, APP_NAME, CHAIN_OPTIONS, DEFAULT_CHAIN } from "./util/constants";
import History from "./components/History";
import Home from "./components/Home";
import logo from "./assets/logo.png";
import { capitalize, toHexString } from "./util";
import LinkRedirect from "./components/LinkRedirect";

import "./App.css";
import 'chartkick/chart.js'
import OwnerLinks from "./components/OwnerLinks";
import { BellOutlined, BellTwoTone } from "@ant-design/icons";
import { fetchNotifications } from "./util/notifications";
import Notification from "./components/Notification";
import { About } from "./components/About";


const { Option } = Select;

const { Header, Content, Footer } = Layout;

function App() {
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [activeChain, setActiveChain] = useState(DEFAULT_CHAIN);
  const [showNotifications, setShowNotifications] = useState(false);

  async function getNotifications() {
    try {
      const data = await fetchNotifications(account)
      console.log('notifications', data)
      setNotifications(data)
    } catch (e) {
      console.log(e)
    }

  }

  // Request new network on change
  const changeNetwork = async (chainId) => {
    const e = window.ethereum
    if (!e) {
      alert('Metamask must be connected to use Zklinks')
      return
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }], // chainId must be in hexadecimal numbers
    });
  }
  useEffect(() => {
    if (account) { 
      changeNetwork(toHexString(activeChain.id))
    }
  }, [activeChain])
 

  const login = async () => {
    setLoading(true)
    const e = window.ethereum
    if (!e) {
      alert('Metamask must be connected to use Zklinks')
      return
    }
    try {
      const accs = await e.request({ method: 'eth_requestAccounts' });
      console.log('accounts', accs)
      setAccount(accs[0])
    } catch (e) {

    } finally {
      setLoading(false)
    }
  }

  const checkConnected = async () => {
    const e = window.ethereum
    if (!e) {
      return
    }
    const connected = e.isConnected()
    console.log('connected', connected)
    if (connected) {
      await login()
    }
  }

  useEffect(() => {
    checkConnected()
  }, [])

  useEffect(() => {
    if (account) {
      getNotifications()
    }
  }, [account])

  const navigate = useNavigate();
  const path = window.location.pathname;

  const isRedirect = path.startsWith("/link/");

  const menuItems = [
    {
      key: '/',
      label: <img
        src={logo}
        className="header-logo pointer"
        onClick={() => navigate("/")}
      />,
      showOnRedirectPage: true,
    },
    {
      key: '/create',
      label: "Create Link",
      onClick: () => navigate("/create"),
    },
    {
      key: '/history',
      label: "Link History",
      onClick: () => navigate("/history"),
    },

    {
      key: '/ownerlinks',
      label:
        <span>
          {!account && <span>
            <Button type="primary" onClick={login} loading={loading} disabled={loading}>Login with Metamask</Button>
          </span>}
          {account && <span on onClick={() => navigate('/ownerlinks')}><span>Hello: {account}</span>&nbsp;</span>}

        </span>,
      showOnRedirectPage: true,

    },
    {
      key: 0,
      label:
        <Badge count={notifications.length || 0}>
          <BellTwoTone style={{ fontSize: '20px' }} onClick={() => {
            console.log('notifications', notifications)
            setShowNotifications(true)
          }} />
        </Badge>
    },
    {
      key: 1,
      label: <span>
        Network:&nbsp;
        <Select
          defaultValue={activeChain.id}
          style={{ width: 175, textAlign: 'left' }}
          onChange={(v) => setActiveChain(CHAIN_OPTIONS[v])}
        >
          {Object.values(CHAIN_OPTIONS).map((chain, i) => {
            return (
              <Option key={i} value={chain.id}>
                {capitalize(chain.name)}
              </Option>
            );
          })}
        </Select>
      </span>
      , showOnRedirectPage: true,

    },
  ];

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts) => {
        console.log('accountsChanged', accounts)
        setAccount(accounts[0])
      })
    }
  })

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu
            // theme="dark"
            mode="horizontal"
            selectedKeys={[path]}
            items={isRedirect ? menuItems.filter(item => item.showOnRedirectPage) : menuItems}

          >

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ownerlinks" element={<OwnerLinks activeChain={activeChain} account={account} />} />
              <Route path="/link/:contractAddress" element={<LinkRedirect activeChain={activeChain} account={account} />} />
              <Route path="/create" element={<CreateRequest activeChain={activeChain} account={account} />} />
              <Route path="/history" element={<History activeChain={activeChain} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {APP_NAME} &copy;{new Date().getFullYear()} - {APP_DESC} -{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            navigate("/about");
          }}>
            About</a>
        </Footer>
      </Layout>

      <Modal title={`Notifications (${notifications.length})`}
        bodyStyle={{ overflowY: 'scroll' }}
        open={showNotifications}
        onOk={() => setShowNotifications(false)}
        onCancel={() => setShowNotifications(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ overflowY: 'scroll', maxHeight: '500px' }}>
          {notifications.map((n, i) => {
            // Create a notification row where icon is an image.
            return <Notification key={i} notification={n} />
          })}
        </div>
      </Modal>

    </div >
  );
}

export default App;
