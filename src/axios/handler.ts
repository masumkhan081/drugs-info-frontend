import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
// axios.defaults.baseURL = BASE_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const postHandler = async (endpoint, body) => {
  try {
    const res = await axios.post(`${BASE_URL + endpoint}`, body, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getHandler = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL + endpoint}`, config);
    return response;
  } catch (err) {
    return err;
  }
};

export const patchHandler = async (endpoint, data) => {
  try {
    const response = await axios.patch(`${BASE_URL + endpoint}`, data, config);

    return response;
  } catch (err) {
    return err;
  }
};
