const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {
    return response.json();
})
    .then(function (jsonObject) 
        {
            /*console.table(jsonObject);  // temporary checking for valid response and data parsing*/
            const cities = jsonObject['towns'];
            console.table(cities);

            for (let i = 0; i < cities.length; i++ ){
                let card = document.createElement('section');
                let cardHeading = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('div');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let photo = document.createElement('img');
                name.textContent = cities[i].name;
                motto.textContent = cities[i].motto;
                yearFounded.textContent = cities[i].yearFounded;
                currentPopulation.textContent = cities[i].currentPopulation;
                averageRainfall.textContent = cities[i].averageRainfall;
                photo.setAttribute('src', 'images/' + cities[i].photo);
                image.setAttribute('alt', cities[i].name + '-' + cities[i].motto);
                cardHeading.appendChild(name);
                cardHeading.appendChild(motto);
                card.appendChild(cardHeading);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                card.appendChild(photo);
                document.querySelector('div.cards').appendChild(card);
            }
        
            /*"name": "Soda Springs",
            "photo": "sodasprings.jpg",
            "motto": "Historic Oregon Trail Oasis. The Soda is on Us.",
            "yearFounded": 1858,
            "currentPopulation": 2985,
            "averageRainfall": 15.75,
            "events": [
              "February 29: Geyser Song Day",
              "May 1-6: Days of May Celebration",
              "October 15-16: Octoberfest"*/

            
    

        }
    );