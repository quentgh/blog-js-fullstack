// import axios from "axios";

async function post(route, data) {
  let response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let responseData = await response.json();
  return { data: responseData, status: response.status };
}

async function postAuthorization(route, data, method) {
  const token = localStorage.getItem("token");
  let response = await fetch(route, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });

  let responseData = await response.json();
  return { data: responseData, status: response.status };
}

export const Request = {
  post,
  postAuthorization,
};
