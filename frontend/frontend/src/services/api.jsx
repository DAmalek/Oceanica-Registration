import axios from "axios";

const api_url = "localhost:5000";

export async function getAllRegistration() {
  const { data } = await axios.get(`${api_url}/registration`);
}
