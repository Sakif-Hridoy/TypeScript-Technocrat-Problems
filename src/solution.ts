/* Problem One Solution/

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
