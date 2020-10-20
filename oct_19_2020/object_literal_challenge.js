function addressMaker(address){
    const {city,state} = address;
    //if you change newAddress object syntax to:
    const newAddress={
        city,
        state,
        country:'United States'
    }
    console.log(`The new Address is in: ${newAddress.city}, ${newAddress.state}. This address is located within country: ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});