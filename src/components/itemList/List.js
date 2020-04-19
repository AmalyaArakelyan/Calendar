import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
//Actions
import {getAllToDoList} from "../../redux/ToDo/ToDoAction"
//Components
import Item from './Item'
//Style
import "./List.scss"

function List(props) {
    const {toDoList, getAllToDoList, keyword,} = props
    const [searchResult, setResult] = useState(null)

    useEffect(() => {
        getAllToDoList()
    }, [])

    useEffect(() => {
        if(keyword){
            const result = toDoList.filter(item => item.title.includes(keyword));
            setResult(result)
        }else{
            setResult(null)
        }

    }, [keyword, toDoList])

    

    const itemList = searchResult || toDoList

    return (
        <div className='list'>
            {itemList && 
            <table className="table table-striped ">
                <thead>
                    <tr>
                    <th>id</th>
                    <th className="text-left">Title && description</th>
                    <th className="text-left">Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map(item =>{
                        return <Item key={item.id} item={item} />
                    })}
                </tbody>
            </table>
            }
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

export default connect(mapStateToProps, mapStateToAction)(List);