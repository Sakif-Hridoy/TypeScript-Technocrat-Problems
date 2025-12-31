// Problem 1 Solution

//c=delcared A type
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

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
