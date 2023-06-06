// const baseURL = "http://www.jzhang.tk:8080";
const baseURL = 'http://localhost:8080';

export function loginhelper(data) {
  let url = `${baseURL}/authenticate`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("no");
    }
  });
}

export function signuphelper(data) {
  let url = `${baseURL}/register`

  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 200) {
      window.location = "/";
    }
  });
}

export async function fetchComment(commentId) {
  let url = `${baseURL}/comment/${commentId}`
  let response = await fetch(url, {
    method: "get",
  });
  return await response.json();
}

export async function getComments() {
  let url = `${baseURL}/comment`
  let token = localStorage.getItem("token")
  let response = await fetch(url, {
    method: "get",
    headers: {Authorization: `Bearer ${token}`},
  });
  return await response.json();
}

export async function saveComment(content, beach, score) {
  let url = `${baseURL}/comment?content=${content}&beach=${beach}&score=${score}`
  let token = localStorage.getItem("token")
  return fetch(url, {
    method: "post",
    headers: {Authorization: `Bearer ${token}`},
  }).then((response) => {
    if (response.status === 200) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
}

export function deletComment(commentId) {
  let token = localStorage.getItem("token")
  return fetch(`${baseURL}/comment/${commentId}`, {
    method: "DELETE",
    headers: {Authorization: `Bearer ${token}`},
  }).then((response) => {
    if (response.status === 200) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
}

export function updateComment(commentId, content, score) {
  let token = localStorage.getItem("token")
  return fetch(`${baseURL}/comment/${commentId}?content=${content}&score=${score}`, {
    method: "PUT",
    headers: {Authorization: `Bearer ${token}`},
  }).then((response) => {
    if (response.status === 200) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
}