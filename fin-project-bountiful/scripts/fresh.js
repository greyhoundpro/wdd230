const fruiturl  = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(fruiturl);
    const data = await response.json();
    console.log(data);
}

getFruitData();

const displayFruit = (fruits) => {
    const options = document.querySelector('#fruitschoice');
}