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