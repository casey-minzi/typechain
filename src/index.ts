interface Human {
    name: string;
    age: number;
    gender: string;
};

const person = {
    name: 'Casey',
    age: 25,
    gender: 'female'
};

const sayHi = (person: Human): string => {
    let {name, age, gender} = person;
    return `Hello, ${name}, you are ${age} years old ${gender}.`;
}

console.log(sayHi(person));

export {};