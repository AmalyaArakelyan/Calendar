import { CHANGE, GET } from './Types';

const initState = {
  keyword: null,
  searchResult:null
};

export const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        keyword: action.payload,
      };
    case GET:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};
