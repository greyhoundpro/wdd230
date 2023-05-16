const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('.inputBtn');

button.addEventListener('click', () => {
    const chapterItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = chapterItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    listBtn.setAttribute('class', 'delete');
    list.appendChild(listItem);
    list.setAttribute('class', 'list');

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
input.focus();

});

