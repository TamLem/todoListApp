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

//---------------------------------------------------------------------------------

// Signup Section

  var signupBtn = document.getElementById('signupBtn');
  var signupForm = document.getElementById('signup-div');
  var overlay = document.getElementsByClassName('login-overlay');


  // respond to Signup button on home page, popup signup form and overlays
  signupBtn.onclick = function () {
    event.preventDefault();
    overlay[0].style.display='block'
    signupForm.style.display = 'block';
  }

  //Record form data and store it in variables

  let signupFormButton = document.getElementById('signup-form-btn');
 

  signupFormButton.onclick = function () {
      event.preventDefault();
      var signupName = document.getElementById('signup-name').value;
      let signupPassword = document.getElementById('signup-form-password').value;
      let confirmPassword = document.getElementById('signup-form-confirm-password').value;
      let email = document.getElementById('signup-email').value;
      console.log(email + signupPassword + confirmPassword + signupName);
    (signupPassword==confirmPassword)? signupPassword = confirmPassword : alert('The passwords you entered don\'t match');

    firebase.auth().createUserWithEmailAndPassword(email, signupPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code; 
        var errorMessage = error.message;
        // ...
      });

      
    setTimeout(() => {
        var user = firebase.auth().currentUser;
        user.updateProfile ({
            displayName: signupName,
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
        location.reload();
    }, 1000);
      
}

//------------------      Login Section -------------------------

var loginButton = document.querySelector('#login-button');
let loginFormButton = document.querySelector('#login-form-button');
var loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', function(){
    event.preventDefault();
    console.log('login clicked')
    overlay[1].style.display='block';
    loginForm.style.display = 'block';  
})

loginFormButton.addEventListener('click', function(){
    event.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    //saveUser(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
       

      });
})



//-------------------- Log out ----------------------

let logoutButton = document.getElementById('logout-button')

logoutButton.onclick = function () {
    event.preventDefault();
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {    
        // An error happened.
      });
      location.reload();
}


//------------------- Login Observer -------------------

var userGreeting = document.getElementById('user-login-greeting')

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       
      // User is signed in.
      overlay[0].style.display = 'none';
      overlay[1].style.display = 'none';
      loginForm.style.display = 'none'; 
      loginButton.style.display = 'none'; 
      signupBtn.style.display = 'none';
      userGreeting.innerText = `Hello ${user.displayName}!`    
      signupForm.style.display = 'none';


    } else {
      // No user is signed in.
    }
  });




 //Todo list handler object, grabs user input add them to the object, sync with database, retreive from database

//Firebase database 





//------ view function, retrieve database 




//------- end of view function -------









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


let todos = []

function addListItem (e) { 
    
    if (e.target.id =="add-button"){
        let listDiv = document.querySelector('#list')
        let newListItem = document.createElement('li');
        newListItem.className = "list-item";
    // console.log("button clicked");

        let input = document.getElementById("input");

        if (input.value!=0) {
            let userText = input.value;
            todos.push( {id:(todos.length > 0) ? todos.length + 1 : 1, text:userText, status:'new'})
            console.log(todos);
            firebase.database().ref().child(firebase.auth().currentUser.displayName).child('todos').set(todos)

        
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
            //newspan.appendChild(userText);
            newspan.textContent = todos[todos.length-1].text;

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



