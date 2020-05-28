const name = "Casey",
    age = "25",
    gender = "female";

const sayHi = (name, age, gender?) => {
    console.log(`Hello, ${name}, you are ${age} years old ${gender}.`);
}

sayHi(name, age, gender);

export {};