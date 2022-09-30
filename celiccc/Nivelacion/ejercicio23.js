var contacts = [
    {
        "firstname":"Akira",
        "lastname" :"Laine",
        "number":"84665239",
        "likes":["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstname":"Harry",
        "lastname" :"Potter",
        "number":"9863489",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname":"Sherlock",
        "lastname" :"Holmes",
        "number":"1238740",
        "likes":["Intriguing Cases", "Violin"]
    },
];
function lookUpProfile(name,prop){
    for(var i =0;i<contacts.length; i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop]||"No such property";

        }
    }
return "No such contact";
    
}
var data= lookUpProfile("Harry", "likes");
console.log(data);