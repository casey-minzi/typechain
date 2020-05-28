class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const caden = new Human("Caden", 24, "female");

const sayHi = (person: Human): string => {
    let {name, age, gender} = person;
    return `Hello, ${name}, you are ${age} years old ${gender}.`;
}

console.log(sayHi(caden));

export {};