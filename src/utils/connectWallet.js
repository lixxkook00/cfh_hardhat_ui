export function connectWallet() {
    if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'})
        .then(res=>{
            console.log(res) 
            console.log(window.ethereum)
        })

    }else{
      alert("install metamask extension!!")
    }
}