function greet(city, country) {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, I live in ${city}, ${country}`);
}

const user={
    name:"John",
    age:30
}
const userlocation=greet.bind(user,("New York","USA"))


userlocation()