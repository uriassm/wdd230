const jsonData = 'json/fruit.json';
const fruitSelect1 = document.querySelector('#fruitOptions1');
const fruitSelect2 = document.querySelector('#fruitOptions2');
const fruitSelect3 = document.querySelector('#fruitOptions3');
const fruitList = [];
const carbohydratesList = [];
const proteinList = [];
const fatList = [];
const caloriesList = [];
const sugarList = [];

let carbohydratesTotal = 0;
let proteinTotal = 0;
let fatTotal = 0;
let caloriesTotal = 0;
let sugarTotal = 0;


fetch(jsonData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const fruits = jsonObject;
    fruits.forEach(addToFruitList);
  });

function addToFruitList(fruit) {

    let fruitName = fruit.name;

    let newOption1 = document.createElement('option');
    let newOption2 = document.createElement('option');
    let newOption3 = document.createElement('option');

    newOption1.setAttribute('value', fruitName);
    newOption1.textContent = fruitName;
    newOption2.setAttribute('value', fruitName);
    newOption2.textContent = fruitName;
    newOption3.setAttribute('value', fruitName);
    newOption3.textContent = fruitName;

    fruitSelect1.appendChild(newOption1);
    fruitSelect2.appendChild(newOption2);
    fruitSelect3.appendChild(newOption3);

    fruitList.push(fruitName)
    carbohydratesList.push(fruit.nutritions.carbohydrates);
    proteinList.push(fruit.nutritions.protein);
    fatList.push(fruit.nutritions.fat);
    caloriesList.push(fruit.nutritions.calories);
    sugarList.push(fruit.nutritions.sugar)

}

const orderForm = document.querySelector('form');

function displayOrder() {
   const customerName = document.querySelector('#fname').value;
   const customerEmail = document.querySelector('#cstemail').value;
   const customerPhone = document.querySelector('#cstphone').value;
   const fruitValue1 = document.querySelector('#fruitOptions1').value;
   const fruitValue2 = document.querySelector('#fruitOptions2').value;
   const fruitValue3 = document.querySelector('#fruitOptions3').value;
   const specialInstructions = document.querySelector('#specialInstructions').value;

   const newSection = document.createElement('section');
   const p1 = document.createElement('p')
   const newList = document.createElement('ul')
   const item1 = document.createElement('li');
   const item2 = document.createElement('li');
   const item3 = document.createElement('li');
   const item4 = document.createElement('li');
   const item5 = document.createElement('li');
   const item6 = document.createElement('li');
   const p2 = document.createElement('p');

   newSection.setAttribute('id', 'orderResults');

   const d = new Date();

   p1.textContent = `Your order was successfully placed on ${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
   item1.innerHTML = customerName;
   item2.innerHTML = customerEmail;
   item3.innerHTML = customerPhone;
   item4.innerHTML = fruitValue1;
   item5.innerHTML = fruitValue2;
   item6.innerHTML = fruitValue3;
   p2.textContent = specialInstructions;

   const mainContent = document.querySelector('main');
   mainContent.appendChild(newSection);
   newSection.appendChild(p1)
   newSection.appendChild(newList);
   newList.appendChild(item1);
   newList.appendChild(item2);
   newList.appendChild(item3);
   newList.appendChild(item4);
   newList.appendChild(item5);
   newList.appendChild(item6);
   newSection.appendChild(p2)


  for (i = 0; i < fruitList.length; i++) {
    if (fruitValue1 == fruitList[i]) {
      carbohydratesTotal += carbohydratesList[i];
      proteinTotal += proteinList[i];
      fatTotal += fatList[i];
      caloriesTotal += caloriesList[i];
      sugarTotal += sugarList[i];
    }
    if (fruitValue2 == fruitList[i]) {
      carbohydratesTotal += carbohydratesList[i];
      proteinTotal += proteinList[i];
      fatTotal += fatList[i];
      caloriesTotal += caloriesList[i];
      sugarTotal += sugarList[i];
    }
    if (fruitValue3 == fruitList[i]) {
      carbohydratesTotal += carbohydratesList[i];
      proteinTotal += proteinList[i];
      fatTotal += fatList[i];
      caloriesTotal += caloriesList[i];
      sugarTotal += sugarList[i];
    }
  }

   const p3 = document.createElement('p');
   const p4 = document.createElement('p');
   const p5 = document.createElement('p');
   const p6 = document.createElement('p');
   const p7 = document.createElement('p');

   p3.textContent = `Total Carbohydrates: ${carbohydratesTotal.toFixed(2)}`;
   p4.textContent = `Total Protein: ${proteinTotal.toFixed(2)}`;
   p5.textContent = `Total Fat: ${fatTotal.toFixed(2)}`;
   p6.textContent = `Total Calories: ${caloriesTotal.toFixed(2)}`;
   p7.textContent = `Total Sugar: ${sugarTotal.toFixed(2)}`;

   newSection.appendChild(p3);
   newSection.appendChild(p4);
   newSection.appendChild(p5);
   newSection.appendChild(p6);
   newSection.appendChild(p7);

   let lastTotalOrders = Number(window.localStorage.getItem('totalOrders-ls'));
   let newTotalOrders = lastTotalOrders + 1;
   localStorage.setItem('totalOrders-ls', newTotalOrders);

   $('form').submit(function(e) {
    e.preventDefault();
});
}

orderForm.addEventListener('submit', displayOrder)

