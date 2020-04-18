import React, {useEffect} from "react";
import {connect} from "react-redux";
//Actions
import {getAllToDoList} from "../../redux/ToDo/ToDoAction"
//Components
import Item from './Item'
//Style
import "./List.scss"

function List(props) {
    const {toDoList, getAllToDoList} = props
    
    useEffect(() => {
        getAllToDoList()
    }, [])

    console.log(toDoList, "toDoList")
    return (
        <div className='list'>
            <table className="table table-striped ">
                <thead>
                    <tr>
                    <th>id</th>
                    <th className="text-left">Title && description</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoList && toDoList.map(item =>{
                        return <Item key={item.id} item={item} />
                    })}
                </tbody>
            </table>
            
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

export default connect(mapStateToProps, mapStateToAction)(List);