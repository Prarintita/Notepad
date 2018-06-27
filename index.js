const button = document.querySelector('button');
const header = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('#change');

//user clicks button
let i = 0;
let changed = false;
const updateText = function() {
    if (i % 2 === 0 && changed === false) {
        header.textContent = 'Try again!';
        changed = true;
    } else {   
        header3.textContent = 'Tada!';
    }
    i++;
};

button.addEventListener('click', updateText); //for the first click
button.addEventListener('click', updateText); //for second click

//waiting for user input
function userInputHeaders() {
    event.preventDefault();
    
    //changes main header
    const newMainHeader = document.querySelector('#newMainHeader').value;
    if (newMainHeader !== "") { //will not change to empty string
        header.textContent = newMainHeader;
        changed = true;
    }

    //changes 2nd header
    const newSecondHeader = document.querySelector('#newSecondHeader').value;
    if (newSecondHeader !== "") {
        header2.textContent = newSecondHeader;
    }

    //lists user inputs
    //Main header
    const item1 = document.createElement('li');
    item1.className = "mainHeader";
    item1.textContent = newMainHeader;
    const list1 = document.querySelector("#head");
    list1.appendChild(item1);
    
    //Second header
    const item2 = document.createElement('li');
    item2.className = "secondHeader";
    item2.textContent = newSecondHeader;
    const list2 = document.querySelector("#body");
    list2.appendChild(item2);
}

/*
    OR call the form instead of the specific button
    const form = document.querySelector('#flickform');
    form.addEventListener('submit', userInputHeaders);
*/