import axios from 'axios';

const url = 'http://localhost:5500/';

export const fetchContestants = () => axios.get(url);
export const createContestant = (newContestant) => axios.post(url, newContestant);
export const updateContestant = (id, updateContestant) => axios.patch(`${url}/${id}`, updateContestant);
export const deleteContestant = (id) => axios.delete(`${url}/${id}`);

