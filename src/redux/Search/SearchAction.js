import { CHANGE } from './Types';

export const changeKeyword = key => {
  return async dispatch => {
    dispatch({
      type: CHANGE,
      payload: key
    });
  };
};


