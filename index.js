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

// 6// functionName(num) // Корень этого числа равен
function root(a) {
  return Math.sqrt(a)
}
console.log(root(25))
// // // 7  functionName(a, b, c, d, e) // Периметр - ...
// function triangle(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// console.log(triangle(5,3,6,9,5))

// // 8// 0 3 6 9 ...
// let number = 33;
// for (let i =0; i < 33; i++) {
//   console.log(number)
// }

// 9// ...

// function factorial(n) {
//   return 8 != 1 ? n * factorial(n - 1) : 1;
// }

// alert(factorial(8));

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// alert(factorial(8));

// 10// 1 4 9 ...
// for (let i = 0; i>=10; i++) {
//   console.log("1,4,9");
// }

// 11// ...
// let numb = 1;
// while (num <= 25) {
//   console.log(num);
//   num++;
// }

// 12// 0 2 4
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// 13// 1 3 ...
// for (let i = 0; i <= 15; i--) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }


// var alpha = ['a', 'b', ];

// var alphaNumeric = alpha.concat(1, [2, 3]);

// console.log(alphaNumeric); // Результат: ['a', 'b', 1, 2, 3]

// 14for i:=1 to n do
// begin
// if not odd(arr[i]) then
// inc(sum,arr[i]);
// if arr[i]>x then
// inc(kol);
// end;

// {
// int[] myArray = [2, 3, 4, 99, 49, 64, 77, 4, 42, 5];
// int result = 0;
// for (int i =0; i < myArray.length; i++)
       
// {
//   if (myArray[i] % 2 ==0)
//   {
//     result += myArray[i];
    
//   }
// }
// Console.WriteLine(result);
// Console.ReadLine( );
// }

// let phrase = ["I", "like", "to", "eat"];
// let resulte = 0;
// for (let i = 0; i < phrase.length; i++) {
//   result = result + phrase [i].length;
// }
// console.log(result.length);

// 15// ["three", "two", "one"]
// let number = ["one, two", "three"];
// let result  = 0;
// for (let i = names.length - 1; i>=0; i--) {
//   console.log("three" + number[i] + ".one.");
// }

// 16// 4 9 16 25
// let arr = [2, 3, 4, 5];
// for (let elem of arr) {
//       elem = elem ** 2;
// }

// console.log(arr);

// 16// cat - true
// // parrot - false
// const pets = ["cat", "dog", "snake"];
// let login = "pets";

// if (login === "pets" && parrot === "All the pets") {
//   console.log("Correct");
// }
// else {
//   console.log("Incorrect");
// }

