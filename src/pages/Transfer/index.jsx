import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { activeLoading } from '../../actions';
import Transaction from '../../components/Transaction';
import TransactionModal from '../../modals/TransactionModal';
import { transfer } from '../../utils/interactionToken';

export default function Transfer() {

    const [showModal, setShowModal] = useState(false);
    const [txHash, setTxHash] = useState("")
    const handleCloseModal = () => {
        setShowModal(false);
        forTransfer.current[1].value = ""
    }
    const handleShowModal = () => setShowModal(true);

    const forTransfer = useRef(null)

    const dispatch = useDispatch();

    const handleTransfer = async (e) => {
        e.preventDefault();
        dispatch(activeLoading())
        const data = {
            addressTo : e.target[0].value,
            amount : e.target[1].value
        }
        await transfer(data.addressTo, data.amount, dispatch, setTxHash);

        await setShowModal(true);
    }

    return (
        <>
            <TransactionModal 
                txHash={txHash}
                showModal={showModal} 
                handleCloseModal={handleCloseModal}
                handleShowModal={handleShowModal}
            />

            <div className="container mt-5">
                <div className="row centering">
                    <div className="col-lg-6">
                        <form onSubmit={(e) => handleTransfer(e)} ref={forTransfer}>
                            <div className="form-group">
                                <label htmlFor="addressTo">Address Receiver</label>
                                <input type="text" className="form-control" id="addressTo" placeholder="Addresss" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="text" className="form-control" id="amount" placeholder="Amount" />
                                <small id="amount" className="form-text text-muted">HLC currency</small>
                            </div>

                            <button type="submit" className="btn btn-info">
                                Transfer Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Transaction />
        </>
    )
}
