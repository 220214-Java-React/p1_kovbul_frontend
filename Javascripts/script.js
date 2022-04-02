const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = "http://localhost:8080/api/users"

function getUsers() {
  fetch(`${RESOURCE_URL}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

window.onload = getUsers();

