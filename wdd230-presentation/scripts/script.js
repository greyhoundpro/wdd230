const d = new Date();
const year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
const date = new Date(document.lastModified);
document.querySelector('#modified-date').textContent = date.toLocaleDateString('en-US', options);
document.querySelector('#modified-time').textContent = new Date(document.lastModified).toLocaleTimeString('en-US');


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('.inputBtn');

button.addEventListener('click', () => {
    const chapterItem = input.value;
    
    if (input.value != '') {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = chapterItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    listBtn.setAttribute('class', 'delete');
    list.appendChild(listItem);
    list.setAttribute('class', 'list');

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    })};
    input.value = '';    
input.focus();

});

