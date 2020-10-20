function addressMaker(city,state){
    //if you change newAddress object syntax to:
    const newAddress={newCity: city, newState:state};
    //this syntax:
    const objectLiteralAddress = {city,state};
    //then objectLiteralAddress will look like:
    //{city: city, state: state}
    console.log(newAddress)
    //you dont need to input keys, you can just put in the values you're passing into the object.
    console.log(objectLiteralAddress);
}

addressMaker('Austin','Texas')