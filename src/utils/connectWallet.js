export async function connectWallet() {
    if(window.ethereum){
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' })
            if (window.ethereum.selectedAddress) {
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