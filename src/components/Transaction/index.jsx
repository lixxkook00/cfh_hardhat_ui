import React, { useEffect } from 'react'
import { transaction } from '../../utils/interactionToken'

export default function Transaction() {

    const handleGetTransaction = async () => {
        const result = await transaction();
    }

    useEffect(() => {
        handleGetTransaction()
    },[])

    return (
        <div></div>
    )
}
