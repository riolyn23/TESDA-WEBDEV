let val;

const today = new Date();
let birthday = new Date('03-20-1990');
birthday = new Date('March 20, 1990');
birthday = new Date('03/20/1990');
console.log(birthday);

val = today.getMonth();
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

val = today.getTime();
console.log(val);

birthday.setMonth(11);
console.log(birthday);

birthday.setDate(30);
console.log(birthday);

birthday.setFullYear(1450);
console.log(birthday);

birthday.setHours(6);
console.log(birthday);

birthday.setSeconds(20);
console.log(birthday);