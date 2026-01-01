/* Problem One Solution */

//delcared A type
type DataType = string | number | boolean;

//function
function formatValue(param:DataType){
    //checking type through typeof
    if(typeof param === 'string'){
        return param.toUpperCase()
    }
    if(typeof param === 'number'){
        return param = param * 10
    }
    if(typeof param === 'boolean'){
        return param
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));




/* Problem Two Solution*/

//define type
type stringOrArray = string | any[];

// give type to function
function getLength(value: stringOrArray): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));



/* Problem Three Solution */

// define class
class Person {
  name: string;
  age: number;

  // define constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // methods
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());





/* Problem Four Solution */

// type
type item = {
    title:string;
    rating:number
}

// function
function filterByRating(items:item[]):item[]{
    return items.filter(item=> item.rating>= 4)
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));




/* Problem Five Solution */

// type

type User = {

    id:number;
    name:string;
    email:string;
    isActive:boolean;

}

// function
function filterActiveUsers(users: User[]):User[]{
    return users.filter(user=>user.isActive === true)
}


// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));




/* Problem Six Solution */

// interface
interface Book{
    title:string
    author:string
    publishedYear:number
    isAvailable:boolean
}

// function
function printBookDetails(book:Book): void{
    const availability = book.isAvailable ? "Yes" : "No"

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}

// Sample Input
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);






/* Problem Seven Solution */

//type 
type Value = string | number;

//function
function getUniqueValues(arr1: Value[], arr2: Value[]): Value[] {
  // result array
  const result: Value[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    let exists = false;

    if (current !== undefined) {
      for (let j = 0; j < result.length; j++) {
        if (current === result[j]) {
          exists = true;
        }
      }

      if (!exists) {
        result.push(current);
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const current = arr2[i];
    let exists = false;

    if (current !== undefined) {
      for (let j = 0; j < result.length; j++) {
        if (current === result[j]) {
          exists = true;
        }
      }

      if (!exists) {
        result.push(current);
      }
    }
  }

  return result;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));




/* Problem Eight Solution */

// type
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map(product => {
      const basePrice = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = (basePrice * product.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((total, current) => total + current, 0);
}

// sample input
// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));