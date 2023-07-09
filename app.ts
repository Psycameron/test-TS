function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
}

interface UserPro {
    login: string,
    password?: {
        type: "pro" | "basic"
    }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
}

function test(param?: number) {
    const t = param ?? multiply(5);
    return t;
}

console.log(test(11));
console.log(test());