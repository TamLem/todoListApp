

/* // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCc4PehCMyP4EHHk5NcLDXA5jKAdisjScg",
    authDomain: "todo-app-fcfa1.firebaseapp.com",
    databaseURL: "https://todo-app-fcfa1.firebaseio.com",
    projectId: "todo-app-fcfa1",
    storageBucket: "todo-app-fcfa1.appspot.com",
    messagingSenderId: "895891812916",
    appId: "1:895891812916:web:99db9fa7f8702a0d889061",
    measurementId: "G-NL6KP5YZVP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);







 
 var userRef = firebase.database().ref('userProfile');

 */

 
let loginButton = document.querySelector('#loginButton');
/*
loginButton.addEventListener('click', function(){
    event.preventDefault();

    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;

    saveUser(email, password);
})
 */

loginButton.addEventListener('click', function(){
    event.preventDefault();
    let overlay = document.querySelector('#login-overlay')
    overlay.style.display='block'
    let loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
})



/* function saveUser(email, password) {
    let pusher = userRef.push();
    pusher.set({
        email: email,
        password: password,
    });
}
 */





/* firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
 */



 //Todo list handler object, grabs user input add them to the object, sync with database, retreive from database


 let todos = []

 todos.push({ id:1, text:'Shopping', status: 'completed'})



input = "Cooking";

todos.push( {id:(todos.length > 0) ? todos[todos.length-1].id +1 : 1, text:input, status:'new'})









//----------_event listener on document triggering multiple functions with conditions

document.addEventListener('click', function() {
    event.preventDefault;
    delListItem(event);
    editFixList(event);
    addListItem(event);
})

//----------end of section


//---function adds to the list

// thuis was used to trigger 'Enter' on the input, but upgraded with the builtin return on input functionality
/* document.querySelector('#input').addEventListener('keydown', function(){
    let addButton = document.querySelector('#add-button')
    if(event.key=='Enter')  {
        //event.preventDefault();
        addButton.click();
        
}})
 */

document.querySelector('#add-form').onsubmit = function (event) {return false;}

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
            delButton.className="delete-button btn-small right-align";
            delButton.innerHtml=`<i> class="material-icons">delete </i>`;
            let delIcon  = document.createElement('i');
            delIcon.className = 'material-icons';
            delIcon.textContent= 'delete';
            delButton.appendChild(delIcon);


            editButton = document.createElement('button')
            editButton.className = "edit-button btn-small right-align"
            let editIcon  = document.createElement('i');
            editIcon.className = 'material-icons';
            editIcon.textContent= 'edit';
            editButton.appendChild(editIcon);

            newspan = document.createElement('span');
            newspan.className = 'card-content-small list-text'
            newspan.appendChild(userText);

            newListItem.appendChild(delButton);
            newListItem.appendChild(editButton);
            newListItem.appendChild(newspan);
            newListItem.className = "list-item card blue-grey lighten-2 white-text "

            listDiv.appendChild(newListItem)
            //console.log(newList)
            input.value = " "
        }
    }    
}

//------ end of FUnction--------------



//----function deletes list item

function delListItem (e){
   if (e.target.parentElement.classList.contains("delete-button")){
       if (confirm('Are your sure?')){
           console.log(e.target.parentElement);
           let liItem = e.target.parentElement.parentElement;
           list.removeChild(liItem);
       }
   };
}
//---end of function





//-------Sets of Functions enbale editing of inputs

let editBox = document.querySelector('#edit-box');

 

function editFixList (e) { 
    if(e.target.parentElement.classList.contains("edit-button")) {
    //if there is input text trigger done else trigger edit
   // let editText = e.target.parentElement.querySelector('input');
        
    (editBox.value!="") ? fixEdit(event): editListItem(event);
    }
}



//match retun key event on the input to to the click event on the button
editBox.addEventListener('keydown', function(){
    let editButton = document.querySelector('.edit-button')
    if(event.key=='Enter')  {
        event.preventDefault();
        editButton.querySelector('i').click();
        console.log('click');
}})

function editListItem (e) {
 
        let editBox = document.querySelector('#edit-box');
        let listItem = e.target.parentElement.parentElement;
        editBox.value = listItem.querySelector('span').textContent;
        //console.log(editBox);
        //console.log(listItem)

        listItem.querySelector('span').textContent="";
        listItem.querySelector('span').appendChild(editBox);
        editBox.style.display = 'inline';
        //console.log(listItem.querySelector('span'))
        
        e.target.innerText = "done";
        console.log(e.target)
    
}

function fixEdit (e) {
    let listItem = e.target.parentElement.parentElement;
    //console.log(listItem)

    let editBox = document.querySelector('#edit-box')
    //console.log(editBox)

    document.querySelector('body').appendChild(editBox);
    listItem.querySelector('span').textContent = editBox.value ;

    //console.log("event works")
    e.target.innerText = "edit";

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



