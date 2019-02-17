const isOpen: boolean = false
const firstName: string = 'Freddie'
const myAge: number = 28
const list: [number, string] = [1,'Name']

enum Job{
    WebDev,
    ProjectManager,
    SoftwareEngineer
}

const job: Job = Job.WebDev

// Declaring Typed Functions

const sayHello = (name = "Bruce Wayne", ...otherStuff: string[]): string => {
    // Name still type checked since we're implicitly setting as a string
    console.log(otherStuff)
    return `Hello, ${name}`
}

sayHello("Freddie", "Engineer", "WebDev" )

// Interfaces

interface Person {
    name: string, // Named Typed Params
    age?: number
}

const printStats = ({name, age}: Person): string => { // Destructuring name and age out of Person
    if (age) {
        return `Name: ${name} Age: ${age}`    
    }
    return `Name: ${name}`
}

console.log(printStats({
    name: 'Freddie',
    age: 28
}))

// Reverse order: Our interface allows us to enter these in any order
console.log(printStats({age: 28, name: "Freddie"}))

// Age is an optional param as denoted by the ? after its name
console.log(printStats({name: "Freddie"}))