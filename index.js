const x4grid = document.querySelector("#x4grid");
const container = document.querySelector("#container");

let setRows = 4;
let setColumns = 4;

function createGrid(setRows,setColumns){
    for (i = 0; i < setRows; i++) {
        const row = document.createElement("row");
        
        container.appendChild(row);

       
        for (j = 0; j < setColumns; j++) {
          const column = document.createElement("column");
          column.textContent = j;
          row.appendChild(column);

          
        }
      }
      
      

}



function add(num1 , num2){
    let sum = 0;
    sum = num1 + num2;
    return sum;
}; 


function subtract(num1 , num2){
    let sum = 0;
    sum = num1 - num2;
    return sum;
};

function multiply(num1 , num2){
    let sum = 0;
    sum = num1 * num2;
    return sum;
};

function divide(num1 , num2){
    let sum = 0;
    sum = num1 / num2;
    return sum;
};


function operate(num1 , num2, operator){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            break;
    }
};

createGrid(setRows,setColumns);