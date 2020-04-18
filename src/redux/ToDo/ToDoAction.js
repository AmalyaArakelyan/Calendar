import {GET_ALL, OPEN_MODAL,CHANGE_ERROR, CHANGE_DATA} from './Types'
import {CHANGE_LIST} from './Types'
import {Validation, checkAll } from "../../halpers/Validation"
import filds from "../../components/createItem/Filds"

/**
  * Get All todo List 
  * 
  * @param  {Array} toDoList All todo list geting from local storage, 
  *         If there is an endpoint, can make a request and get it from the backend
  * @return {Array} payload All todo list 
  */

export const getAllToDoList = () => {
    const toDoList = JSON.parse(localStorage.getItem('toDoList'));
    return async dispatch => {
      dispatch({
        type: GET_ALL,
        payload: toDoList
      });
    };
  };

  /**
  * Open of close new item creation modal 
  * 
  * @param  {Boolean} open
  * @return {Boolean} payload open 
  */

  export const openModal = open => {
    return async dispatch => {
      dispatch({
        type: OPEN_MODAL,
        payload: open
      });
    };
  };

  /**
  * Change form input
  * 
  * @param  key which date to be changed
  * @param  value than to change
  * @param  {object} formData  geting from store, and changing it
  * @param  {object} errors geting from store, if it exist checking validation and dispatch new errors
  * @return {Object} payload new changed formDate 
  */

  export const changeFormInput = (key, value) =>{
    return async (dispatch, getState) => {
      const errors = getState().toDoList.errors;
      const formData = getState().toDoList.formData;
      if(errors && errors[key]){ 
       const error = Validation[key](value);
       if(error){
         errors[key]=error
       }else{
         delete errors[key]
       }
       dispatch({
        type: CHANGE_ERROR,
        errors:errors
      });
      }
      dispatch({
        type: CHANGE_DATA,
        payload:{
        ...formData,
        [key]:value}
      });
    };
  }

  /**
    * Save new item in todo list
    * 
    * @param  {object} formData it is new item date, geting from store
    * @param  {Object} errors geting from store, if it exist dispatch error
    * @param  {Array} newList all items, geting from store and change it
    * @return {Array} payload new changed todo list 
    */

  export const saveItem = () => {
    return async (dispatch, getState) => {
      let formData = getState().toDoList.formData;
      const errors = checkAll(formData, filds);
      let newList = getState().toDoList.allItems

      if(errors){
       dispatch({
        type: CHANGE_ERROR,
        errors: errors
      });
      }else{
        (!newList) && (newList = []);
        formData.id=newList.length +1;
        formData.status = "Incomplete"
        newList.push(formData)

        //Save newList in locale storage
        localStorage.setItem('toDoList', JSON.stringify(newList));

        dispatch({
          type: CHANGE_LIST,
          payload: newList
        });
        dispatch({
          type: OPEN_MODAL,
          payload: false
        });
        dispatch({
          type: CHANGE_DATA,
          payload: {}
        });
      }
      
    };
  }
   /**
    * change todo status in list
    * 
    * @param  {number} id item of the element to be changed
    * @param  {Array} newList all items, geting from store and change it
    *           If there is an endpoint, can make a request,
    *           it is not correct to change item in Array
    * @return {Array} new updated todo list 
    */

   export const changeStatus = (id) => {
     debugger
    return async (dispatch, getState) => {
      let newList = getState().toDoList.allItems

      for (var i = 0; i < newList.length; i++) {
    
        if (newList[i].id === id) {
          newList[i].status = "Complete";
          break;
        }
      }
      //Save newList in locale storage
      localStorage.setItem('toDoList', JSON.stringify(newList));

      dispatch({
        type: CHANGE_LIST,
        payload: newList
      });
    };
  }

  /**
    * delete todo item from list
    * 
    * @param  {number} id item of the element to be deleted
    * @param  {Array} newList all items, geting from store and change it
    *          If there is an endpoint, can make a request,
    *          it is not correct to change item in Array
    * @return {Array} new updated todo list 
    */

   export const deleteItem = (id) => {
     debugger
    return async (dispatch, getState) => {
      let newList = getState().toDoList.allItems
      
      for (var i = 0; i < newList.length; i++) {
    
        if (newList[i].id === id) {
          newList.splice(i, 1);
          break;
        }
      }
      //Save newList in locale storage
      localStorage.setItem('toDoList', JSON.stringify(newList));

      dispatch({
        type: CHANGE_LIST,
        payload: newList
      });
    };
  }