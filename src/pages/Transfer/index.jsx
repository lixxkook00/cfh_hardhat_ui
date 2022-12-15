import React from 'react'
import { useDispatch } from 'react-redux';
import { activeLoading } from '../../actions';
import { transfer } from '../../utils/interactionToken';

export default function Transfer() {

    const dispatch = useDispatch();

    const handleTransfer = async (e) => {
        e.preventDefault();
        dispatch(activeLoading())
        const data = {
            addressTo : e.target[0].value,
            amount : e.target[1].value
        }
        
        await transfer(data.addressTo, data.amount, dispatch);
    }

    return (
        <div className="container mt-5">
            <div className="row centering">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleTransfer(e)}>
                        <div className="form-group">
                            <label htmlFor="addressTo">Address Receiver</label>
                            <input type="text" className="form-control" id="addressTo" placeholder="Addresss" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" className="form-control" id="amount" placeholder="Addresss" />
                            <small id="amount" className="form-text text-muted">HLC currency</small>
                        </div>

                        <button type="submit" className="btn btn-info">
                            Transfer Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
