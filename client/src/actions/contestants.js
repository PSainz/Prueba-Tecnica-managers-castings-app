import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getContestants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchContestants();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createContestant = (contestant) => async (dispatch) => {
  try {
    const { data } = await api.createContestant(contestant);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateContestant = (id, contestant) => async (dispatch) => {
  try {
    const { data } = await api.updateContestant(id, contestant);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteContestant = (id) => async (dispatch) => {
  try {
    await api.deleteContestant(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
