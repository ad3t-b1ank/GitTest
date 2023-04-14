const rows = document.getElementById("rows");
const columns = document.getElementById("columns")

let rowplus = document.getElementById("rowplus");
let rowminus= document.getElementById("rowminus");

let columnplus = document.getElementById("columnplus");
let columnminus = document.getElementById("columnminus");

rowplus.addEventListener('click', ()=>{
    const newrow = document.createElement("tr");
    const newdata = document.createElement("th");
    
    rowcount = rows.childElementCount
    newdata.innerHTML = `F${rowcount}`;
    
    newrow.append(newdata);
    
    rows.appendChild(newrow);

    console.log("child added successfully")
});

rowminus.addEventListener('click', ()=>{    
    rows.removeChild(rows.lastElementChild);

    console.log("row child removed successfully")
});

columnplus.addEventListener('click', ()=>{
    const newcolumn = document.createElement("th");
    
    columncount = columns.childElementCount
    newcolumn.innerHTML = `W${columncount}`;    
    columns.appendChild(newcolumn);

    console.log("column child added successfully")
});

columnminus.addEventListener('click', ()=>{
    columns.removeChild(columns.lastElementChild);

    console.log("column child removed successfully")
});
