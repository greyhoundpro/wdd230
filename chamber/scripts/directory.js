const url = 'https://greyhoundpro.github.io/wdd230/chamber/json/data.json';

const displayBusiness = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let item = document.createElement('div');
        let compLogo = document.createElement('img');
        let compName = document.createElement('h2');
        let compAdd = document.createElement('p');
        let compPhone = document.createElement('p');
        if (business.)
        let compSite = document.createElement('a');
        
    })
}

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusiness(data.business);
}

getBusinessData();