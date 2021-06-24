const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=10d779ad423d396cdcffa6696f58adce&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
            console.log(jsonObject);
    }
    );

