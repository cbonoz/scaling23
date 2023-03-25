import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { getExplorerUrl, getDateStringFromTimestamp } from '../util'
import { getLinksForOwner } from '../util/polybase'
import logo from '../assets/logo.png'
import { CHAIN_OPTIONS } from '../util/constants'

export default function OwnerLinks({ account, address, activeChain }) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = useState()
    const [links, setLinks] = useState([])


    useEffect(() => {
        if (account) {
            getLinks(account)
        }
    }, [account])

    async function getLinks(address) {
        setLoading(true)
        setError()
        try {
            const res = await getLinksForOwner(address)
            const results = res.data
            console.log('links', results)
            setLinks(results)
        } catch (e) {
            console.log(e)
            setError('Error getting links: ' + e.message)
        }
        finally {
            setLoading(false)
        }
    }

    const title = <span>Owner: {account}</span>

    return (<div>
        <div className='centered'>
            {logo && <img src={logo} alt='logo' style={{ textAlign: 'center', height: '100px', margin: '20px' }} />}
            <h2>Your links</h2>
        </div>
        <Card
            title={title}>
            {loading && <p>Loading...</p>}
            {!loading && links?.length === 0 && <p>No links found.</p>}
            {error && <p className='error-text'>{error}</p>}
            {links?.length > 0 && <p>Click on a link to view it on the blockchain explorer.
                <br />Powered by <a href='https://polybase.com' target='_blank'>Polybase</a>
            </p>}
            {links?.length > 0 && <p><b>Found ({links?.length || 0})</b></p>}
            {links?.map((link, i) => {
                const { data } = link
                const explorerUrl = getExplorerUrl(activeChain, data.id)
                const network = CHAIN_OPTIONS[data.chainId]?.name
                // Create a padded box
                // id is address
                return (
                    <div key={i} className="link-row" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
                        onClick={() => {
                            console.log('clicked', data)
                            window.open(explorerUrl, '_blank')
                        }}
                    >
                        <h2>
                            Title: {data.title}</h2>
                        <p>
                            Redirect URL: {data.redirectUrl}<br />
                            {network && <span>Network: {network}</span>}<br />
                            {!isNaN(data.createdAt) && <span>Created: {getDateStringFromTimestamp(data.createdAt, true)}</span>}
                        </p>
                    </div>
                )
            })}
        </Card>
    </div>
    )
}
