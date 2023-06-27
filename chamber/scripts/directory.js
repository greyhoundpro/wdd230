const url = 'https://greyhoundpro.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusiness(data.business);
}

getBusinessData();

const displayBusiness = (businesses) => {
    const cards = document.querySelector('#cards');

    businesses.forEach((business) => {
        let item = document.createElement('div');
        item.classList.add('DItems');
        let compLogo = document.createElement('img'); 
        let compName = document.createElement('h3'); 
        let compAdd = document.createElement('p');
        let compPhone = document.createElement('p');

        item.appendChild(compLogo);
        item.appendChild(compName);
        item.appendChild(compAdd);
        item.appendChild(compPhone);

        if (business.website != null) {
            let compSite = document.createElement('a');
            compSite.href = `${business.website}`;
            compSite.textContent = "Webpage";
            compSite.setAttribute('target', '_blank')
            item.appendChild(compSite);
        }
        let compEmail = document.createElement('a');

        item.appendChild(compEmail);
        // Contents
        compLogo.setAttribute('src', business.logo);
        compLogo.setAttribute('alt', `Company logo of ${business.company}`);
        compLogo.setAttribute('loading', 'lazy');
        compLogo.setAttribute('width', '120');
        compLogo.setAttribute('height', '120');

        compName.textContent = `${business.company}`;
        compAdd.textContent = `${business.address}`;
        compPhone.textContent = `${business.phone}`;
        compEmail.textContent = "Send Email";
        compEmail.href = `mailto:${business.email}`;

        cards.appendChild(item);
        
    })
}

// For buttons

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

function changeToGrid() {
    cards.classList.add('grid');
    cards.classList.remove('list');
    localStorage.setItem('displayPref', cards.classList);
    
    
};

gridBtn.addEventListener('click', changeToGrid);

const changeToList = () => {
    cards.classList.add('list');
    cards.classList.remove('grid');
    localStorage.setItem('displayPref', cards.classList);
}

listBtn.addEventListener('click', changeToList);

// For preferred display


if (!localStorage.getItem('displayPref')) {
    localStorage.setItem('displayPref', cards.classList);
}
else {
    cards.classList = localStorage.getItem('displayPref'); 
}