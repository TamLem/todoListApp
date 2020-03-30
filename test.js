//create an empty database object on user signup
firebase.database().ref(uid).set('todos');
// todos[index] = obj -------adding to the empty object

function handleUserInput () {
    let input = document.getElementById("input");
    if (input.value!=0) {
    let userText = input.value;
    //let todoEntry = {id:id, text:userText, status:'new'}
    
    //pass the above to update database
    updateDatabase(userText);
}
    input.value = " "
}

var userTodos;

function loadDatabase () {
    //get database from cloud
    let uid = firebase.auth().currentUser.uid;

    firebase.database().ref(uid+'/todos/').once('value').then(function(data){
        console.log(data.val())
        userTodos = data.val();})
    
    //Fe existing user with data render eash todolist in the document

    if (userTodos[0]!=0) {
        for (item of userTodos) {

        renderListItem(item);
        }
    }

}

function updateDatabase (userText){
       
    let userText = userText;

    if (userTodos[0]==0) {
        userTodos.push( {id:1, text:userText, status:'new'})
        userTodos.shift();
        console.log(userTodos);
        firebase.database().ref(uid+'/todos/').set(userTodos);
    }
    else {
        userTodos.push( {id: userTodos.length + 1, text:userText, status:'new'})
        console.log(userTodos);
        let pushIndex = userTodos.length-1;
        //add on the last entry to the database
        firebase.database().ref(uid+'/todos/' + pushIndex).set(userTodos[pushIndex]);
    }

    renderListItem(userTodos[userTodos.length-1]); // render on page, last entry
    
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




function addListItem (e) { 
    let todos = []
    
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


//delete functionality
firebase.database().ref(uid +`/todos/${id-2}/status`).set('deleted')

