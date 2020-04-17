import React, {useEffect} from 'react';
import {connect} from 'react-redux';
//Actions
import {getAllToDoList} from '../../redux/ItemList/ItemListAction'
//Components
import Item from './Item'

function List(props) {
    const {toDoList, getAllToDoList} = props
    
    useEffect(() => {
        getAllToDoList()
    }, [])

    return (
        <div className='list'>
            {toDoList && toDoList.map(item =>{
                return <Item item={item} />
            })}
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
        getAllToDoList: lang => dispatch(getAllToDoList())
    };
};

export default connect(mapStateToProps, mapStateToAction)(List);