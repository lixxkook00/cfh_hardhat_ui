import React, { useState } from 'react'
import './Register.scss'
import { getValueFromForm } from '../../utils'
import { register } from '../../api/user'
import { useDispatch } from 'react-redux'

export default function Register() {

    const dispatch = useDispatch()
    const [errMessage,setErrMessage] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        register(e,setErrMessage,dispatch)
    }
    
    return (
        <div className="container">
            <div className="register">
                <div className="centering">
                    <div className="title">
                        Register
                    </div>
                </div>

                <div className="row centering">
                    <div className="col-lg-6">
                        <form onSubmit={(e) => handleRegister(e)}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" id="username" placeholder="Addresss"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fullname">Fullname</label>
                                <input type="text" className="form-control" name="fullname" id="fullname" placeholder="Addresss"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" className="form-control" name="password" id="password" placeholder="Addresss"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="rePassword">Password Confirm</label>
                                <input type="text" className="form-control" name="rePassword" id="rePassword" placeholder="Addresss"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" id="email" placeholder="Addresss"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Addresss"/>
                            </div>
                            
                            {
                                errMessage !== ""
                                ?
                                    <div className="error-message">
                                        {errMessage}
                                    </div>
                                :

                                ""
                            }
                            

                            <button type="submit" className="btn btn-info">
                                Register Now
                            </button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
