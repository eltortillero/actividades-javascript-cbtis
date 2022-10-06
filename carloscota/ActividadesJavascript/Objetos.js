//objeto vacio
let emptyObject = {};
//objeto
let person = {
    firstName: 'Carlos',
    lastName: 'Cota'
};
//objeto con un objeto dentro
let contact = {
    firstName: 'Carlos',
    lastName: 'Cota',
    email: 'cotafu@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
//usa "contact" para ver las propiedades del objeto
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'