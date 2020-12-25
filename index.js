const axios = require('axios');
const { response } = require('express');
const express = require('express')
const app = express()

//axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

const port= process.env.port || 3200;
app.listen(port, () => {
  console.log("works!")
})

app.get('/jokes', (req, res) => {
  axios.get('https://sv443.net/jokeapi/v2/joke/Any')
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      console.log(response.data.setup);
      console.log(response.data.delivery);
      console.log(response.data.category);
      res.send(response.data.setup + response.data.delivery);
      //console.log(response.data.category);
      // console.log(response.data.flags.religious);
      // console.log(response.data.flags.political);
      //console.log(response.data.id);
    })
    .catch(error => {
      console.log(error);
    })
})


// app.get('/jokes', (req, res) => {
//   res.send(response.data.setup)
// })

// app.get('/api/courses', (req, res) => {
//   res.send([1, 2, 3])
// })

// app.get('/bilal', (req, res) => {
//   res.send("Developer")
// })

