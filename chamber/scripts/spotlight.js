const jsonData = 'json/data.json';
const spotlightBusinesses = []

fetch(jsonData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(addToSpotlightArray);

    firstBusinessIndex = Math.floor(Math.random() * spotlightBusinesses.length);
    firstBusiness = spotlightBusinesses[firstBusinessIndex]
    spotlightBusinesses.splice(firstBusinessIndex, 1)
    secondBusinessIndex = Math.floor(Math.random() * spotlightBusinesses.length);
    secondBusiness = spotlightBusinesses[secondBusinessIndex]
    spotlightBusinesses.splice(secondBusinessIndex, 1)
    thirdBusinessIndex = Math.floor(Math.random() * spotlightBusinesses.length);
    thirdBusiness = spotlightBusinesses[thirdBusinessIndex]
    spotlightBusinesses.splice(secondBusinessIndex, 1)

    spotlightHeading1 = document.querySelector('#spotlight1 h3');
    spotlightImage1 = document.querySelector('#spotlight1 img');
    spotlightContact1 = document.querySelector('#spotlight1 p');
    spotlightHeading1.textContent = firstBusiness.name;
    spotlightImage1.setAttribute('src', firstBusiness.image);
    spotlightImage1.setAttribute('alt', `Logo of ${firstBusiness.name}`);
    spotlightContact1.textContent = `${firstBusiness.phonenumber} ${firstBusiness.website}`

    spotlightHeading2 = document.querySelector('#spotlight2 h3');
    spotlightImage2 = document.querySelector('#spotlight2 img');
    spotlightContact2 = document.querySelector('#spotlight2 p');
    spotlightHeading2.textContent = secondBusiness.name;
    spotlightImage2.setAttribute('src', secondBusiness.image);
    spotlightImage2.setAttribute('alt', `Logo of ${secondBusiness.name}`);
    spotlightContact2.textContent = `${secondBusiness.phonenumber} ${secondBusiness.website}`

    spotlightHeading3 = document.querySelector('#spotlight3 h3');
    spotlightImage3 = document.querySelector('#spotlight3 img');
    spotlightContact3 = document.querySelector('#spotlight3 p');
    spotlightHeading3.textContent = thirdBusiness.name;
    spotlightImage3.setAttribute('src', thirdBusiness.image);
    spotlightImage3.setAttribute('alt', `Logo of ${thirdBusiness.name}`);
    spotlightContact3.textContent = `${thirdBusiness.phonenumber} ${thirdBusiness.website}`
  });

function addToSpotlightArray(business) {

    if((business.membershiplevel == "Silver") || (business.membershiplevel == "Gold")) {
        spotlightBusinesses.push(business)
    }
}

