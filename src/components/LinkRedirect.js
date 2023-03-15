import { ethers } from 'ethers';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ZKLINKS_CONTRACT } from '../contract/metadata';

// This page should page a contractAddress path parameter enable a web3 transaction to credit a user with a link referral, 
// and then redirect to url stored in state
export default function LinkRedirect({ activeChain, account, provider }) {
    const [loading, setLoading] = React.useState(false)
    const [error ,setError] = useState()
    const [redirectUrl, setRedirectUrl] = useState()
    const { contractAddress } = useParams();

    async function getRedirectUrl() {
        if (!contractAddress) {
            return
        }
        setLoading(true)
        try {
            const contract = new ethers.Contract(contractAddress, ZKLINKS_CONTRACT, provider)
            const url = await contract.getUrl()
            setRedirectUrl(url)
            return url
        } catch (e) {
            console.log(e)
            setError(e)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRedirectUrl()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Link Page</h1>
            <p>Contract Address: {contractAddress}</p>
            <a href={redirectUrl} target="_blank">Redirect</a>

        </div>
    )
}
