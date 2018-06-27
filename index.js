const button = document.querySelector('button');
const header = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('#change');

//user clicks button
let i = 0;
let change = false;
const updateText = function() {
    if (i % 2 === 0 && change === false) {
        header.textContent = 'Try again!';
        change = true;
    } else {   
        header3.textContent = 'Tada!';
    }
    i++;
};

button.addEventListener('click', updateText); //for the first click
button.addEventListener('click', updateText); //for the second click

//waiting for user input
function userInputHeaders() {
    event.preventDefault();
    
    //changes main header
    const newMainHeader = document.querySelector('#newMainHeader').value;
    if (newMainHeader !== "") { //will not change to empty string
        header.textContent = newMainHeader;
        change = true;
    }

    //changes 2nd header
    const newSecondHeader = document.querySelector('#newSecondHeader').value;
    if (newSecondHeader !== "") {
        header2.textContent = newSecondHeader;
    }

    listUserInputs();
}

function listUserInputs() {
    event.preventDefault();

    //lists user inputs
    //Main header
    const item1 = document.createElement('li');
    item1.className = "mainHeader";
    item1.textContent = document.querySelector('#newMainHeader').value;
    const list1 = document.querySelector("#head");
    list1.appendChild(item1);
    
    //Second header
    const item2 = document.createElement('li');
    item2.className = "secondHeader";
    item2.textContent = document.querySelector('#newSecondHeader').value;
    const list2 = document.querySelector("#body");
    list2.appendChild(item2);
}