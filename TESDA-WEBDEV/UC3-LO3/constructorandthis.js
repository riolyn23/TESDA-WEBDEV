//Object literal
// const person = {
//     name: 'nicko'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'Kicks'
// };

// const kicks = new Person();

// console.log(kicks);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const cardo = new Person('Cardo', 28);
// const dalisay = new Person('Dalisay', 25);

// console.log(cardo);
// console.log(dalisay);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const nicko = new Person('Rio', '03/20/90');
const kicks = new Person('kid', '01/20/92');

console.log(rio);
console.log(kid;
console.log(rio.calculateAge());
console.log(kid.calculateAge());