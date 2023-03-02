import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import truncateEthAddress from 'truncate-eth-address';

export default function Home() {

    const userInfor = useSelector(state => state.userInfor)

    return (
        <div className="home">
            <div className="container">
                <div className="centering">
                    {
                        userInfor.username
                        ?
                        <div className='mt-5'>Welcome back <b >{userInfor.full_name}</b></div>
                        :
                        <div className="centering h-100">
                            <Link to='/register' className='gradient-box'> You are new member register now !!!</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
