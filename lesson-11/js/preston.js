((new Date()).getDay() == 5) ? document.querySelector('#banner').style.display = 'block' : console.log((new Date()).getDay())
let testDay = new Date("2021-06-29").getUTCDay();
console.log("The Date is: ",testDay);

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
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* LAZY LOAD IMAGES */

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {

  image.setAttribute('src', image.getAttribute('data-src'));
  
  image.onload = () => {
    image.removeAttribute('data-src');
  };
  
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {

        items.forEach((item) => {
 
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        
        });
    });

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

} else {

    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
 
}

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
            /*console.log(jsObject);*/
            const temperature = jsObject.main.temp;
            document.getElementById('temperature').textContent = temperature;
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            const desc = jsObject.weather[0].description;
            const winspeed = jsObject.wind.speed;
            const humidity = jsObject.main.humidity;
            document.getElementById('currently').textContent = desc;
            /*document.getElementById('icon').setAttribute('src', imagesrc);
            document.getElementById('icon').setAttribute('alt', desc);*/
            document.getElementById('windspeed').textContent = winspeed;
            document.getElementById('humidity').textContent = humidity;
            const windchill = windChill(temperature, winspeed);
            document.getElementById('windchill').textContent = windchill;
    }
);

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
            console.log(jsObject);
            const listOfTemps = jsObject.list;
            console.log(listOfTemps);
            let forecastDays = [];
            let forecastIcons = [];
            let forecastTemps = [];
            listOfTemps.forEach(temp => {
                let hora = temp.dt_txt.split(' ')[1];
                console.log(hora);
                if (hora == '18:00:00'){
                    forecastDays.push(temp.dt_txt.split(' ')[0]);
                    forecastTemps.push(temp.main.temp);
                    forecastIcons.push(temp.weather[0].icon);
                }
            })
            const titleForecast = document.querySelectorAll(".titleForecast");
            const picForecast = document.querySelectorAll(".picForecast");
            const tempForecast = document.querySelectorAll(".tempForecast");
            let weekDay = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
            console.log(forecastDays);
            for (i=0; i<5; i++) {
                titleForecast[i].textContent = weekDay[new Date(forecastDays[i]).getUTCDay()];
                const srcImg = 'https://openweathermap.org/img/w/' + forecastIcons[i] + '.png';
                console.log(srcImg);
                picForecast[i].setAttribute("src",srcImg);
                tempForecast[i].textContent = forecastTemps[i];
                console.log("i: ", i);
            };
            
    }
);

function windChill(tempF, speed) {
    /*tempF = 40;*/
    let factor = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    factor = Math.round(factor * 10)/10;
    if (tempF <= 50 && speed > 3) {
        return factor;
    } else {
        return factor;
    }
    
    
}