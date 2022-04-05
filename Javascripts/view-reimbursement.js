const BASE_API_URL = "http://localhost:8080/api"

// localStorage.getItem(user_ID);
// var author_id = +localStorage['user_ID']
// typeof author_id



function getReimbursements(){

    // let person = localStorage.getItem('user_ID');
    // console.log(person);


    fetch(`${"http://localhost:8080/api/reimbursements?author_id=" + localStorage.getItem('user_ID')}`)
        .then((response) => response.json()).then(data => {
            console.log(data);
            const html = data.map(reimbursements => {
                return `
                <div class="reimbursements">
                <p>Amount: ${reimbursements.amount}</p>
                <p>Description: ${reimbursements.description}</p>
                <p>Type: ${reimbursements.type_id}</p>
                <p>Submitted: ${reimbursements.submitted}</p>
                <p>Resolved: ${reimbursements.resolved}</p>
                <p>Status: ${reimbursements.status_id}</p>
                </div>
                `;
            }).join("");
            console.log(html);
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
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









