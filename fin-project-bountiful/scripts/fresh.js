const fruiturl  = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(fruiturl);
    const data = await response.json();
    console.log(data);
    displayFruit(data);

}

getFruitData();


const select1 = document.querySelector('#fruitschoice1');
const select2 = document.querySelector('#fruitschoice2');
const select3 = document.querySelector('#fruitschoice3');


const firstName = document.querySelector('#fname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const instruct = document.querySelector('#instructions');
const freshcontents = document.querySelector('#freshcontents');
let orderSubmitClick = localStorage.getItem('orderSubmit');




const displayFruit = (fruits) => {
    


    fruits.forEach((data) => {
        const choice = document.createElement('option');
        choice.setAttribute('value', data.name);
        choice.textContent = `${data.name}`;
        select1.appendChild(choice);
    })
    fruits.forEach((data) => {
        const choice = document.createElement('option');
        choice.setAttribute('value', data.name);
        choice.textContent = `${data.name}`;
        select2.appendChild(choice);
    })
    fruits.forEach((data) => {
        const choice = document.createElement('option');
        choice.setAttribute('value', data.name);
        choice.textContent = `${data.name}`;
        select3.appendChild(choice);
    })
    const orderForm = document.querySelector('#orderForm');

    orderForm.addEventListener('submit', function (event) {
        if (orderSubmitClick == 0) {
            orderSubmitClick++;
            localStorage.setItem('orderSubmit', orderSubmitClick);
        }
        
        event.preventDefault();
        const fruit1 = select1.value;
        const fruit2 = select2.value;
        const fruit3 = select3.value;
        const instruction = instruct.value;
        const orderDate = new Date().toLocaleDateString();
        const fvalue = firstName.value;
        const evalue = email.value;
        const pvalue = phone.value;
        let fname = document.createElement('p');
        let fnameSpan = document.createElement('span');
        let cxemail = document.createElement('p');
        let cxemailSpan = document.createElement('span');
        let cxphone = document.createElement('p');
        let cxphoneSpan = document.createElement('span');
        let fruitc1 = document.createElement('p');
        let fruitc1Span = document.createElement('span');
        let fruitc2 = document.createElement('p');
        let fruitc2Span = document.createElement('span');
        let fruitc3 = document.createElement('p');
        let fruitc3Span = document.createElement('span');
        let inst = document.createElement('p');
        let instSpan = document.createElement('span');
        let date = document.createElement('p');
        let dateSpan = document.createElement('span');
        let carbohydrates = document.createElement('p');
        let carbohydratesSpan = document.createElement('span');
        let protein = document.createElement('p');
        let proteinSpan = document.createElement('span');
        let fat = document.createElement('p');
        let fatSpan = document.createElement('span');
        let calories = document.createElement('p');
        let caloriesSpan = document.createElement('span');
        let sugar = document.createElement('p');
        let sugarSpan = document.createElement('span');
    
        
    
        let totalCarbs = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalSugar = 0;
        let totalCalories = 0;

        const fruit1Index = fruits.find(fruit => fruit.name === fruit1);
        const fruit2Index = fruits.find(fruit => fruit.name === fruit2);
        const fruit3Index = fruits.find(fruit => fruit.name === fruit3);

    
            if (fruit1Index) {
                totalCarbs += fruit1Index.nutritions.carbohydrates;
                totalProtein += fruit1Index.nutritions.protein;
                totalFat += fruit1Index.nutritions.fat;
                totalSugar += fruit1Index.nutritions.sugar;
                totalCalories += fruit1Index.nutritions.calories;
            }
            if (fruit2Index) {
                totalCarbs += fruit2Index.nutritions.carbohydrates;
                totalProtein += fruit2Index.nutritions.protein;
                totalFat += fruit2Index.nutritions.fat;
                totalSugar += fruit2Index.nutritions.sugar;
                totalCalories += fruit2Index.nutritions.calories;
            }
            if (fruit3Index) {
                totalCarbs += fruit3Index.nutritions.carbohydrates;
                totalProtein += fruit3Index.nutritions.protein;
                totalFat += fruit3Index.nutritions.fat;
                totalSugar += fruit3Index.nutritions.sugar;
                totalCalories += fruit3Index.nutritions.calories;
            }
        
        let output = document.createElement('div');
        output.classList.add('orderOutput');
        let outputTitle = document.createElement('h2');
        outputTitle.textContent = `Order Confirmation:`
        output.appendChild(outputTitle)
        let selected = document.createElement('h3');
        let totalNutritions = document.createElement('h3');
    
        fname.textContent = `First Name: `
        fnameSpan.textContent = `${fvalue}`;
        cxemail.textContent = `Email: `;
        cxemailSpan.textContent = `${evalue}`;
        cxphone.textContent = `Phone: `;
        cxphoneSpan.textContent = `${pvalue}`;
        selected.textContent = `Selected Fruits: `;
        fruitc1.textContent = `Fruit 1: `;
        fruitc1Span.textContent = `${fruit1}`;
        fruitc2.textContent = `Fruit 2: `;
        fruitc2Span.textContent = `${fruit2}`;
        fruitc3.textContent = `Fruit 3: `;
        fruitc3Span.textContent = `${fruit3}`;
        inst.textContent = `Special Instructions: `;
        instSpan.textContent = `${instruction}`;
        date.textContent = `Order Date: `;
        dateSpan.textContent = `${orderDate}`;
        totalNutritions.textContent = `Total Nutritions: `;
        carbohydrates.textContent = `Total carbohydrates: `;
        carbohydratesSpan.textContent = `${totalCarbs}`;
        protein.textContent = `Total protein: `;
        proteinSpan.textContent = `${totalProtein}`;
        fat.textContent = `Total fat: `;
        fatSpan.textContent = `${totalFat.toFixed(2)}`;
        calories.textContent = `Total calories: `;
        caloriesSpan.textContent = `${totalCalories}`;
        sugar.textContent = `Total sugar: `;
        sugarSpan.textContent = `${totalSugar}`;

        fname.appendChild(fnameSpan);
        cxemail.appendChild(cxemailSpan);
        cxphone.appendChild(cxphoneSpan);
        fruitc1.appendChild(fruitc1Span);
        fruitc2.appendChild(fruitc2Span);
        fruitc3.appendChild(fruitc3Span);
        inst.appendChild(instSpan);
        date.appendChild(dateSpan);
        carbohydrates.appendChild(carbohydratesSpan);
        protein.appendChild(proteinSpan);
        fat.appendChild(fatSpan);
        sugar.appendChild(sugarSpan);
        calories.appendChild(caloriesSpan);
        
    
        output.appendChild(fname);
        output.appendChild(cxemail);
        output.appendChild(cxphone);
        output.appendChild(selected);
        output.appendChild(fruitc1);
        output.appendChild(fruitc2);
        output.appendChild(fruitc3);
        output.appendChild(inst);
        output.appendChild(date);
        output.appendChild(totalNutritions);
        output.appendChild(carbohydrates);
        output.appendChild(protein);
        output.appendChild(fat);
        output.appendChild(sugar);
        output.appendChild(calories);
    
        freshcontents.appendChild(output);
    });
    
};






