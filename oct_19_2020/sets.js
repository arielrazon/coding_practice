const exampleSet = new Set([1,1,1,1,12,2,22,2,3,3,3,34,34]);

//you can use add function
exampleSet.add(12)
exampleSet.add(66).add(17)
//you can use delete function
exampleSet.delete(17)
//delete function will return a boolean if logged
console.log(exampleSet.delete(66));

//.has will return a boolean to see if a set has the number on it
console.log(exampleSet.has(12));

console.log(exampleSet)

//.clear will clear your set completely
exampleSet.clear();

//.size is a property of sets. equal to .length from first glance
console.log(exampleSet.size)





//sets are iterable and can be used with foreach and map