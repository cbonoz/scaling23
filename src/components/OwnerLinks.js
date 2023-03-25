import React, { useEffect, useState } from 'react'
import { getLinksForOwner } from '../util/polybase'

export default function OwnerLinks({account, address, activeChain}) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = useState()
    const [links, setLinks] = useState()


    useEffect(() => {
        if (account) {
            getLinks(account)
        }
    }, [account])

    async function getLinks(address) {
        setLoading(true)
        try {
            const data = await getLinksForOwner(address)
            console.log('links', data)
            setLinks(data)
        } catch (e) {
            console.log(e)
            setError('Error getting links: ' + e.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div>OwnerLinks: {address}<br/>

        {/* TODO: move into a table */}
        {JSON.stringify(links)}
        
        </div>
    )
}
