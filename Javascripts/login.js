const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/login`;

//Function to login user
async function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //User object
  let login = {
    username: username,
    password: password,
  };

  //Checking if username and password are from same user
  if (login.username && login.password) {
    const currentUserJSON = JSON.stringify(login);

    //POST of the user object
    let data = await fetch(RESOURCE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: currentUserJSON,
    }).then((response) => response.json());
    console.log(data);

    // Getting information from the data
    let { user_ID, userRoles, firstName, lastName } = data;
    console.log(data);
    //Storing the data
    localStorage.setItem("userRoles", userRoles);
    localStorage.setItem("user_ID", user_ID);

    



    // Sending them to website dependent upon role

    switch (userRoles) {
      case "Admin":
        window.location.href = "/HTML/admin.html";
        break;

      case "FinanceManager":
        window.location.href = "/HTML/financeManager.html";
        break;
        
      case "Employee":
        window.location.href = "/HTML/employee.html";
        break;

      default:
        window.location.href = "/HTML/index.html";
    }
  }
if (response.status == 401) {
      alert('login information incorrect')
      loginUser();
    }
 }


