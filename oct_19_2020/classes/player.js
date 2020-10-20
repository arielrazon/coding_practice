export class Player {
    constructor(name, country){
        this.name = name;
        this.country = country;
        this.getFrom = function(){
            console.log(`${this.name} was born in ${this.country}`);
        }

    };
};

export class TennisPlayer extends Player{
    constructor(name,country,age){
        super(name,country)
        this.age=age;
        this.getAge = function(){
            console.log(`${name} is ${age} years old and from ${country}. They know how to play Tennis`)
        }
    }
}