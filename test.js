//create an empty database object on user signup
firebase.database().ref(uid).set('todos');
// todos[index] = obj -------adding to the empty object

function handleUserInput () {
    let input = document.getElementById("input");
    if (input.value!=0) {
    let userText = input.value;
    let todoEntry = {id:id, text:userText, status:'new'}
    
    //pass the above to update database
    updateDatabase(userText);
}
    input.value = " "
}

function updateDatabase (userText){
    //get database from cloud
    var userTodos;
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref().once('value').then(function(data){
    console.log(data.val().uid)
    userTodos = data.val().uid;}
)
    
    let userText = userText;
    userTodos.push( {id:(userTodos.length > 0) ? userTodos.length + 1 : 1, text:userText, status:'new'})
    console.log(userTodos);
    renderListItem(userTodos(lastItem)); // render on page, last entry

    firebase.database().ref().child(firebase.auth().currentUser.displayName).child('todos').set(userTodos)
    
}


function renderListItem(obj) { 
    
        let listDiv = document.querySelector('#list')
        let newListItem = document.createElement('li');
        newListItem.className = "list-item";
                  
        let userText = obj.text;
    
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
        newspan.textContent = userText;

        newListItem.appendChild(delButton);
        newListItem.appendChild(editButton);
        newListItem.appendChild(newspan);
        newListItem.className = "list-item card blue-grey lighten-2 white-text "

        listDiv.appendChild(newListItem)
        //console.log(newList)
          
        
}    
