const button = document.querySelector('button');
const header = document.querySelector('h1');

let i = 0;
const updateText = function() {
    if (i % 2 === 0) {
        header.textContent = 'Again!';
    } else {
        header.textContent = 'Tada!';
    }
    i++;
    console.log(i);
};

if (i % 2 === 0) {
    button.addEventListener('click', updateText);
} else {
    button.addEventListener('click', updateText);
}