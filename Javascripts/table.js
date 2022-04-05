let myTable = document.querySelector('#table')
let headers = ['Amount', 'Description', 'Type', 'Submitted', 'Resolved', 'Status ID'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);


myTable.appendChild(table);
