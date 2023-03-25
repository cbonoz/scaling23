import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, Modal } from 'antd';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMetadata, getRedirectUrl, getTitle, refer } from '../contract/linkContract';
import { getRpcError } from '../util';
import { sendPush } from '../util/notifications';
import { About } from './About';

// This page should page a contractAddress path parameter enable a web3 transaction to credit a user with a link referral, 
// and then redirect to url stored in state
export default function LinkRedirect({ activeChain, account, provider }) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState({})
    const [showAbout, setShowAbout] = useState(false)
    const [success, setSuccess] = useState(false)

    const { contractAddress } = useParams();

    async function completeReferral() {
        if (!contractAddress || !account) {
            return
        }
        setLoading(true)
        try {
            const result = await refer(contractAddress);
            console.log(result);
            // Redirect and referral successful.

            // Add notification

            // Send to page
            setSuccess(true)
        } catch (e) {
            console.log(e)
            setError('Error completing referral: ' + getRpcError(e));
        }
        finally {
            setLoading(false)
            await sendPush(data.owner, account, redirectUrl)
        }
    }


    async function load() {
        if (!contractAddress || !account) {
            return
        }
        setLoading(true)
        try {
            const res = await getMetadata(contractAddress)
            // Unpack the response
            setData({
                title: res[0],
                redirectUrl: res[1],
                owner: res[2],
                reward: res[3],
            })
        } catch (e) {
            console.log(e)
            setError('Error reading link data: ' + e.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (account) {
            setError(undefined)
            load()
        } else {
            setError('Please connect your wallet to continue.')
        }
    }, [provider, account])

    if (loading) {
        return <div>Loading...</div>
    }

    const { redirectUrl, title, owner, reward } = data
    const fullRedirectUrl = `${redirectUrl || ''}?ref=${account}`

    if (error) {
        return <div>
            <span className='error-text'>{error}</span>
            <br />
            <br />
            {error.indexOf('wallet to continue') !== -1 && <Button type="primary" onClick={() => setError(undefined)}><ArrowLeftOutlined /> Back</Button>}
            {error.indexOf('already referred') !== -1 && <div>
                <p>You may still continue to the page: {redirectUrl}</p>
                <Button type="primary" onClick={() => window.open(fullRedirectUrl)}>Continue to page</Button>
            </div>}

        </div>
    }

    const openAbout = () => {
        setShowAbout(true)
    }

    const cardTitle = <span>Credit your referral&nbsp;<InfoCircleOutlined onClick={openAbout} /></span>

    return (
        <div>
            <Card title={cardTitle}>
                {title && <p>Title: {title}</p>}
                You will be redirected to the following page when you click the button below:
                {redirectUrl && <p>Redirect URL: {redirectUrl}</p>}
                <Button
                    disabled={!redirectUrl || !account}
                    type="primary"
                    onClick={() => {
                        completeReferral()
                    }}
                >
                    Continue to page
                </Button>
            </Card>

            <Modal
                title="About"
                open={showAbout}
                onOk={() => setShowAbout(false)}
                cancelButtonProps={{ style: { display: 'none' } }}
                onCancel={() => setShowAbout(false)}
            >
                <About />
            </Modal>

            <Modal
                title="Referral successful"
                open={success}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
                onCancel={() => setSuccess(false)}>
                    <h5>Proceed to page</h5>
                    <a href={fullRedirectUrl} rel="noreferrer">{fullRedirectUrl}</a>
                </Modal>
        </div>
    )
}
