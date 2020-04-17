import {GET_ALL} from './Types'

export const getAllToDoList = () => {
    const toDoList = JSON.parse(localStorage.getItem('toDoList'));
    return async dispatch => {
      dispatch({
        type: GET_ALL,
        payload: toDoList
      });
    };
  };