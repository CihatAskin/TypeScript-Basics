import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService
let result;

result = _productService.getProducts();
console.log('all products', result);
console.log('****************************');

let no2 = _productService.getById(2);
console.log('product 2', no2);
console.log('****************************');

let newProduct = new Product();
newProduct.name = 'LG Monitor';
newProduct.category = 'Ekran';
newProduct.price = 300;

_productService.saveProduct(newProduct);
result = _productService.getProducts();
console.log('added result', result);
console.log('****************************');

_productService.deleteProduct(no2);
result = _productService.getProducts();
console.log('deleted product 2', result);
console.log('****************************');

let discountedProduct = new Product(3, 'Siemens Buzdolabı', 'Beyaz Eşya', 1000);

_productService.saveProduct(discountedProduct);
result = _productService.getProducts();
console.log('updated price of product 3', result);
console.log('****************************');