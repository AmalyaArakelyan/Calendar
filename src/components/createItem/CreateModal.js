import React from 'react';
import {connect} from 'react-redux';
//Bootstrap
// import { Modal, Button } from 'react-bootstrap';
//Actions
import {openModal, saveItem} from '../../redux/ToDo/ToDoAction'
//Components
import CreateForm from './CreateForm'
import Modal from "../elements/Modal"

function ModalWrapp(props) {
  const {open, openModal, saveItem} = props
 
  const openCreate = () =>{
    openModal(false)
  }

  const saveNewItem = () => {
    saveItem()
  }

  return (
    <Modal 
      title="Add a new todo" 
      butonText="Save Todo"  
      submit={saveNewItem} 
      show={open} 
      onHide={openCreate}>
        <CreateForm/>
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

