import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function TransactionModal({txHash,showModal,handleCloseModal}) {

  
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>View your transaction</Modal.Title>
        </Modal.Header>

        <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank">
            {txHash}
        </a>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
  );
}