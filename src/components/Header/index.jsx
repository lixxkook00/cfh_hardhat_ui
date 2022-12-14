import React from 'react'
import './Header.scss'

import { connectWallet } from "../../utils/connectWallet"

export default function Header() {
  return (
    <div className="header">
        <div className="container">
            <div className="header-wrapper d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <img className="img-fluid" src="./images/logo.png" alt="" />
                </div>

                <div className="button btn btn-primary"
                    onClick={() => connectWallet()}
                >
                    Connect Wallet
                </div>
            </div>
        </div>
    </div>
  )
}
