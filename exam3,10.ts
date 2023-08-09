// example 1

// const getSum = (n: number): number => {
//   let res = 1;
//   let res1 = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= 2 * i - 1;
//     res1 *= 2 * i;
//   }
//   return res + res1;
// };

// console.log(getSum(3));

// example 2

// function getHighestNumberOfDigits(arr: number[]): void {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (max < el) {
//       max = el;
//     }
//   }
//   console.log(max);
// }

// let arr = [1589, 31851, 512, 180975, 78];

// getHighestNumberOfDigits(arr);

// example 3

// function getStringArr(arr: any): string[] {
//   let res: string[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (typeof el == "string") {
//       console.log(el);
//       res.push(el);
//     }
//   }
//   return res;
// }

// let arr1 = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

// console.log(getStringArr(arr1));

// axample 4

// const getPunctuationNumber = (str: string): number => {
//   const punctuationSigns = [
//     "!",
//     '"',
//     "#",
//     "$",
//     "%",
//     "&",
//     "'",
//     "(",
//     ")",
//     "*",
//     "+",
//     ",",
//     "-",
//     ".",
//     "/",
//     ":",
//     ";",
//     "<",
//     "=",
//     ">",
//     "?",
//     "@",
//     "[",
//     "\\",
//     "]",
//     "^",
//     "_",
//     "`",
//     "{",
//     "|",
//     "}",
//     "~",
//     "'",
//   ];
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (punctuationSigns.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(
//   getPunctuationNumber("Hello! How are you? I'm doing great. What's new?")
// );

//example 5

// const switchLetters = (str: string): string => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     let el = str.charCodeAt(i);

//     if (64 < el && el < 91) {
//       res += str[i].toLowerCase();
//     } else {
//       res += str[i].toUpperCase();
//     }
//   }
//   return res;
// };

// console.log(switchLetters("Abdulaziz Programmer"));

// example 6

// const changeObjToArr = (obj: object):string[] => {
//   let arr:string[] = []

//   for (let key in obj) {
//     arr.push(key + obj[key]);
//   }
//   return arr;
// };

// console.log(changeObjToArr({ a: 1, b: 2, c: 3 }));

// example 7

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// function seperateStudents(students:object[]) {
//   let grant:string[] = [];
//   let contract:string[] = [];
//   for(let i in students){
//     let el = students[i];
//     if(el['isGrant']){
//       grant.push(el['name'])
//     }
//     else{
//       contract.push(el['name'])
//     }
//   }
//   console.log("grant:",grant);
//   console.log("contract:",contract);
// }

// seperateStudents(students);

//exaple 8

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// const getTotalPages = (books:object[]):number => {
//   let count = 0;
//   for(let book of books){
//     if (book["isReadFinished"]) {
//       count += book["pages"];
//     }
//   }
//   return count
// };

// getTotalPages(books);

// example 9

// let obj = { a: 1, b: 2, c: 3 };

// interface Object {
//   keys(): string[];
// }
// Object.prototype.keys = (): string[] => {
//   return Object.keys(this);
// };

// console.log(obj.keys());





