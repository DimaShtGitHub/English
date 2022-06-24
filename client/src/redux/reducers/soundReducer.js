import {initState} from '../initState';

export const soundReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_SOUND':
      return payload;
    default:
      return state;
  }
}
