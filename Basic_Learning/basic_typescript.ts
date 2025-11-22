// Let's learn some of the typescript  pecific code

// Setting manually the types of variables
let myname: string = "hello"
let myNumber: number = 123
let isMynumber: boolean = false

// Custiom Types

type Food = string
let pizza: Food = "cheese "

type Person = {
    name: string,
    id: number,
    isStudent: boolean,
    // This here we just maked this as a optional , like there may be some persons who don't want to add thier address , so we make it optional by just adding a ? after the name
    // address?: Address
}
type Address = {
    street: string,
    country: string,
    city: string,
    Hno: number
}

let person1: Person = {
    name: "person1",
    id: 123,
    isStudent: false,

}
// here when I am not making any person object, it was not giving me any erros as ts is taking both objects as different ones , but ones as I defined the type of Person object it stated giving me errors to let me be consistent throughout the code
let person2: Person = {
    name: "person2",
    id: 234,
    // This statement gives us erros because it has name convnetion , WE are making names different 
    // isstudent: false
    isStudent: false,
    // address: {
    //     street: "main street",
    //     city: "Salt lake",
    //     country: "United States",
    //     Hno: 23
    // }

}

function displayPerson(person: Person) {
    //Here we just maded something boom , like there might be cases that address of person is not available as we had defined it as optional before , so here also inside the function we can make it optional 
    console.log(`${person.name} lives at `);
}
displayPerson(person2)




// Typing arrays

let array: number[] = [100, 400]
array.push()

//Persons array
let persons: Person[] = [person1, person2]

///Let's see a function return types

function getUserDetails(username: string): Person {
    const person = persons.find(ele => ele.name === username)
    if (!person) throw new TypeError("username typed wrong or not exist")

    return person
}

console.log(getUserDetails("person1"));



////////////////////////////////////////////////
//TypeScript "any" type
// use type any -> this basicall ymeans we are switiching off the typeScript checking and just letting everthing come whatever the value is coming

/// when should I use any?
//-> In short : Don't use 
// one of the only useCases can be like -> if I am changing my index.js to index.ts then for temporalrily I will use any so I won't get bunch of errors to get my head fuck

let value: any = 1
value = "hi"