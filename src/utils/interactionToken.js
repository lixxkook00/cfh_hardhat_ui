import FormatAmount from './formatBalance';
import { removeLoading, updateHlcBalance } from '../actions';

const Web3 = require('web3');
const HLC_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const HLC_ADDRESS = "0xeb4C826337148cEFa938584ccBF71549F13B0FEf"
// const MY_PRIV_KEY = "05306d051fc4fa5d4c21c0bfa72fa34be6570db20ecc7fc0fcf610c77331145e"
const BSCTEST_URL = "https://data-seed-prebsc-1-s1.binance.org:8545"

async function hlcContract() {
    const web3 = await new Web3(BSCTEST_URL)
    return await new web3.eth.Contract(HLC_ABI,HLC_ADDRESS)
}

export async function getBalanceHLC() {
    const contract = await hlcContract()

    if(window.ethereum.selectedAddress){
        const balanceBN = await contract.methods.balanceOf(window.ethereum.selectedAddress).call()
        const finalBalance = await FormatAmount(balanceBN.toString(),18)
        return finalBalance
    }

    return false
}

export async function updateHCL_Balance (dispatch) {
    const balance = await getBalanceHLC();
    // console.log("balance in updateHCL_Balance",balance)
    await dispatch(updateHlcBalance(balance))
}

export async function transfer(addressTo, amount, dispatch, setTxHash) {

    try {
        const web3 = await new Web3(BSCTEST_URL)
        const contract = await hlcContract();
        contract.defaultChain = "bsctest"

        const data = await contract.methods['transfer'](
            addressTo, 
            web3.utils.toWei(amount.replace(/,/g, "").toString(), 'ether')
        ).encodeABI();
        
        const transactionParameters = {
            to: HLC_ADDRESS,
            from: window.ethereum.selectedAddress,
            value: '0x00',
            data: data,
        };

        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],

        }).then((result) => {
            setTxHash(result)

        }).catch((error) => {
           alert(error);
        });

        dispatch(removeLoading())    
        return txHash;

    }
    catch (error) {
        if(error?.message) { 
            alert(error.message);
        }
        else { 
            alert(error);
        }
        dispatch(removeLoading())
        window.location.reload();
    }
    
}   


export async function transaction() {

    try {
        const web3 = await new Web3(BSCTEST_URL)
        // var n = await web3.eth.getBlockNumber();

        var block = await web3.eth.getBlock(1, true);

        console.log("block number : ", block)

        // // var txs = [];
        // // for(var i = 0; i < n; i++) {
        // //     var block = await web3.eth.getBlock(i, true);
        // //     console.log("block.transactions",block.transactions)

        // //     for(var j = 0; j < block.transactions; j++) {
        // //         console.log("fuck",block.transactions[j])
        // //         if( block.transactions[j].to == web3.eth.selectedAddress )
        // //             txs.push(block.transactions[j]);
        // //     }
        // // }

        // // console.log(txs)

    } catch (error) {
        
    }
    
}