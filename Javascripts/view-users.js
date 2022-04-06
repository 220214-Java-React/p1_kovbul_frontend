const BASE_API_URL = "http://localhost:8080/api";

// localStorage.getItem(user_ID);
// var author_id = +localStorage['user_ID']
// typeof author_id

function getAllUsers() {
  console.log(localStorage.getItem("user_ID"));
  console.log(localStorage.getItem("userRoles"));
  // let person = localStorage.getItem('user_ID');
  // console.log(person);

  fetch(
    `${
      "http://localhost:8080/api/users"
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      var table = `<table>
                <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>User Role</th>
                </tr>`;

      var rows = data
        .map((users) => {
          return `<tr>
                <td>${users.user_ID}</td>
                <td>${users.firstName}</td>
                <td>${users.lastName}</td>
                <td>${users.email}</td>
                <td>${users.username}</td>
                <td>${users.userRoles}</td>
                </tr>`;
        })
        .join("");

      table += rows;
      console.log(table);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", table);
    });


        
}

getAllUsers();