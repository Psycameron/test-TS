let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = "sadsda";
let d: number = parseInt(c);

interface User {
    name: string,
    email: string,
    login: string
}

const user: User = {
    name: "Vasya",
    email: "vasya@gmail.com",
    login: "vasya"
}

interface Admin {
    name: string,
    role: number
}

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}