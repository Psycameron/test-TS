"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("Dima");
console.log(user);
user.name = "Vika";
console.log(user);
