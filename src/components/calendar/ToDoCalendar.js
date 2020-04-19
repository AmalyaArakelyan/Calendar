import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as dateFns from "date-fns";
//Bootstrap
import { Modal } from 'react-bootstrap';
//Actions
import {getAllToDoList} from "../../redux/ToDo/ToDoAction"
//Components
import Calendar from './Calendar'
import ToDoList from "./ToDoList"
function ToDoCalendar(props) {
  const {toDoList, getAllToDoList, keyword} = props

  const [todoDates, setTodoDates] = useState({})
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  
  useEffect(() => {
    if(toDoList){
      getDatesArray()
    }
  }, [toDoList, keyword])

  useEffect(() => {
    getAllToDoList()
  }, [])

  const getDatesArray = () => {
      let CheckObject = {}
      if(keyword){
        for (let i = 0; i < toDoList.length; i++) {
          const item = toDoList[i]
          if(item.title.includes(keyword)){
            const day = item.date && dateFns.format(item.date, "MM/D");
            if(CheckObject[day]){
              CheckObject[day].push(item)
            }else{
              CheckObject[day]=[]
              CheckObject[day].push(item)
            }
          }
          
          
        }
      }else{
        for (let i = 0; i < toDoList.length; i++) {
          const item = toDoList[i]
          const day = item.date && dateFns.format(item.date, "MM/D");
          if(CheckObject[day]){
            CheckObject[day].push(item)
          }else{
            CheckObject[day]=[]
            CheckObject[day].push(item)
          }
          
        }
      }
      
      setTodoDates(CheckObject)
  }

  const openListModal = () =>setOpen(!open)

  const selectDate = e => {
    setSelectedDate(e)
    setOpen(true)
  }

  return (
    <div id="to-do-calendar">
      <Calendar selected={todoDates} selectDate={selectDate}/>
      {selectedDate && todoDates[dateFns.format(selectedDate, "MM/D")]
      ?<Modal show={open} onHide={openListModal} centered>
        <Modal.Header closeButton>
        <Modal.Title>To Do list of {dateFns.format(selectedDate, "MM/D/YYYY")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ToDoList selected={todoDates[dateFns.format(selectedDate, "MM/D")]}/>
        </Modal.Body>
      </Modal>
      :null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
      toDoList:state.toDoList.allItems,
      keyword:state.search.keyword
  };
};

const mapStateToAction = dispatch => {
  return {
      getAllToDoList: () => dispatch(getAllToDoList())
  };
};

export default connect(mapStateToProps, mapStateToAction)(ToDoCalendar);
