const request = require('request');
const fs = require('fs');
const url = 'https://api.darksky.net/forecast/adfbed83624e11c7cf16102466381b87/37.8267,-122.4233?units=si&lang=es';

request({
    url: url,
    json: true
}, (error, response) => {
    const data = response.body;
    //console.log(data.currently);
    console.log(data.daily.data[0].summary+' It is currently '+ data.currently.temperature +' degrees out. There is a '+data.currently.precipProbability+'% chance of rain.');
});