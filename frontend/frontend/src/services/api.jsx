import axios from "axios";

const api_url = "http://localhost:5000";

export async function getAllRegistration() {
  const { data } = await axios.get(`${api_url}/registration`);

  return data;
}

export async function postRegistration(body) {
  const { data } = await axios.post(`${api_url}/registration`, body);

  return data;
}

export async function destroyRegistration(body) {
  const { data } = await axios.delete(`${api_url}/registration`, body);

  return data;
}
