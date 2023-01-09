import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateHCL_Balance } from '../../utils/interactionToken';

export default function TransactionModal({txHash,showModal,handleCloseModal}) {
    const dispatch = useDispatch()
        
    const closeModal = async () => {
        // await updateHCL_Balance(dispatch)
        handleCloseModal()
    }
    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>View your transaction</Modal.Title>
            </Modal.Header>

            <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank">
                {txHash}
            </a>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}