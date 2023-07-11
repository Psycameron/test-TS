interface User {
    name: string,
    email: string,
    login: string
}

interface Admin {
    name: string,
    role: number
}

const user: User = {
    name: "Vasya",
    email: "vasya@gmail.com",
    login: "vasya"
}

function isAdmin(user: User | Admin): user is Admin {
    return "role" in user;
}

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error("User is not admin")
    }
}