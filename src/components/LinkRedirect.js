import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, Modal } from 'antd';
import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getRedirectUrl, getTitle, refer } from '../contract/linkContract';
import { getRpcError } from '../util';
import { About } from './About';

// This page should page a contractAddress path parameter enable a web3 transaction to credit a user with a link referral, 
// and then redirect to url stored in state
export default function LinkRedirect({ activeChain, account, provider }) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = useState()
    const [redirectUrl, setRedirectUrl] = useState()
    const [title, setTitle] = useState()
    const [showAbout, setShowAbout] = useState(false)

    const { contractAddress } = useParams();

    async function completeReferral() {
        if (!contractAddress || !account) {
            return
        }
        setLoading(true)
        try {
            const result = await refer(contractAddress, account, account);
            console.log(result);
            // Redirect and referral successful.

            // Add notification

            // Send to page
            window.open(fullRedirectUrl)
        } catch (e) {
            console.log(e)
            setError('Error completing referral: ' + getRpcError(e));
        }
        finally {
            setLoading(false)
        }
    }


    async function load() {
        if (!contractAddress || !account) {
            return
        }
        setLoading(true)
        try {
            const url = await getRedirectUrl(contractAddress)
            setRedirectUrl(url)
            const t = await getTitle(contractAddress)
            setTitle(t)
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

    if (error) {
        return <div>
            <span className='error-text'>{error}</span>
            <br />
            <br />
            {error?.indexOf('wallet to continue') === -1 && <Button type="primary" onClick={() => setError(undefined)}><ArrowLeftOutlined/> Back</Button>}

        </div>
    }

    const openAbout = () => {
        setShowAbout(true)
    }

    const fullRedirectUrl = `${redirectUrl}?ref=${account}`

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
        </div>
    )
}
