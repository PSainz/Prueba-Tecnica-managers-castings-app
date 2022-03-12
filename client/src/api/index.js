import axios from 'axios';

const url = 'https://casting-managers-app.herokuapp.com/contestants';

export const fetchContestants = () => axios.get(url);
export const createContestant = (newContestant) => axios.post(url, newContestant);
export const updateContestant = (id, updateContestant) => axios.patch(`${url}/${id}`, updateContestant);
export const deleteContestant = (id) => axios.delete(`${url}/${id}`);




