// Higher-Order Functions/Methods:
// Higher-order functions/methods er funksjoner som tar andre funksjoner som argument til
// ett eller flere parametere.


// Filtering
// Bruker en funksjon som argument til parameteret `predicate`
// for å filtrere et array.

// const array = [0,1,2,3,4,5,6,7,8,9];

// const predicate = (value, index, array) => {
//     console.log(`value: ${value}, index: ${index}, array: ${array}`);
//     return value % 2 === 0;
// };
 
// const result = array.filter(predicate);
// console.log(result);



// Callbacks

// Callback example 1:
// function sum(arr, callback) {
//     let result = 0;

//     for (const element of arr) {
//         // console.log(callback(element));
//         result += callback(element, result);
//     }

//     return result;
// }

// const result = sum([1,2,3,4,5,6], (value, partialSum) => value+partialSum); 
// console.log(result); 

// Callback example 2:
// function httpRequest(request, cb) {
//     const result = {status: 200};
//     const error = -1;
    
//     // ...
//     cb(result, error);
// }

// httpRequest("nrk.no", (res, err) => {
//     if (err !== -1) {
//         throw new Error("No good!");
//     }

//     console.log(res);
// })

// Sort
// Bruker en funksjon som argument til parameteret `compareFn`
// for å sortere et array.
const arr = ["Apple", "Banana", "Foobar", "Barbaz"];

const sort = arr.sort((a, b) => {
    if (a === "Banana") return -1;

    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
});

console.log(sort);



// Map
// Bruker en funksjon som argument til parameteret `predicate`
// for å filtrere et array.

// console.log(arrayWithObjects.map(e => `I'm ${e.name}, and I'm ${e.age} years old!`));
// console.log()

const arrayWithObjects = [
    {name: "Jane Doe", age: 21}, // accumilator = initialValue, current = {name: "Jane Doe", age: 21}
                                 // result = accumilator + current.age (0 + 21)

    {name: "John Doe", age: 23}, // accumilator = result[0], current = {name: "John Doe", age: 23}
                                 // result = accumilator + current.age (21 + 23)
    
    {name: "Foo Bar", age: 32},  // accumilator = result[0], current = {name: "Foo Bar", age: 32}
                                 // result = accumilator + current.age (44 + 32)

    {name: "Bar Baz", age: 41},  // accumilator = result[0], current = {name: "Bar Baz", age: 41}
                                 // result = accumilator + current.age (76 + 41)

    {name: "Qui Qux", age: 56},  // accumilator = result[0], current = {name: "Qui Qux", age: 56}
                                 // result = accumilator + current.age (117 + 56)
]; // result = 117 + 56 = 173

const callback = (accumilator, current, _) => {
    return current.age + accumilator;
};

// Regn ut gjennomsnitt av alderen til alle i `arrayWithObjects`
const result = arrayWithObjects.reduce(callback, 0) / arrayWithObjects.length;
console.log(result);



// ForEach
// Kjører `callbackFn` på hvert element, i sekvens.
arrayWithObjects.forEach(e => console.log(e));

// De mest brukte `Higher-order`-funksjonene/metodene, aka "The usual suspects", inkluderer:
//  .filter
//  .sort
//  .map
//  .reduce
//  .forEach






