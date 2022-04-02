const BASE_API_URL = "http://localhost:8080/api";

function getUsers() {
  fetch(`${BASE_API_URL}/users`)
    .then((response) => response.json())
    .then((data) => createUserElements(data));

  console.log(createUserElements(data));
}

const content = document.getElementById("login");

function createUserElements(userData) {
  console.log(userData);
  userData.forEach((user) => createUser(user));
}

console.log();