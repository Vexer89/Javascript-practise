const threeChars = (str) =>
  str.length >= 3 ? `${str.slice(0, 3)}${str.slice(str.length - 3)}` : str;
console.log(threeChars("123456789")); // 123789
console.log(threeChars("123")); // 123123
console.log(threeChars("12")); // 12

const halfOfString = (str) => str.slice(0, Math.ceil(str.length / 2));
console.log(halfOfString("Hello World")); // Hello
console.log(halfOfString("Hello!")); // Hel

const combineTwoStrings = (str1, str2) => `${str1.slice(1)}${str2.slice(1)}`;
console.log(combineTwoStrings("Hello", "World")); // elloorld

const nearestTo100 = (num1, num2) =>
  Math.abs(num1 - 100) < Math.abs(num2 - 100) ? num1 : num2;
console.log(nearestTo100(90, 80)); // 90
console.log(nearestTo100(90, 120)); // 90

const twoOrFourChars = (str, char) =>
  str.split("").filter((c) => c === char).length === 2 ||
  str.split("").filter((c) => c === char).length === 4;
console.log(twoOrFourChars("Hlellol", "l")); // true
console.log(twoOrFourChars("Hlellol", "e")); // false
console.log(twoOrFourChars("Hlellol", "H")); // false
console.log(twoOrFourChars("Hloellol", "o")); // true
