import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (spots = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...spots, action.payload];
    case UPDATE:
      return spots.map((spot) => (spot._id === action.payload._id ? action.payload : spot));
    case DELETE:
      return spots.filter((spot) => spot._id !== action.payload);
    default:
      return spots;
  }
};