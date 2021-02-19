//Object
const person = {
    firstName: 'Rio',
    lastName: 'Lyn',
    age: 30,
    email: 'riolyngutierrezcastro23@gmail.com',
    hobbies : ['Eating', 'Singing', 'Dancing'],
    address: {
        city: 'Nueva ecija',
        street: 'Cabanatuan',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Vice Ganda', age: 23}, {name: 'Viceral', age: 60}, 
    {name: 'Cheng', age: 23}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
} 