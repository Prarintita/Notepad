const button = document.querySelector('button');
const header = document.querySelector('h1');
const header2 = document.querySelector('#change');

let i = 0;
const updateText = function() {
    if (i % 2 === 0) {
        header.textContent = 'Try again!';
    } else {
        header2.textContent = 'Tada!';
    }
    i++;
};

if (i % 2 === 0) {
    button.addEventListener('click', updateText);
} else {
    button.addEventListener('click', updateText);
}

function newHeaderName() {
    const newHeader = document.querySelector('#newHeader').value;
    header.textContent = newHeader;
}

// const submitBtn = document.querySelector('#submitBtn');
// submitBtn.addEventListener('click', newHeaderName);