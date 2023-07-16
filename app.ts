interface ILogger {
	log(...args): void;
	error(...args): void;

}

class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args)
	}
	error(...args: any[]): void {
		console.log(...args)
	}
	
}

interface IPayable {
	pay(payableId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void;
}

class User implements IPayable, IDeletable{
	delete(): void {
		throw new Error("Method not implemented.");
	}
	pay(payableId: number | string): void {
		// 
	}
}