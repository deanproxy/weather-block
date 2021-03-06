
const rest = require('rest');
const mime = require('rest/interceptor/mime');

const APIKEY = 'yourApiKeyFromOpenWeatherMap';
const ZIPCODE = '30115';

const client = rest.wrap(mime);

const sunnyIcon = "";
const cloudyIcon = "";
const rainIcon = "";
const snowIcon = "";

client(`http://api.openweathermap.org/data/2.5/weather?zip=${ZIPCODE}&units=imperial&APPID=${APIKEY}`)
   .then(response => {
      const info = response.entity;
      let icon = sunnyIcon;
      console.log(info);
      switch (info.weather[0].main) {
      case 'Clouds':
         icon = cloudyIcon;
         break;
      case 'Rain':
         icon = rainIcon;
         break;
      case 'Snow':
         icon = snowIcon;
         break;
      default:
         break;
      }
      let output = `${icon} ${Math.round(info.main.temp)}F`;
      console.log(output);
   });
