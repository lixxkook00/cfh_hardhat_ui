import React, { useEffect, useState } from 'react'
import { connectWallet } from "../../utils/connectWallet"
import truncateEthAddress from 'truncate-eth-address'
import './Header.scss'
import { getBalanceHLC } from '../../utils/interactionToken'
import FormatAmount from '../../utils/formatBalance'

export default function Header() {

    const [address, setAddress] = useState("")
    const [balance, setBalance] = useState("0")

    const handleConnectWallet = async () => {
        // get address
        const addressConnected = await connectWallet();
        await setAddress(addressConnected);

        // get balance
        const balance = await getBalanceHLC(addressConnected)
        await setBalance(balance)
    }

    // handle changed wallet
    useEffect(() => {
        if (window.ethereum){
            handleConnectWallet()
        }
        if (window.ethereum && window.ethereum.selectedAddress) {
            setAddress(window.ethereum.selectedAddress);
        }
    },[])

    // handle on-change wallet
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });
            window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });
        }
    });

    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <img className="img-fluid" src="./images/logo.png" alt="" />
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="btn btn-warning mr-1">
                            { balance } HLC
                        </div>
                        <div className="button btn btn-primary"
                            onClick={() => handleConnectWallet()}
                        >
                            { address === "" ? "Connect Wallet" : `${truncateEthAddress(address)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
