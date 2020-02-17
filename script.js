





//----------_event listener on document triggering multiple functions with conditions

document.addEventListener('click', function() {
    event.preventDefault;
    delListItem(event);
    editFixList(event);
    addListItem(event);
})

//----------end of section


//---function adds to the list
document.querySelector('#input').addEventListener('keydown', function(){
    let addButton = document.querySelector('#add-button')
    if(event.key=='Enter')  {
        //event.preventDefault();
        addButton.click();
        
}})


function addListItem (e) { 
    
    if (e.target.id =="add-button"){
        let listDiv = document.querySelector('#list')
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
}

//------ end of FUnction--------------



//----function deletes list item

function delListItem (e){
   if (e.target.className=="list-button"){
       if (confirm('Are your sure?')){
           console.log(e.target.parentElement);
           let liItem = e.target.parentElement;
           list.removeChild(liItem);
       }
   };
}
//---end of function





//-------Sets of Functions enbale editing of inputs

let editBox = document.querySelector('#edit-box');

document.addEventListener('click', editFixList)

function editFixList (e) { 
    if(e.target.className=="edit-button") {
    //if there is input text trigger done else trigger edit
   // let editText = e.target.parentElement.querySelector('input');
        
    (editBox.value!="") ? fixEdit(event): editListItem(event);
    }
}



//match retun key event on the input to to the click event on the button
editBox.addEventListener('keydown', function(){
    let editButton = document.querySelector('.edit-button')
    if(event.key=='Enter')  {
        //event.preventDefault();
        editButton.click();
        console.log('click');
}})

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

//-------end of functions






//Insert a random text element

let header = document.querySelector('#header');

newHeading = document.createElement('h4');

newHeadingText = document.createTextNode("git organzied")

newHeading.appendChild(newHeadingText);

let mainHeading = header.children[0];

header.insertBefore(newHeading, mainHeading)

//--------------------------------------------------------------



