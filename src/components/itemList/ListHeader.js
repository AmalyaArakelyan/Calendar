import React from 'react';
//Bootstrap
import { Button } from 'react-bootstrap';
//Style
import './ListHeader.scss'

function ListHeader() {

  return (
    <div className='list-header'>
       <h3>TO DO LIST DUE TO APR 12 2020</h3>
      <Button variant="outline-success">Add a new to-do</Button>
    </div>
  );
}


export default ListHeader;