import {GET_ALL, CHANGE_LIST, OPEN_MODAL,CHANGE_ERROR, CHANGE_DATA} from './Types'

const initState = {
      allItems:null,
      open:false,
      errors:null,
      formData:{}
};

export const ToDoReducer = (state = initState, action) => {
            switch(action.type){
                  case GET_ALL:
                        return{
                              ...state,
                              allItems:action.payload
                        };
                  case CHANGE_LIST:
                        return{
                              ...state,
                              allItems:[...action.payload]
                        };
                  case OPEN_MODAL:
                        return{
                              ...state,
                              open:action.payload
                        };
                  case CHANGE_ERROR:
                        return{
                              ...state,
                              errors:action.errors
                        };
                  case CHANGE_DATA:
                        return{
                              ...state,
                              formData:action.payload
                        };
                  default:
                        return state;
            }
  
};
