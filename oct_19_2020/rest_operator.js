function add(...nums) {
    console.log(nums)
    //arguments contains the entire parameter list as an object, with keys laid out like:
    /*{'0':nums[0], '1':nums[1], etc:'et cetera} */
    console.log(arguments)
    //arguments is unofficialy deprecated though
    //best to just use rest operator in the parameters. ...param basically means, accept multiple parameters
}

add(4,5,6,7)