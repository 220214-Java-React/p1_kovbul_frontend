const BASE_API_URL = "http://localhost:8080/api"

// localStorage.getItem(user_ID);
// var author_id = +localStorage['user_ID']
// typeof author_id



function getReimbursements(){

    // let person = localStorage.getItem('user_ID');
    // console.log(person);


    fetch(`${"http://localhost:8080/api/reimbursements?author_id=" + localStorage.getItem('user_ID')}`)
        .then((response) => response.json())
        .then((data) => createReimbursementElements(data));

        console.log(data);
}

const content = document.getElementById("content");
//console.log(data);
window.onload = getReimbursements;

function createReimbursementElements(reimbursementData){
    console.log(reimbursementData);
    reimbursementData.forEach(reimbursement => createReimbursement(reimbursement))
}

function createReimbursement(reimbursement){
    const reimbursementEle = document.createElement('div');
    reimbursementEle.setAttribute("class", "reimbursement");


    const amount = document.createElement('p');
    amount.textContent = reimbursement.amount;

    const description = document.createElement('p');
    description.textContent = reimbursement.description;

    content.appendChild(reimbursementEle);
    reimbursementEle.appendChild(amount);
    reimbursementEle.appendChild(description);

}
