let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);

let person = {
    name: 'John',
    age: 25,
  };
  
  let member = person;
  
  member.age = 26;
  
  console.log(person);
  console.log(member);