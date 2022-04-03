const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/reimbursements`;

localStorage.getItem('user_id')
console.log(localStorage.getItem('user_id'))
function employeeOptions(){
    fetch(`${BASE_API_URL}/users`)
        .then((response) => response.json())
        .then((data) => createUserElements(data));

}