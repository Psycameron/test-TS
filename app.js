"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class DeliveryToHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryToShop extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.productList = [];
    }
    addProduct(product) {
        this.productList.push(product);
    }
    deleteProduct(productId) {
        this.productList = this.productList.filter((product) => product.id !== productId);
    }
    countPrice() {
        return this.productList.map((p) => p.price).reduce((p1, p2) => {
            return p1 + p2;
        }, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.productList.length === 0) {
            throw new Error("The cart is empty! Add the products");
        }
        if (!this.delivery) {
            throw new Error("Choose delivery method");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, "Cookie", 30));
cart.addProduct(new Product(2, "Cake", 100));
cart.addProduct(new Product(3, "Chocolate", 70));
cart.deleteProduct(1);
cart.setDelivery(new DeliveryToHome(new Date(), "to home"));
console.log(cart.countPrice());
console.log(cart.checkOut());
