import React from 'react';
//Bootstrap
import { Modal, Button } from 'react-bootstrap';

export default function ModalWrap(props) {
  const {title, butonText, show, onHide, children, submit} = props
  return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            cansel
          </Button>
          <Button variant="primary" onClick={submit}>
            {butonText}
          </Button>
        </Modal.Footer>
      </Modal> 
  );
}
