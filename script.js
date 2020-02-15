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
        newListItem.appendChild(userText);
        newButton = document.createElement('button');
        newButton.className="list-button";
        newButton.innerText="Del";
        
        newListItem.appendChild(newButton);
        listDiv.appendChild(newListItem)
        //console.log(newList)
        input.value = " "
    }
    
}

// Code below deletes a list item


document.addEventListener('click', editdel, false)
document.addEventListener('click', delListItem );

function editdel (e) {
    if(e.target.className = 'edit-button'){
        (e.target.parentElement.querySelector('input').value=="")? editListItem(event) : fixEdit (event); 
    }

}

function delListItem (e){
   if (e.target.className=="list-button"){
       if (confirm('Are your sure?')){
           console.log(e.target.parentElement);
           let liItem = e.target.parentElement;
           list.removeChild(liItem);
       }
   };
}


function editListItem (e) {
    
        let editText = e.target.parentElement.querySelector('input');
        
        let listItem = e.target.parentElement;
        editText.value = listItem.querySelector('span').textContent;
        listItem.querySelector('span').innerHtml = editText;
        console.log(listItem)
        
        editText.style.display = 'inline';
        console.log(editText);
        e.target.innerText = "Done";
        

       // let editButton = e.target.parentElement.querySelector('.edit-button');
        
        
       // editButton.innerText = "Done";
        //editButton.className ="done-button";

       // return false;
 }
    



       // editButton.addEventListener('click', fixEdit);
      //  editText.addEventListener('keyup', function(){checkEnter(event, fixEdit)});

function fixEdit (e) {
       
            let listItem = e.target.parentElement;
            let editButton = e.target;
            let editText = e.target.parentElement.querySelector('input')
            console.log(listItem)
            //listItem.querySelector('span').removeChild(editText) ;
            listItem.querySelector('span').innerHtml = editText.value + editText;
            editText.value ="";
            editText.style.display='none'
            console.log("event works")
            editButton.innerText = "Edit";
           
           // editButton.className ="edit-button";
        
        
}






//Insert a text element

let header = document.querySelector('#header');

newHeading = document.createElement('h4');

newHeadingText = document.createTextNode("git organzied")

newHeading.appendChild(newHeadingText);

let mainHeading = header.children[0];

header.insertBefore(newHeading, mainHeading)

//--------------------------------------------------------------



