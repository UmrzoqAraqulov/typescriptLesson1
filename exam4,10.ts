// example 1

// const getSum = (n: number): void => {
//   let res = 0;
//   for (let i = 1; i <= n; i++) {
//     res += i ** (i % 2 ? 1 : 2);
//     console.log(i % 2 ? 1 : 2, i);
//   }
//   console.log(res);
// };

// getSum(5);

// example 2

// let arr = ["Abdulaziz", "Murod", "Yulduz", "Abduga’ffor", "Jamila"];

// const getLongestWord = (arr:string []):string => {
//   let max = arr[0];

//   for(let i of arr){
//     if(i.length>max.length){
//       max = i;
//     }
//   }
//   return max
// };

// console.log(getLongestWord(arr));

// example 3

// let arr = [2, 5, 7, 10, 0, 18, 15];

// const getDividers = (arr:number[],n:number):number[] =>{
//   let res:number[]=[]
//   for(let i of arr){
//     if(i%5===0){
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(getDividers(arr,5));

// example 4
// let str = "Abdulaziz Programmer Is FullStack Developer";

// const checkWordCapitalize = (str:string):boolean=>{
//   let arr = str.split(" ");
//   for(let el of arr){
//     if(el[0]!==el[0].toUpperCase()){
//       return false
//     }
//   }
//   return true
// }

// console.log(checkWordCapitalize(str));

// example 5
// let str = "Abdulaziz Programmer";

// const getCharCountObj = (str:string):object =>{
//   let res:object = {};
//   for(let i of str){
//     if(Object.keys(res).includes(i)){
//       res[i]+=1;
//     }else{
//       res[i]=1;
//     }
//   }

//   return res
// }

// console.log(getCharCountObj(str));

// example 6

// let obj = { a: 1, b: 2, c: 3 };

// const changeObjToString = (obj: object): string => {
//   let res = "";
//   for (let i in obj) {
//     res += i + obj[i];
//   }
//   return res;
// };

// console.log(changeObjToString(obj));

// example 7

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const deleteProducts =(...rest:number[]) =>{
//   const products = [
//     { id: 1, name: "Bike", price: 100 },
//     { id: 2, name: "TV", price: 400 },
//     { id: 3, name: "Album", price: 800 },
//     { id: 4, name: "Book", price: 600 },
//     { id: 5, name: "Phone", price: 500 },
//     { id: 6, name: "Computer", price: 1000 },
//     { id: 7, name: "Skate", price: 300 },
//     { id: 8, name: "Keyboard", price: 200 },
//     { id: 9, name: "Bottle", price: 700 },
//   ];

//   let res:object[] = [];
//   for(let i in products){
//     if(!rest.includes(products[i]['id'])){
//       res.push(products[i]);
//     }
//   }
//   console.log(res);
// }

// deleteProducts(2,3);

// example 8

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const increaseProductPrice = (products: object[], id: number, n: number) => {
//   let res: object[] = [];
//   for (let i in products) {
//     if (id === products[i]["id"]) {
//       let el = products[i];
//       el["price"] *= 1.2;
//       res.push(el);
//     }
//     else{
//       res.push(products[i]);
//     }
//   }
//   return res;
// };

// increaseProductPrice(products, 6, 20);

// example 9

// let str = "Abdulaziz Programmer";
// let char = "a";

// String.prototype.count = (char: string) => {
//   let arr = this
//   arr = arr.split("");
//   let res = 0;
//   for (let el in arr) {
//     if (el === char) {
//       res++;
//     }
//   }
//   return res;
// };

// interface String {
//   count(char: string): number;
// }

// console.log(str.count(char));
