// const axios = require('axios');

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//     console.log(language);
//     console.log(category);
//     console.log(flags.religious);
//     console.log(flags.political);
//     console.log(joketype);
//   });
const express=require ('express')
const app = express()

app.get('/',(req, res) =>{
  res.send("hello world ")

})
app.listen(3200,()=>{
console.log ( "works!")
})
