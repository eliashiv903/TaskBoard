
let arr = [];

if(localStorage.getItem("arrStringify") != null) arr = JSON.parse(localStorage.getItem("arrStringify"));
remLocal(arr);

function remLocal(arr1){
    for(let i =0; i<arr1.length;i++){
        if (arr1[i] != null){
        var table = document.getElementById('center'),
        row = table.insertRow(1),
        cell1 = row.insertCell(0),
        cell2 = row.insertCell(1),
        cell3 = row.insertCell(2),
        cell4 = row.insertCell(3);
        cell1.innerHTML =  `<h3>${arr1[i].text}</h3>`
        cell2.innerHTML =  `<h3>${arr1[i].date}</h3>`
        cell3.innerHTML = `<input type="checkbox" class="scales" name="scales" >`
        cell4.innerHTML = `<button class="btnDelete" onclick="myFunction(this, ${i});">Delete</button>`
        }
    }
}

//localStorage.setItem(arrs, stringArr);

class Task{
    constructor(text, date, row){
        this.text = text;
        this.date=date;
        this.row = row;
               
        } 
        /* 
        create(){
            var table = document.getElementById('center'),
            row = table.insertRow(-1),
            cell1 = row.insertCell(0),
            cell2 = row.insertCell(1),
            cell3 = row.insertCell(2),
            cell4 = row.insertCell(3);

            cell1.innerHTML =  `<h3>${text.value}</h3>`
            cell2.innerHTML =  `<h3>${date.value}</h3>`
            cell3.innerHTML = `<input type="checkbox" id="scales" name="scales" >`
            cell4.innerHTML = `<button >Delete</button>`
        }
        */
        
    }
    
    function create(index){
       
            var table = document.getElementById('center'),
            row = table.insertRow(1),
            cell1 = row.insertCell(0),
            cell2 = row.insertCell(1),
            cell3 = row.insertCell(2),
            cell4 = row.insertCell(3);

            cell1.innerHTML =  `<h3>${arr[index].text}</h3>`
            cell2.innerHTML =  `<h3>${arr[index].date}</h3>`
            cell3.innerHTML = `<input type="checkbox" class="scales" name="scales" >`
            cell4.innerHTML = `<button class="btnDelete" onclick="myFunction(this, ${index});">Delete</button>`
            
            const btnDelete = document.querySelector(".btnDelete");
            
   
    }

    function myFunction(elm, index) {
        elm.parentNode.parentNode.parentNode.removeChild(elm.parentNode.parentNode);
        delete arr[index];
        let stringArr = JSON.stringify(arr);
        localStorage.setItem("arrStringify", stringArr);
        
    }


const inputText = document.querySelector("#text");
const inputDate = document.querySelector("#date");
const btnPush = document.querySelector(".btnPush");



function pushtask(){
    //mytask.create();
    const loc = arr.length;
    const mytask  = new Task(inputText.value, inputDate.value, loc);
    arr[arr.length] = mytask;
    const stringArr = JSON.stringify(arr);
    localStorage.setItem("arrStringify", stringArr);
    create(loc);
}

btnPush.addEventListener('click', pushtask);














