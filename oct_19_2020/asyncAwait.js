const { default: fetch } = require("node-fetch");

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke(){
   //response will accept the return of whatever fetch returns
   const response = await fetch(apiUrl);
   //data will accept the return from the .json()ing of response
   const data = await response.json();
   console.log(data.value);

   //my attempt below:
//     let joke = new Promise((resolve,reject)=>{
//         let data;
//         fetch(apiUrl)
//         .then(response=>response.json())
//         .then(data=>{
//             data=data;
//             data?resolve((data)):reject('no response from server');
//     })
// })
//     let result = await joke;
//     console.log({result})
}

getJoke();
