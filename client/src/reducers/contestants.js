import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (contestants = [], action) => {
  switch (action.type) {
    case DELETE:
      return contestants.filter((contestant) => contestant._id !== action.payload);
    case UPDATE:
      return contestants.map((contestant) => (contestant._id === action.payload._id ? action.payload : contestant));
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...contestants, action.payload];
    default:
      return contestants;
  }
};