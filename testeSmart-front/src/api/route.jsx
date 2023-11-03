import axios from "axios";

export async function getTasks() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/`);
  return res.data;
}

export async function createTasks(body) {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/tasks/`, body);
  return res.data;
}

export async function deleteNote(id) {
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${id}`);
  return res.data;
}

export async function editTask(body, id) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/tasks/${id}`, body);
  return res.data;
}