import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
//Bootstrap
import { Modal, Button } from 'react-bootstrap';
//Actions
import {getAllToDoList} from '../../redux/ItemList/ItemListAction'
import {openModal} from '../../redux/CreateItem/CreateItemAction'
//Components


function ModalWrapp(props) {
  const {open, openModal} = props
 
  const openCreate = () =>{
    openModal()
  }

  return (
    <>

      <Modal show={open} onHide={openCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openCreate}>
            Close
          </Button>
          <Button variant="primary" onClick={openCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapStateToProps = state => {
  return {
    open:state.createItem.open
  };
};

const mapStateToAction = dispatch => {
  return {
    openModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapStateToAction)(ModalWrapp);

