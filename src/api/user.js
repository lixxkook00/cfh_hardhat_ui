import axios from 'axios'
import { getValueFromForm } from '../utils';
import swal from '@sweetalert/with-react';
import { activeLoading, removeLoading } from '../actions';

export async function loginWithWallet() {

    const body = new FormData();

    body.append("wallet", window.ethereum.selectedAddress)

    const res = await axios.post('/auth/get-user-by-wallet',body)
    .then(
        res => {
            if(res?.data?.data[0]) { 
                // console.log("res.data.data[0]",res.data.data[0])
                return res?.data.data[0]
            }
            else { 
               console.log("This a new account");
            }
        }
    )
    .catch(
        error => {
            if (error?.response) {
                return error?.response;
            }
        }
    );       
    
    return res
}

export async function getNameWithWallet(walletAddress) {

    const body = new FormData();

    body.append("wallet", walletAddress)

    const res = await axios.post('/auth/get-user-by-wallet',body)
    .then(
        res => {
            if(res?.data?.data[0]) { 
                // console.log("res.data.data[0]",res.data.data[0])
                return res?.data.data[0].full_name
            }
            else { 
               console.log("This a new account");
            }
        }
    )
    .catch(
        error => {
            if (error?.response) {
                return error?.response;
            }
        }
    );       
    
    return res
}

export async function register(e,setErrMessage,dispatch) {

    dispatch(activeLoading())

    const body = new FormData();

    body.append("userName", getValueFromForm(e,"username"))
    body.append("wallet", window.ethereum.selectedAddress)
    body.append("fullName", getValueFromForm(e,"fullname"))
    body.append("password", getValueFromForm(e,"password"))
    body.append("rePassword", getValueFromForm(e,"rePassword"))
    body.append("email", getValueFromForm(e,"email"))
    body.append("phone", getValueFromForm(e,"phone"))

    const res = await axios.post('/auth/register',body)
    .then(
        res => {
            if(res?.status) { 
                console.log("register true",res)
                dispatch(removeLoading())
                swal(res.data.msg, 'Go to login', 'success', 1000, false);
                return 
            }
            else { 
                console.log("register false",res)
            }
        }
    )
    .catch(
        error => {
            if (error?.response) {
                dispatch(removeLoading())
                setErrMessage(error?.response.data.msg)
                return error?.response;
            }
        }
    );       
    
    return res
}