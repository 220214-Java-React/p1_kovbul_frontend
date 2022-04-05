const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/reimbursements`;


async function newReimbursement(){
    const type = document.getElementById("type").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;


    const createReimbursement = {
        type: type,
        amount: amount,
        date: date
    }

    const newUserJSON = JSON.stringify(createReimbursement);

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