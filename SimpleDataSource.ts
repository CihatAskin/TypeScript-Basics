import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Iphone 7s", "Telefon", 5000),
            new Product(2, "Samsung Oled Tv", "Televizyon", 15000),
            new Product(3, "Siemens Buzdolabı", "Beyaz Eşya", 3000),
            new Product(4, "Samsung Çamaşır Mkinesi", "Beyaz Eşya", 2500),
            new Product(5, "Rowenta ", "Saç Kurutma Makinesi", 100),
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}