import axios from "axios";
import { loginUrl, registerUrl, getUser } from "./urls";

export const registerUser = async (data) => {
  let response = await axios({
    method: "POST",
    url: registerUrl,
    data,
  });
  return response.data;
};

export const loginUser = async (data) => {
  let response = await axios({
    method: "POST",
    url: loginUrl,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    data,
  });
  return response.data;
};

// export const fetchUser = async (email, token) => {
//   let response = await axios({
//     method: "GET",
//     url: `${getUser}${email}`,
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return response.data;
// };
