const noteArray = [];
let index = 1;
function listUserInputs() {
    event.preventDefault();

    const newTitle = document.querySelector('#newTitle').value;
    const newDescription = document.querySelector('#newDescription').value;

    //lists user inputs
    if (newTitle !== "") {
        //Title of note
        const item1 = document.createElement('li');
        item1.className = "title";
        item1.textContent = newTitle;
        item1.id = index;

        //add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("id", index);

        //make delete button work when clicked
        deleteBtn.addEventListener('click', deleteListItem);
        
        //add important button
        const importantBtn = document.createElement('button');
        importantBtn.setAttribute("id", index);
        importantBtn.textContent = "!";

        //make important button work when clicked
        importantBtn.addEventListener('click', markImportant);

        item1.appendChild(importantBtn);
        item1.appendChild(deleteBtn);

        //Description of note
        const item2 = document.createElement('p');
        item2.className = "description";
        item2.textContent = newDescription;
        item1.appendChild(item2);

        //add entire note to list
        const list1 = document.querySelector("#head");
        list1.appendChild(item1);
       
        //store in array
        noteArray.push(item1);
        console.log(noteArray); //see what's inside array

        index++;
    }

    //clear input box
    document.querySelector('#newTitle').value = "";
    document.querySelector('#newDescription').value = "";
}

function deleteListItem(event) {
    const id = event.target.id;
    const item = document.getElementById(id);

    //remove from array -- sorry Davey
    for (var i = 0; i < noteArray.length; i++) {
        if (noteArray[i].id === id) {
            noteArray.splice(i, 1);
            break;
        }
    }

    //delete from li element
    item.parentElement.removeChild(item);

    console.log(noteArray);
}

function markImportant(event) {
    //if already important
    if (event.target.className === "important") {
        unmarkImportant(event);
        return;
    }

    //change color to yellow 
    event.target.setAttribute("class", "important");    
}

function unmarkImportant(event) {
    event.target.setAttribute("class", "");
}