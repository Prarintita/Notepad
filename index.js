const button = document.querySelector('button');
const header = document.querySelector('h1');
const header2 = document.querySelector('#change');

let i = 0;
let clicked = false; //will not change header again if already clicked on
const updateText = function() {
    if (i % 2 === 0 && clicked === false) {
        header.textContent = 'Try again!';
    } else {   
        header2.textContent = 'Tada!';
    }
    i++;
};

button.addEventListener('click', updateText); //for the first click
button.addEventListener('click', updateText); //for second click

function updateHeader() {
    const newHeader = document.querySelector('#newHeader').value;
    // OR = event.target.value
    if (newHeader !== "") { //will not change to empty string
        header.textContent = newHeader;
        clicked = true;
    }
    event.preventDefault(); //will not reset page

    //lists user inputs
    const list = document.querySelector("#flicks");
    list.textContent += newHeader;
}

/*
    OR call the form instead of the specific button
    const form = document.querySelector('#flickform');
    form.addEventListener('submit', updateHeader);
*/