import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Loading.scss'

export default function Loading() {

    const globalState = useSelector(state => state.loading)

    useEffect(() => {
    },[globalState])

    return (
        <>
            {
                globalState
                &&    
                <div className="loading centering">
                    <div className="loadingio-spinner-spin-ex56k3p2m5l"><div className="ldio-lvmkhbo50x9">
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}