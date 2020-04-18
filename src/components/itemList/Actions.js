import React, {useState} from "react";
import {connect} from "react-redux";
//Components
import Modal from "../elements/Modal"
function Actions(props) {
    const {item} = props
    const [openDelete, setOpenDelete] = useState(false)
    const [openDone, setOpenDone] = useState(false)
    const delateItem = () => {

    }

    const changeStatus = () => {
      
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
        <hr />
        <button 
          onClick={openDoneDialog} 
          type="button" 
          className="btn btn-primary">
            Make as done
        </button>
        <Modal 
          title="Are you sure you want to delete this item" 
          butonText="Delete"  
          submit={delateItem} 
          show={openDelete} 
          onHide={openDeleteDialog}/>
        <Modal 
          title="Change status to done" 
          butonText="Make Done"  
          submit={changeStatus} 
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
    };
};

export default connect(mapStateToProps, mapStateToAction)(Actions);