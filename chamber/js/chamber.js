function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

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
function addUpdatedDate2() {
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
        let message2 = `&#169; | ${fullYear} | Carlos Castro | Pictures and events from Camara de Comercio de Santiago - published here for educational purposes | <a href= "https://www.byui.edu/online">BYU Online Learning</a>`
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
            document.getElementById('temperature').textContent = temperature;
            const desc = jsObject.current.weather[0].description;
            document.getElementById('currently').textContent = desc;
            const icon = jsObject.current.weather[0].icon;
            const imagesrc = 'https://openweathermap.org/img/w/' + icon + '.png';
            console.log(`icon: ${icon} - imagesrc: ${imagesrc}`);
            document.getElementById('picCurrently').setAttribute('src', imagesrc);
            document.getElementById('picCurrently').setAttribute('alt', `Icon than means ${desc}`);
            const humidity = jsObject.current.humidity;
            document.getElementById('humidity').textContent = humidity;
            const winspeed = jsObject.current.wind_speed;
            document.getElementById('windspeed').textContent = winspeed;
            const feelslike = jsObject.current.feels_like;
            document.getElementById('feelslike').textContent = feelslike;
            const listOfTemps = jsObject.daily;
            console.log("listOfTemps:", listOfTemps);
            let forecastDays = [];
            let forecastIcons = [];
            let forecastTemps = [];
            listOfTemps.forEach(temp => {
                    forecastTemps.push(temp.temp.day);
                    forecastIcons.push(temp.weather[0].icon);
                    console.log(`temperature: ${temp.temp.day}, icon: ${temp.weather[0].icon}`);
                }
            )
            const picForecast = document.querySelectorAll(".picForecast");
            const tempForecast = document.querySelectorAll(".tempForecast");

            for (i=0; i<3; i++) {
                picForecast[i].setAttribute("src",`https://openweathermap.org/img/w/${forecastIcons[i]}.png`);
                tempForecast[i].textContent = `${forecastTemps[i]} °F`;
            }
        }
);
