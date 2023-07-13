class User {
	constructor(name: string) {
		this.name = name;
	}
	name: string;
}

const user = new User("Dima");
console.log(user);
user.name = "Vika";
console.log(user);

class Admin{
	role: number;
}

const admin = new Admin();
admin.role = 1;