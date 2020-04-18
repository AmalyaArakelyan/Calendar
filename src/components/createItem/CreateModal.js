import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
//Bootstrap
import { Modal, Button } from 'react-bootstrap';
//Actions
import {getAllToDoList} from '../../redux/ToDo/ToDoAction'
import {openModal, saveItem} from '../../redux/ToDo/ToDoAction'
//Components
import CreateForm from './CreateForm'

function ModalWrapp(props) {
  const {open, openModal, saveItem} = props
 
  const openCreate = () =>{
    openModal(false)
  }

  const saveNewItem = () => {
    saveItem()
  }

  return (
      <Modal show={open} onHide={openCreate}>
        <Modal.Header>
          <Modal.Title>Add a new todo due ti 12 APR 2020 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={openCreate}>
            cansel
          </Button>
          <Button variant="primary" onClick={saveNewItem}>
            Save To Do
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
const mapStateToProps = state => {
  return {
    open:state.toDoList.open
  };
};

const mapStateToAction = dispatch => {
  return {
    openModal: open => dispatch(openModal(open)),
    saveItem: () => dispatch(saveItem())
  };
};

export default connect(mapStateToProps, mapStateToAction)(ModalWrapp);

