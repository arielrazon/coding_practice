let incomes = [62000, 67000, 75000];
let total = 0;


//the below syntax states each position in the for loop will be interacted with as the 'income' variable
for (let income of incomes){
    console.log(income);
    total += income;
}


console.log(total)