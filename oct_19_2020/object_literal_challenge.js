function addressMaker(address){
    //if you change newAddress object syntax to:
    const newAddress={
        city:address.city,
        state:address.state,
        country:'United States'
    }
}

addressMaker({city: 'Austin', state: 'Texas'});