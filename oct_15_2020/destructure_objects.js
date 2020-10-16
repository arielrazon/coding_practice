const obj = {
    key:"value",
    obj2:{
        new:"object",
        within:{
            an:"object"
        }
    }
}
//to get the top-level keys out of the object, use following syntax:

const { key, obj2 } = obj;

//to get mid-level keys out of the Object, use the following syntax:
const { obj2:{within} } = obj

//to get 3rd-level keys out of an object, see the following:

const { obj2:{within:{an}} } = obj;

console.log({key, obj2, within, an})