const header = document.querySelector('h1');
const header2 = document.querySelector('h2');

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
        const list1 = document.querySelector("#head");
        list1.appendChild(item1);
    
        //Description of note
        const item2 = document.createElement('p');
        item2.className = "description";
        item2.textContent = newDescription;
        list1.appendChild(item2);
    }

    //clear input box
    document.querySelector('#newTitle').value = "";
    document.querySelector('#newDescription').value = "";
}

