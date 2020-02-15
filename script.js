// var items = document.getElementsByClassName("list-items");
// console.log(items[0]);
// items[1].textContent ="Go fishing";

document.getElementById('add_button').addEventListener('click', addListItem);

document.getElementById('input').addEventListener('keydown', function(){checkEnter(event, addListItem)});

function checkEnter(e, toRun) { 
    if(e.key=='Enter')  {
        event.preventDefault();
        toRun(); 
                        }
}



let listDiv = document.getElementById("list");

//code below add a list item

function addListItem () { 
    let newListItem = document.createElement('li');
    newListItem.className = "list-item";
   // console.log("button clicked");

    let input = document.getElementById("input");

    if (input.value!=0) {
        let userText = document.createTextNode(input.value)
       
        delButton = document.createElement('button');
        delButton.className="list-button";
        delButton.innerText="Del";

        editButton = document.createElement('button')
        editButton.className = "edit-button"
        editButton.innerText = "Edit"

        newspan = document.createElement('span');
        newspan.className = 'list-text'
        newspan.appendChild(userText);

        newListItem.appendChild(delButton);
        newListItem.appendChild(editButton);
        newListItem.appendChild(newspan);

        listDiv.appendChild(newListItem)
        //console.log(newList)
        input.value = " "
    }
    
}

// Code below deletes a list item


document.addEventListener('click', editDelList)
document.addEventListener('click', delListItem );

function delListItem (e){
   if (e.target.className=="list-button"){
       if (confirm('Are your sure?')){
           console.log(e.target.parentElement);
           let liItem = e.target.parentElement;
           list.removeChild(liItem);
       }
   };
}


let editBox = document.querySelector('#edit-box');

//editBox.event('keydown', function(){checkEnter(event, fixEdit)});
//match event to the click event on the button

function editDelList (e) { 
    if(e.target.className=="edit-button") {
    //if there is input text trigger done else trigger edit
   // let editText = e.target.parentElement.querySelector('input');
        
    (editBox.value!="") ? fixEdit(event): editListItem(event);
    }
}


function editListItem (e) {
 
        let editBox = document.querySelector('#edit-box');
        let listItem = e.target.parentElement;
        editBox.value = listItem.querySelector('span').textContent;
        console.log(editBox);

        listItem.querySelector('span').textContent="";
        listItem.querySelector('span').appendChild(editBox);
        editBox.style.display = 'inline';
        console.log(listItem.querySelector('span'))
        
        e.target.innerText = "Done";
    
}

function fixEdit (e) {
    let listItem = e.target.parentElement;
    console.log(listItem)

    let editBox = document.querySelector('#edit-box')
    console.log(editBox)

    document.querySelector('body').appendChild(editBox);
    listItem.querySelector('span').textContent = editBox.value ;

    console.log("event works")
    e.target.innerText = "Edit";

    editBox.value = "";
    editBox.style.display= 'none';

}



//Insert a text element

let header = document.querySelector('#header');

newHeading = document.createElement('h4');

newHeadingText = document.createTextNode("git organzied")

newHeading.appendChild(newHeadingText);

let mainHeading = header.children[0];

header.insertBefore(newHeading, mainHeading)

//--------------------------------------------------------------



