type httpMethod = "post" | "get";

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

fetchWithAuth("s", "get")

type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    role: string,
}

type UserWithRole = User & Role;

const user: UserWithRole = {
    name: "asdasd",
    age: 22,
    skills: ["1", "2"],
    role: "admin"
}
