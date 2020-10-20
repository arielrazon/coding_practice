let contacts = ["mary","joel","danny"];

//the below syntax creates a new array that is a copy of the 'contacts' array. it will not change if you 'push' into contacts array later.
let personalFriends = [...contacts]

//if you want to mix and match, you can do so, utilizing:

let mixAndMatch = ["mix", ...contacts, "match"]

let spreadObj = {
    name: "Adam",
    age: 25,
    city: "Seattle"
}

//if copying spreadObj, you don't have to copy each field, you can use:
let newSpreadObj = {
    ...spreadObj,
    new:"key"
}

console.log({spreadObj,newSpreadObj})