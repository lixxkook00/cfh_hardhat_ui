import React, { useState } from 'react'
import './Header.scss'

import { connectWallet, disconnectWallet } from "../../utils/connectWallet"

export default function Header() {

    const [address, setAddress] = useState(window.ethereum !== undefined ? window.ethereum.selectedAddress : "")

    const handleConnectWallet = async () => {
        const addressConnected = await connectWallet();
        setAddress(addressConnected);
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <img className="img-fluid" src="./images/logo.png" alt="" />
                    </div>

                    <div className="button btn btn-primary"
                        onClick={() => handleConnectWallet()}
                    >
                        { address === "" ? "Connect Wallet" : address}
                    </div>
                </div>
            </div>
        </div>
    )
}
