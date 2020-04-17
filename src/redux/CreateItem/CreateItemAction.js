import {OPEN_MODAL} from './Types'

export const openModal = () => {
    return async (dispatch, getState) => {
      const open = getState().createItem.open
      dispatch({
        type: OPEN_MODAL,
        payload: !open
      });
    };
  };