const express = require('express')
const app = express()
const port = 3000

var population = 0

// game tick
setInterval(function() {
    population=population+1;
},1000)

app.use(express.static('dist'))

// app.get('/', (req, res) => res.send(''))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/info', (req, res) => res.json({"population":population}));

