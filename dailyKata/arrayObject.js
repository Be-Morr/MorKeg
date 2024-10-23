// // / let squirell = "squirell";
// // squerell = 2;
// squerell = true;
// //
// // Number =>  -1, 1, 0.2, 4/3, NaN, Infinity, -Infinity
// //  Object -> Number
// // { return turn if you try and use this - but its number.... give it number methods }
// // const numberOfNuts = 2;
// // Instance methods
// // Whats a string?
// // Basic Javascript Types
// // Basic: Number, String, Boolean,
// // Complex:  Object, Array, Function, (wtf Symbol?)
// // ---
// // Array
// const myArray = [1, 2, 3, 4, 5];
// // const myArray2 = ["a", "b", "c", "d", "e"];
// // Probably better to use an object in this case...
// // const myMixedArray = [1, "a", true];
// // Map x and y, 2 items.
// const my2DArray = [
//     [1, 2],
//     [3, 4]
// ];
// // Map x, y and z, 3 items.
// // for (let x = 0; x < my2DArray.length; x++) {
// //     const row = my2DArray[x];
// //     debugger
// //     for (let y = 0; y < row.length; y++) {
// //         console.log(row[y]);
// //     }
// // }
// // Instance methods:
// // Memorize these!
// // Adds to end of array
// // myArray.push(6);
// // adds beginning of array
// // myArray.unshift(0);
// // myArray.pop();
// // myArray.shift();
// // Bracket with number, means an array
// // Setters, (used less, more likely to use push, pop, shift, unshift)
// // myArray[10] = 10;
// // // Getters
// // const firstItem  = myArray[0];
// // console.log(myArray);
// // console.log(firstItem);
// // myArray
// // Object point to instances in memory.
// // const differentArray = myArray;
// // Pointing the same object in memory...
// // Ways to get around
// // const differentArray = myArray.slice();
// // const differentArray = [...myArray];
// // differentArray.push("new value");
// // console.log(myArray);
// // const my2DArray = [
// //     [1, 2],
// //     [3, 4]
// // ];
// const differentArray2d = [...my2DArray];
// differentArray2d.push([5, 6]);
// // the [1,2]
// differentArray2d[0].push(2.5);
// // console.log(my2DArray);
// // If copying an array or an object...
// // If its flat... you can use the spread operator safetely
// // Spread operator => ...myArray
// // Other wise, you need to use a deep copy.
// // JSON.parse(JSON.stringify(ingredientsList));
// // Javascript Objects/Arrays are mutable.
// // If you change one, you change the other.
// // Objects: Flat objects
// // Key value pairs
// const myFlatObject = {
//     // Keys are strings
//     // key => `firstName`, value => `John`
//     firstName: "John",
//     lastName: "Doe",
//     age: 71,
//     isOld: true
// };
// // Gotta know the order of things, order change, you"re fucked
// const myDumbObjectAsAnArray = ["John", "Doe", 71, true];
// const dynamicKey = "firstName";
// // setter
// myFlatObject.firstName = "Jane";
// myFlatObject[dynamicKey] = "Jane";
// //
// myFlatObject["firstName"] = "Jane";
// // getter
// const firstName = myFlatObject.firstName;
// const firstName2 = myFlatObject[dynamicKey];
// // This last one is dumb
// const firstName1 = myFlatObject["firstName"];
// const dumbObject = {
//     "first-name": "John",
//     "last name": "Doe",
//     "2": "two"
// };
// // How the hell do I access?
// // can"t do dumbObject.first-name
// console.log(dumbObject["first-name"]);
// // Can"t do dumbObject.last name
// console.log(dumbObject["last name"]);
// // Can"t do dumbObject.2
// console.log(dumbObject["2"]);
// // Nested Objects: (object within object)
// const myNestedObject = {
//     firstName: "John",
//     lastName: "Doe",
//     isOld: true,
//     car: {
//         model: "Toyata",
//         licencePlateNumber: "FUCKYOU",
//         year: 1999,
//         // damaged is a pointer in memory (pointer.11231231231)
//         damaged: {
//             headlights: true,
//         }
//     }
// };
// // Car is a different pointer in memory.
// // const myNestedObject = {
// //     firstName: "John",
//         // ..ect
// //     car: Pointer(123124214312312312)
// const car = myNestedObject.car;
// // If i update car, i update the value in MynestedObject.
// // Flat copy of object
// // This is super safe! (...spread Operateor)
// const flatObjectCopy  = { ...myFlatObject }
// // Not safe with nested objects! in that case, use a deep copy
// // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
// // Generally speaking... DON”T MUTATE OBJECTS/ARRAYS
// // And if you have to... MAKE A COPY!!!
// // Rather than sweating deeClone/copy....
// // Just shallow/..spread operate copy with object you need to change.
// // New contact, has the same car, but different licence plate numer. Same damages...
// // I don"t wanna rewrite object cuz lazy...
// // same pointers for both below!!
// // const myCarCopy = { ...myNestedObject.car };
// // const myCarCopy = { ...car };
// // // const myCarCopy.damaged = null;
// // Exception. object/array is being used in a closed scope. (using and throwing away)
// // Event than... maybe not.
// // Add a comment if you"re gonna mutate, as to why you"re doing it.
// // (nested/objects/arrays or reverse!)
// // OBjects, have similar shapes... (keys are the same)
const contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    isOld: true,
    car: {
      model: "Toyata",
      licencePlateNumber: "FUCKYOU",
      year: 1999,
      // damaged is a pointer in memory (pointer.11231231231)
      damages: [
        {
          location: "headlights",
          description: "upper left side",
        },
        {
          location: "bumper",
          description: "bottom (huge)",
        },
      ],
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    isOld: true,
    car: {
      model: "Toyata",
      licencePlateNumber: "TarMat",
      year: 1999,
      // damaged is a pointer in memory (pointer.11231231231)
      damages: null,
    },
  },
];
const contactz =undefined;
// console.log(contacts?.[3]?.car)
// // const contactName = contacts[1];
// const [contactName1,contactName,nameWho] = contacts;
// const {car: contactCar, firstName} = contactName

// // const contactCar = contactName.car;
// const contactLicence = contactCar.licencePlateNumber

// // console.log(contacts[0].car.damages[0].description)

// console.log(nameWho)
// // console.log(contactCar)

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

// console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
const object1Keys = Object.keys(object1);
for (let i=0; i<object1Keys.length; i++){
  const currentKey = object1Keys[i];
  console.log(object1[currentKey]);
}

// iterate over an object

