const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/comments/501',)
    .then(response => response.json())
    .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/comments',{
    method:"POST",
    body:JSON.stringify({
        name: 'some nonsense here',
        email:'a.r.razon@gmail.com',
        body:'this is some pretty alright nonsense i guess',

    })
})
.then(success=>success.json())
.then(data=>console.log(data));

