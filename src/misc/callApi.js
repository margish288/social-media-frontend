import axios from "axios";
import { getUserToken } from "./getUserToken";

export const callApi = async (
  apiUrl,
  method,
  dataToSend,
  contentType = "application/json",
  responseType = "application/json"
) => {
  const token = getUserToken();

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": contentType,
  };

  let responseData = null;
  switch (method) {
    case "GET":
      responseData = await axios.get(apiUrl, { headers });
      break;

    case "POST":
      responseData = await axios.post(apiUrl, dataToSend, { headers });
      break;

    case "PUT":
      break;

    default:
      break;
  }

  return responseData;
};
