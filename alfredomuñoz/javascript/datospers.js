let emptyObject = {};
let person = {
    firstName: 'Alfredo',
    lastName: 'Muñoz'
};

let contact = {
    firstName: 'Alfredo',
    lastName: 'Muñoz',
    email: 'fofitomn@gmail.com',
    phone: '633 350 4728',
    address: {
        building: '3507',
        street: 'Calle 26 Ave 35 y 37',
        city: 'Agua Prieta',
        state: 'Sonora',
        country: 'Mexico'
    }
}

console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact['phone']); 
console.log(contact['email']); 
console.log(contact.address)