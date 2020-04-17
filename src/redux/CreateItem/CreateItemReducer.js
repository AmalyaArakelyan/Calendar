import {OPEN_MODAL} from './Types'

const initState = {
      open:false
};

export const CreateItemReducer = (state = initState, action) => {
            switch(action.type){
                  case OPEN_MODAL:
                        return{
                              ...state,
                              open:action.payload
                        };
                  default:
                        return state;
            }
  
};
