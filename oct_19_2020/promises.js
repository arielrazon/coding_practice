//Promises
const userData = () => {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            const err = false;
            if( err ){
                reject("Sorry your query was not successful")
                    
                }
                else{
                    resolve({
                        userName:'ariel',
                        age:'29',
                        email:'a@b.com'
                    })
            }
        }, 3000)
    });

}

userData()
.then((success)=>console.log(success))//processes resolve function
.catch((error)=>{console.log(error)});//processes reject function