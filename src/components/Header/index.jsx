import React, { useEffect, useState } from 'react'
import { connectWallet } from "../../utils/connectWallet"
import truncateEthAddress from 'truncate-eth-address'
import './Header.scss'
import { updateHCL_Balance } from '../../utils/interactionToken'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

    const [address, setAddress] = useState("")
    // const [balance, setBalance] = useState()
    const balance = useSelector(state => state.hlcBalance)
    const dispatch = useDispatch()

    const handleConnectWallet = async () => {
        const addressConnected = await connectWallet();
        await setAddress(addressConnected);
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

    // handle get balance
    useEffect(() =>  {
        updateHCL_Balance(dispatch)
    },[address])

    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <img className="img-fluid" src="./images/logo.png" alt="" />
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="btn btn-warning mr-1">
                            { 
                                balance === false
                                ?
                                <>
                                    <img className="loading-amount" src="./images/loading-amount.gif" alt="" />
                                </>
                                :
                                `${balance} HLC`
                            } 
                        </div>
                        <div className="button btn btn-primary"
                            onClick={() => handleConnectWallet()}
                        >
                            { address === "" ? "Connect Wallet" : `${truncateEthAddress(address)}`}
                        </div>
                        
                        {/* <div className="btn btn-primary ml-1" onClick={() => updateHCL_Balance(dispatch)}>
                            update balance hereeee
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
