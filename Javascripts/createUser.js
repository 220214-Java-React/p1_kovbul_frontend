const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/users`;


async function submitUser(){
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userRoles = document.getElementById("role_id").value;


    const createUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password:password,
        userRoles: userRoles
    }

    const newUserJSON = JSON.stringify(createUser);

    const response = await fetch(RESOURCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: newUserJSON

    });

    if(response.status == 200){

    }else{

    }

}