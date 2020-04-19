import React, {useState} from "react";
import {connect} from "react-redux";
//Actions
import {deleteItem, changeStatus} from "../../redux/ToDo/ToDoAction"
//Components
import Modal from "../elements/Modal"
function Actions(props) {
    const {item, deleteItem, changeStatus} = props
    const [openDelete, setOpenDelete] = useState(false)
    const [openDone, setOpenDone] = useState(false)
    const deleteItemFromList = () => {
      deleteItem(item.id);
      setOpenDelete(false)
    }

    const changeItemStatus = () => {
      changeStatus(item.id);
      setOpenDone(false)
    }
    const openDeleteDialog = () => setOpenDelete(!openDelete)
    const openDoneDialog = () => setOpenDone(!openDone)

    return (
      <>
        <button 
          onClick={openDeleteDialog} 
          type="button" 
          className="btn btn-outline-danger">
            delete
        </button>
        
        {
          item.status === "Incomplete" &&
          <>
            <hr />
            <button 
              onClick={openDoneDialog} 
              type="button" 
              className="btn btn-primary done">
                Make as done
            </button>
          </>
        }
        
        <Modal 
          title="Are you sure you want to delete this item" 
          butonText="Delete"  
          submit={deleteItemFromList} 
          show={openDelete} 
          onHide={openDeleteDialog}/>
        <Modal 
          title="Change status to done" 
          butonText="Make Done"  
          submit={changeItemStatus} 
          show={openDone} 
          onHide={openDoneDialog}/>
      </>
    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapStateToAction = dispatch => {
    return {
      deleteItem: (id) => dispatch(deleteItem(id)),
      changeStatus: (id) => dispatch(changeStatus(id))
    };
};

export default connect(mapStateToProps, mapStateToAction)(Actions);