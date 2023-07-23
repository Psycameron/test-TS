class Product {
	constructor(
		public id: number,
		public title: string,
		public price: number,
	) {	}
}


class Delivery{
	constructor(public date: Date){}
}

class DeliveryToHome extends Delivery {
	constructor(date: Date, public address: string) {
		super(date);
	}
}

class DeliveryToShop extends Delivery {
	constructor(public shopId: number) {
		super(new Date());
	}
}

type DeliveryOptions = DeliveryToHome | DeliveryToShop

class Cart {
	private productList: Product[] = [];
	private delivery: DeliveryOptions;
	
	
	public addProduct(product: Product): void {
		this.productList.push(product);
	}
	
	public deleteProduct(productId: number): void {
		this.productList = this.productList.filter((product: Product) => product.id !== productId);
	}

	public countPrice(): number {
		return this.productList.map((p: Product) => p.price).reduce((p1: number, p2: number) => {
			return p1 + p2
		}, 0)
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
	}		
	public checkOut() {
		if (this.productList.length === 0) { 
			throw new Error("The cart is empty! Add the products")
		}
		if (!this.delivery) {
			throw new Error("Choose delivery method")
		}

		return { success: true };
	}
}
	
const cart = new Cart();
cart.addProduct(new Product(1, "Cookie", 30))
cart.addProduct(new Product(2, "Cake", 100))
cart.addProduct(new Product(3, "Chocolate", 70))
cart.deleteProduct(1);
cart.setDelivery(new DeliveryToHome(new Date(), "to home"))
console.log(cart.countPrice())
console.log(cart.checkOut())