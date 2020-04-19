import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as dateFns from "date-fns";
//Actions
import {getAllToDoList} from "../../redux/ToDo/ToDoAction"
//Components
import Calendar from './Calendar'

function ToDoCalendar(props) {
  const [todoDates, setTodoDates] = useState({})
  const {toDoList, getAllToDoList} = props

  useEffect(() => {
    getDatesArray()
  }, [toDoList])

  const getDatesArray = () => {
      let CheckObject = {}
      for (var i = 0; i < toDoList.length; i++) {
        const item = toDoList[i]
        const day = item.date && dateFns.format(item.date, "MM/D");
        if(CheckObject[day]){
          CheckObject[day].push(item)
        }else{
          CheckObject[day]=[]
          CheckObject[day].push(item)
        }
        
      }
      setTodoDates(CheckObject)
  }

  return (
    <div id="to-do-calendar">
      <Calendar selected={todoDates} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
      toDoList:state.toDoList.allItems
  };
};

const mapStateToAction = dispatch => {
  return {
      getAllToDoList: () => dispatch(getAllToDoList())
  };
};

export default connect(mapStateToProps, mapStateToAction)(ToDoCalendar);
