const express = require('express')
const app = express()
const port = 3000

var population = 0
var residential_zones = 0 

var date = "1800-01-04"
var my_date = new Date(date);

// game tick
setInterval(function() {
    if (population < residential_zones) {
        population=population+1

        //reduce population if it's bigger than residential zones
    } else if (population > residential_zones) {
        population=population-1
    } else {
        population=population;
    } 
    my_date.setDate(my_date.getDate() + 1);
},1000)

app.use(express.static('dist'))

// app.get('/', (req, res) => res.send(''))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//this method respons is a json object w population, residential_zones and date.
//all these variable were initialized in the beginning of the server file
app.get('/info', (req, res) => res.json(
        { "population":population,
          "residential_zones": residential_zones,
          "my_date": my_date }
        )
);
//add residential zones
app.get('/add_residential_zone', function(req, res) {
    residential_zones=residential_zones+1
    res.json({"success":true});
});
//reduce residential zones
app.get('/destroy_residential_zone', function(req, res) {
    residential_zones=residential_zones-1
    res.json({"success":"yes"});
});



