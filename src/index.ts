const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello, ${name}, you are ${age} years old ${gender}.`;
}

console.log(sayHi('Casey', 25, 'female'));

export {};