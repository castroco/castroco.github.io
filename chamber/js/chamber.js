
function addUpdatedDate() {
    try {
        var dateUpdated = document.lastModified;
        const pObj = document.querySelector('#lastUpdated');
        let message = `Last updated ${dateUpdated}`;
        console.log(message);
        pObj.innerHTML = message;

        //geting the full year
        let day = new Date();
        let fullYear = day.getFullYear();
        const pObj2 = document.querySelector('#fullYear');
        let message2 = `&#169; | ${fullYear} | Carlos Castro | Santiago | <a href= "https://www.byui.edu/online">BYU Online Learning</a>`
        pObj2.innerHTML = message2;
    }
        catch(err) {
        alert(err.message);
        console.log(err.message);
    }
}

const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-33.61169&lon=-70.57577&exclude=minutely,hourly&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);
            const temperature = jsObject.current.temp;
            console.log("temperature:", temperature);
            document.getElementById('temperature').textContent = temperature;
            const desc = jsObject.current.weather[0].description;
            document.getElementById('currently').textContent = desc;
            const icon = jsObject.current.weather[0].icon;
            const imagesrc = 'https://openweathermap.org/img/w/' + icon + '.png';
            console.log(`icon: ${icon} - imagesrc: ${imagesrc}`);
            document.getElementById('picCurrently').setAttribute('src', imagesrc);
            const humidity = jsObject.current.humidity;
            document.getElementById('humidity').textContent = humidity;
            const winspeed = jsObject.current.wind_speed;
            document.getElementById('windspeed').textContent = winspeed;
            const feelslike = jsObject.current.feels_like;
            document.getElementById('feelslike').textContent = feelslike;
            /*
            
            
            document.getElementById('currently').textContent = desc;
            /*document.getElementById('icon').setAttribute('src', imagesrc);
            document.getElementById('icon').setAttribute('alt', desc);
            
            
            const windchill = windChill(temperature, winspeed);
            document.getElementById('windchill').textContent = windchill;*/
    }
);
