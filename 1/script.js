const f = (num1, num2) => num1 + num2 === 100 || num1 === 100 || num2 === 100;
console.log(f(10, 90)); // true

const extention = function (str) {
  return str.slice(str.lastIndexOf("."));
};
console.log(extention("index.html")); // .html

const nextletter = function (str) {
  return str
    .split("")
    .map((char) =>
      char === " " ? char : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join("");
};
console.log(nextletter("Hello world")); // Ifmmp xpsme

const date = function () {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
console.log(date()); // 1/1/2021

const addToString = (str) =>
  str.lastIndexOf("New!") === 0 ? str : `New! ${str}`;

console.log(addToString("New! Hello")); // New! Hello
console.log(addToString("Hello")); // New! Hello
