import axios from "axios";

const httpRequest = (param) => {
  const { method, url, data } = param;

  if (method === "get") {
    const response = axios.get(url, data);
    return response.data;
  }
};

export default httpRequest;
