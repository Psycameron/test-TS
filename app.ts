interface User {
    name: string,
    age: number,
    skills: string[]

    log: (id: number) => string;
}

interface Role {
    role: string,
}

interface UserWithRole extends User, Role {
    createAt: Date,
}

const user: UserWithRole = {
    name: "asdasd",
    age: 22,
    skills: ["1", "2"],
    role: "admin",
    createAt: new Date(),
    log(id) {
        return "";
    }
}
