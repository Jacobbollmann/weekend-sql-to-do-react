import axios from 'axios';

export const fetchTasks = () => {
  return axios.get('/api/todo');
};

export const postTask = (taskData) => {
  return axios.post('api/todo', taskData);
};

export const deleteTask = (id) => {
  return axios.delete(`api/todo/${id}`)
};

export const updateTask = (id) => {
  return axios.put(`api/todo/${id}`)
};