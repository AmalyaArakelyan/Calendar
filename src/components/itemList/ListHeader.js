import React from "react";
import {connect} from "react-redux";
//Style
import "./ListHeader.scss"
//Actions
import {openModal} from "../../redux/ToDo/ToDoAction"

function ListHeader(props) {
  const {openModal} = props

  const openCreate = () =>{
    openModal(true)
  }

  return (
    <div className='list-header'>
      <h3>TO DO LIST DUE TO APR 12 2020</h3>
      <button 
        onClick={openCreate}
        type="button" 
        className="btn btn-primary">
        Add a new to-do
      </button>
    </div>
  );
}



const mapStateToAction = dispatch => {
  return {
    openModal: open => dispatch(openModal(open))
  };
};

export default connect(null, mapStateToAction)(ListHeader);