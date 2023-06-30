const url1 = 'https://greyhoundpro.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
    const response = await fetch(url1);
    const data = await response.json();
    displayBusiness1(data.business);
}

getBusinessData();

const displayBusiness1 = (businesses) => {
    const spotlight = document.querySelector('#spotlight');

    businesses.forEach((business) => {
        if (business.status != 'gold') {
            return;
        }
        if (business.status == 'gold') {

            let link = document.createElement('a');
            link.classList.add('spotlink');
            link.setAttribute('target', '_blank');
            let picture = document.createElement('picture');
            let compLogo = document.createElement('img'); 
            compLogo.classList.add('spotlight-img')
            picture.appendChild(compLogo);
            let compName = document.createElement('h2'); 
            let slogan = document.createElement('p');
            let overlay = document.createElement('div');
            overlay.classList.add('spotlight-overlay');


            
            link.appendChild(picture);
            link.appendChild(overlay);

            overlay.appendChild(slogan);
            overlay.appendChild(compName);
            

            // Contents

            link.href = `${business.website}`;
            compName.textContent = `${business.company}`;
            slogan.textContent = `${business.slogan}`;


            compLogo.setAttribute('src', business.logo);
            compLogo.setAttribute('alt', `Company logo of ${business.company}`);
            compLogo.setAttribute('loading', 'lazy');
            compLogo.setAttribute('width', '120');
            compLogo.setAttribute('height', '120');


            spotlight.appendChild(link);
            return;
        }
        
        
        
    });

        



}
