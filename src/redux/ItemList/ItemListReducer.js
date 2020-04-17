import {GET_ALL} from './Types'

const initState = {
      allItems:null
};

export const ItemListReducer = (state = initState, action) => {
            switch(action.type){
                  case GET_ALL:
                        return{
                              ...state,
                              allItems:action.payload
                        };
                  default:
                        return state;
            }
  
};
