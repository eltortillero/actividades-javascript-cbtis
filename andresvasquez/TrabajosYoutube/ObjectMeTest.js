let emptyObject = {};
let person = {
    firstName: 'Nicolas',
    lastName: 'Vasquez'
};

let contact = {
    firstName: 'Nicolas',
    lastName: 'Vasquez',
    email: 'ANVR2005@example.com',
    phone: '(633)-113-2464',
    address: {
        building: '625',
        street: 'Calle 6 y 7 ave 26',
        city: 'Agua Prieta',
        state: 'Sonora',
        country: 'Mexico'
    }
}

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact['phone']); 
console.log(contact['email']); 
console.log(contact.address);