const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/login`;

async function loginUser(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const login = {
        username: username,
        password:password
    }
        if (login.username && login.password){
        const currentUserJSON = JSON.stringify(login);
        console.log();
        let data = await fetch(RESOURCE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: currentUserJSON
            
    
        }).then(response => response.json())
        .then((data)=>console.log(data))

        console.log(data);
    }
    
        if(response.status == 200){
    
        }else{
    
        }
        console.log(currentUserJSON);
    }
    