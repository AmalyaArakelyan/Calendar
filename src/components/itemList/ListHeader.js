import React from 'react';
import {connect} from 'react-redux';
//Bootstrap
import { Button } from 'react-bootstrap';
//Style
import './ListHeader.scss'
//Actions
import {openModal} from '../../redux/CreateItem/CreateItemAction'

function ListHeader(props) {
  const {openModal} = props

  const openCreate = () =>{
    openModal()
  }

  return (
    <div className='list-header'>
       <h3>TO DO LIST DUE TO APR 12 2020</h3>
      <Button onClick={openCreate} variant="outline-success">Add a new to-do</Button>
    </div>
  );
}



const mapStateToAction = dispatch => {
  return {
    openModal: () => dispatch(openModal())
  };
};

export default connect(null, mapStateToAction)(ListHeader);