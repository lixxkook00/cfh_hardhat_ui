import { setUserInfor } from "../actions";
import { loginWithWallet } from "../api/user";

export async function connectWallet(dispatch) {
    if(window.ethereum){
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            if (window.ethereum.selectedAddress) {
                const infor = await loginWithWallet()

                // await console.log("infor",infor)
                await dispatch(setUserInfor(infor))
                return window.ethereum.selectedAddress;
            }
        } catch (error) {
            return error
        }
    }else{
      alert("install metamask extension!!")
    }
}

export async function disconnectWallet() {
    if(window.ethereum){
        try {
            await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [
                {
                    eth_accounts: {}
                }
                ]
            });
        } catch (error) {
            return error
        }
    }else{
      alert("install metamask extension!!")
    }
}