import axios from "axios"
import { API_URL } from "./URL"

export const getAPI = async (path, params) => {
  try {
    const { data } = await axios.get(API_URL + path, {
      params,
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}

export const postAPI = async (path, body) => {
  try {
    const { data } = await axios.post(API_URL + path, body, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    });
    return data;
  } catch (e) {
    console.error(e);
  }
}