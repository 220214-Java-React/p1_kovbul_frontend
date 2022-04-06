const BASE_API_URL = "http://localhost:8080/api";

// localStorage.getItem(user_ID);
// var author_id = +localStorage['user_ID']
// typeof author_id

function getReimbursements() {
  console.log(localStorage.getItem("user_ID"));
  console.log(localStorage.getItem("userRoles"));
  // let person = localStorage.getItem('user_ID');
  // console.log(person);

  fetch(
    `${
      "http://localhost:8080/api/reimbursements?author_id=" +
      localStorage.getItem("user_ID") +
      "&role_id=" +
      localStorage.getItem("userRoles")
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      var table = `<table>
                <tr>
                <th>User ID</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Type</th>
                <th>Submitted</th>
                <th>Resolved</th>
                <th>Status</th>
                </tr>`;

      var rows = data
        .map((reimbursements) => {
          return `<tr>
                <td>${reimbursements.author_id}</td>
                <td>${reimbursements.amount}</td>
                <td>${reimbursements.description}</td>
                <td>${reimbursements.type_id}</td>
                <td>${reimbursements.submitted}</td>
                <td>${reimbursements.resolved}</td>
                <td>${reimbursements.status_id}</td>
                </tr>`;
        })
        .join("");

      table += rows;
      console.log(table);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", table);
    });

    
            
        
}

getReimbursements();

// const content = document.getElementById("content");

// window.onload = getReimbursements;

// function createReimbursementElements(reimbursementData){

//     reimbursementData.forEach(reimbursement => createReimbursement(reimbursement))
//     console.log(reimbursementData);
// }

// function createReimbursement(reimbursement){
//     const reimbursementEle = document.createElement('div');
//     reimbursementEle.setAttribute("class", "reimbursement");

// }

//     const amount = document.createElement('a');
//     amount.textContent = reimbursement.amount;

//     const description = document.createElement('p');
//     description.textContent = reimbursement.description;

//     content.appendChild(reimbursementEle);
//     reimbursementEle.appendChild(amount);
//     reimbursementEle.appendChild(description);
//     console.log(amount)
//     console.log(description)

//     let stuff = {amount, description};
//     //console.log(stuff)
//     window.onload = createReimbursement;
