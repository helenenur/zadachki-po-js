//   //My name is Severa Sulaimanova

// function nameIs(name) {
//   console.log("my name is " + name);
// }
// function surnameIs(name) {
//   console.log("my surname is " + name);
// }

// nameIs("Severa");
// surnameIs("Sulaimanova");

// 2//functionName(height, radius)
// function getConeVolume(h, r) {
//   let V = 0
//   let pi = 3.14
//   console.log( V = (h * pi * (r ** 2) / 3));
// }
// getConeVolume(10., 5);

// 3// Длина строки равна ...

// function strLength(text) {
//   console.log(text.length)
// }
// strLength("This is another")

// 4// functionName(num) // Число - четное || Число - нечетное
// function isEven(num){
//   if(num % 2 === 0){
//     console.log("even - " + num)
//   }
//   else if(num % 2 === 1){
//     console.log("odd - " + num)
//   }
//   else{
//     console.log("error - " + num)
//   }
// }
// isEven(2)
// isEven(5)
// isEven("gfhgf")

// // positive(num) // проверка на положительное число (true || false)
// function isPositive(num) {
//   return num >= 0;
// }

// // вернуть положительное число
// function toPositive(num) {
//   if (num >= 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }

// //5 квадрат числа
// function square(num){
//   return num ** 2
// }
// console.log(square(5))

// // 6// functionName(num) // Корень этого числа равен
// function root(a) {
//   return Math.sqrt(a)
// }
// console.log(root(25))
// // // 7  functionName(a, b, c, d, e) // Периметр - ...
// function triangle(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// console.log(triangle(5,3,6,9,5))

// // 8// 0 3 6 9 ...

// for ( i = 0; i < 35; i +=3) {
//   console.log(i);
// }

 //9 ...


// // 10/ 1 4 9 ...
// function numSquer(n) {
//   let x = ' ';
//   let  y  = 0;
//   for (let i =1; i <= n; i++) {
//       y  += (2 * i - 1);
//       x += y + ' ' ;
//   }
//   return x;
// }
// console.log(numSquer(3));


11// ...
let num = 1;
 while (num <= 25){
  console.log(num);
  num++;
 }

 // 12
// for (let i =2; i <= 20; i ++) {
//   if (i %  2 == 0){
//     console.log(i)
//   }
// }

 // 1 3 ...
// for (let i = 1; i < 15; i+=1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


//14

// //15
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// 17
// let phrase = ["I", "like","to", "eat"];
// console.log(phrase. join( ));

// 18// ["three", "two", "one"]
// let numer = ["one",  "two" , "three"];
// for (let i = 0; i <numer.length; i ++){
//   console.log("Hello, they are " + numer[i] + ".Excellent .");
// }

// for (let i = numer.length - 1; i>=0; i--) {
//   console.log("Hello,they are" + numer[i] + ".Excellent.");
// }

//19
// let trainer = ["Ermek"];
// for (let i = 0; i < trainer.length; i++) {
//   console.log("Hello" + trainer[i]);
// }

// let volunter = ["Erlan"];
// for (let i = 0; i < volunter.length; i++) {
//   console.log("Hello" + volunter[i]);
// }

// let mentor = ["Erjan"];
// for (let i = 0; i < mentor.length; i++) {
//   console.log("Hello" + mentor[i]);
// }

// // 4, 9,16, 25
// let elem = [2, 3, 4, 5];
// for (let i  in elem) {
//       elem[i] = elem[i] ** 2;
// }

// console.log(elem);

// //21
// // cat - true
// // parrot - false
// let animals =  ["cat", "dog", "snake"] ;
// console.log(animals.indexOf('cat') != -1);
// console.log(animals.includes('parrot'));