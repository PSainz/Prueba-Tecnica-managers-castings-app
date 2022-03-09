import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (contestants = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...contestants, action.payload];
    case UPDATE:
      return contestants.map((contestant) => (contestant._id === action.payload._id ? action.payload : contestant));
    case DELETE:
      return contestants.filter((contestant) => contestant._id !== action.payload);
    default:
      return contestants;
  }
};