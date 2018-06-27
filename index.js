const header = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('#change');

function listUserInputs() {
    event.preventDefault();

    const newMainHeader = document.querySelector('#newMainHeader').value;
    const newSecondHeader = document.querySelector('#newSecondHeader').value;

    //lists user inputs
    //Title of note
    const item1 = document.createElement('li');
    item1.className = "mainHeader";
    item1.textContent = newMainHeader;
    const list1 = document.querySelector("#head");
    list1.appendChild(item1);
    
    //Description of note
    const item2 = document.createElement('p');
    item2.className = "secondHeader";
    item2.textContent = newSecondHeader;
    list1.appendChild(item2);

    document.querySelector('#newMainHeader').value = "";
    document.querySelector('#newSecondHeader').value = "";
}