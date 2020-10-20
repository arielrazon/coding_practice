const { default: fetch } = require("node-fetch");

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke(){
   const response = await fetch(apiUrl);
   const data = await response.json();
   console.log(data);
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
