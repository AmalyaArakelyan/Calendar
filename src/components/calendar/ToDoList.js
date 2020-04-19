import React, {useState} from "react";
import {connect} from "react-redux";
//Actions
import {getAllToDoList} from "../../redux/ToDo/ToDoAction"
import {changeStatus} from "../../redux/ToDo/ToDoAction"
//Components
import Modal from "../elements/Modal"
// import Item from './Item'
//Style
import "./ToDoList.scss"
//Icons
import noCheck from "../../assets/icons/noCheck.png"
import check from "../../assets/icons/check.png"

function List(props) {
    const {selected, changeStatus} = props
    const [openDone, setOpenDone] = useState(false)
    const [id, setId] = useState(false)
    
    const changeItemStatus = () => {
      debugger
      changeStatus(id)
    }
    
    const openDoneDialog = id => {
      setOpenDone(!openDone)
      setId(id)
    }

    return (
      <div className="show-list">
        {selected.map(item => {
            return <div className="item">
                      <div className="title">
                        <h4>{item.id} {item.title} </h4>
                        {item.status === "Incomplete" 
                        ?<img 
                          src={noCheck} 
                          alt="Incomplete"
                          onClick={() => openDoneDialog(item.id)}
                          style={{cursor:"pointer"}}
                        />
                        :<img 
                          src={check } 
                          alt="Incomplete"
                        />
                        }
                      </div>
                      <p>{item.description}</p>
                    </div>
        })}
        <Modal 
          title="Change status to done" 
          butonText="Make Done"  
          submit={changeItemStatus} 
          show={openDone} 
          onHide={openDoneDialog}/>
      </div>
    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapStateToAction = dispatch => {
    return {
        getAllToDoList: () => dispatch(getAllToDoList()),
        changeStatus: (id) => dispatch(changeStatus(id))
    };
};

export default connect(mapStateToProps, mapStateToAction)(List);