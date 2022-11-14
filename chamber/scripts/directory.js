const jsonData = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(jsonData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);
  });



function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('h3');
	let phone = document.createElement('h3');
    let website = document.createElement('h3')
	let membershipLevel = document.createElement('h3');

    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
	phone.textContent = `${business.phonenumber}`;
    website.textContent = `${business.website}`;
	membershipLevel.textContent = `${business.membershiplevel} Member`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `Logo of ${business.name}`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
	card.appendChild(logo);
    card.appendChild(address);
	card.appendChild(phone);
    card.appendChild(website);
	card.appendChild(membershipLevel);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}