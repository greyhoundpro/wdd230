const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let age = "";
        let h2 = document.createElement('h2'); card.appendChild(h2);
        let details = document.createElement('div'); card.appendChild(details);
        details.classList.add('details');
        let birthDate = document.createElement('p'); details.appendChild(birthDate);
        let birthDateSpan = document.createElement('span'); 
        let bPlace = document.createElement('p'); details.appendChild(bPlace);
        let bPlaceSpan = document.createElement('span'); 
        let children = document.createElement('p'); details.appendChild(children);
        let childrenSpan = document.createElement('span'); 
        let propYears = document.createElement('p'); details.appendChild(propYears);
        let propYearsSpan = document.createElement('span'); 
        let birthArray = prophet.birthdate.split(" ");
        age = (new Date().getFullYear()) - parseInt(birthArray[2]);
        
        if (prophet.death != null) {
            let deathArray = prophet.death.split(" ");

            age =  parseInt(deathArray[2]) - parseInt(birthArray[2]);

            let death = document.createElement('p'); details.appendChild(death);
            let deathSpan = document.createElement('span'); 

            death.textContent = "Death Date: " ; 
            deathSpan.textContent = `${prophet.death}`;
            death.appendChild(deathSpan);
        }
        
        let ageP = document.createElement('p'); details.appendChild(ageP);
        let ageSp = document.createElement('span');
        let portrait = document.createElement('img'); card.appendChild(portrait);

        // Build the h2 content out to show the prophet's full name - finish the 
        // template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        birthDate.textContent = "Birthdate: ";
        birthDateSpan.textContent = `${prophet.birthdate}`;
        bPlace.textContent = "Birthplace: " ; 
        bPlaceSpan.textContent = `${prophet.birthplace}`;

        children.textContent = "Children: " ; 
        childrenSpan.textContent = `${prophet.numofchildren}`;
        propYears.textContent = "Prophet Years: " ; 
        propYearsSpan.textContent = `${prophet.length}`;
        ageP.textContent = "Age: ";
        ageSp.textContent = age;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        
        birthDate.appendChild(birthDateSpan);
        bPlace.appendChild(bPlaceSpan);
        children.appendChild(childrenSpan);
        propYears.appendChild(propYearsSpan);
        ageP.appendChild(ageSp);
        

        cards.appendChild(card);
        
    } // end of forEach loop
    )

    
} // end of function expression