const BASE_API_URL = "http://localhost:8080/api"



function getReimbursements(){
    fetch(`${BASE_API_URL}/reimbursements`)
        .then((response) => response.json())
        .then((data) => createReimbursementElements(data));
    
}

window.onload = getReimbursements;

function createReimbursementElements(reimbursementData) {
    reimbursementData.forEach((reimbursement) => createReimbursement(reimbursement));
}


function createReimbursement(reimbursement){

    const reimbursementEle = document.createElement ("div");
    reimbursementEle.setAttribute("type", "reimbursement");
    reimbursementEle.setAttribute("onclick", "flip(this)");


}