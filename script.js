// var items = document.getElementsByClassName("list-items");
// console.log(items[0]);
// items[1].textContent ="Go fishing";

document.getElementById('add_button').addEventListener('click', editList);


let userInput;
let list4text = document.getElementById("list4");

let listDiv = document.getElementById("list");




function editList () { 
    let newList = document.createElement('li');
    newList.className = "list-item";
   // console.log("button clicked");

    input = document.getElementById("input");
    let userText = document.createTextNode(input.value)
    newList.appendChild(userText);
    newButton = document.createElement('button');
    newButton.className="list-button";
    newButton.innerText="Del";
    
    newList.appendChild(newButton);
    listDiv.appendChild(newList)
    //console.log(newList)
    input.value = " "
    
}

document.addEventListener('click', delList);


function delList (e){
   if (e.target.className=="list-button"){
       if (confirm('Are your sure?')){
           console.log(e.target.parentElement);
           let liItem = e.target.parentElement;
           list.removeChild(liItem);
       }
   };
}


//let listItemText = document.createTextNode(userInput);


