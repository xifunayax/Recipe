/*
(c) 2019 Louis. D. Nel

WARNING:
NOTE: THIS CODE WILL NOT RUN UNTIL YOU ENTER YOUR OWN openweathermap.org APP ID KEY

NOTE: You need to intall the npm modules by executing >npm install
before running this server

Simple express server re-serving data from openweathermap.org
To test:
http://localhost:3000
or
http://localhost:3000/weather?city=Ottawa
to just set JSON response. (Note it is helpful to add a JSON formatter extension, like JSON Formatter, to your Chrome browser for viewing just JSON data.)
*/
const express = require('express') //express framework
const http_request = require('request') //helpful npm module for easy http requests
const PORT = process.env.PORT || 3000 //allow environment variable to possible set PORT

/*YOU NEED AN APP ID KEY TO RUN THIS CODE
  GET ONE BY SIGNING UP AT openweathermap.org
*/
let API_KEY = 'd49eeae2f8f95cd303f05f353c3dc61c' //<== YOUR API KEY HERE


const app = express()

//Middleware
app.use(express.static(__dirname + '/public')) //static server

//Routes
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})
app.get('/index.html', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})
app.get('/recipes.html', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


app.get('/recipes', (request, response) => {
  let ingredient = request.query.ingredient
  let url = ''
  if(!ingredient) {
    return response.json({message: 'Please enter an ingredient name'})
    url = `https://food2fork.com/api/search?key=${API_KEY}&q=${ingredient}`
  }
  else {
    url = `https://food2fork.com/api/search?key=${API_KEY}&q=${ingredient}`
  }
  http_request.get(url, (err, res, data) => {
    return response.contentType('application/json').json(JSON.parse(data))
  })
})

//start server
app.listen(PORT, err => {
  if(err) console.log(err)
  else {
    console.log(`Server listening on port: ${PORT}`)
    console.log(`To Test:`)
    console.log(`http://localhost:3000/recipes?ingredient=Basil`)
    console.log(`http://localhost:3000`)
    console.log(`http://localhost:3000/index.html`)
    console.log(`http://localhost:3000/recipes.html`)
    console.log(`http://localhost:3000/recipes`)
  }
})
