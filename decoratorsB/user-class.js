function readonly(target) {
    console.log('target', target);
    target.descriptor.writable = false;
    return target;
}

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @readonly
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Object.defineProperty(User.prototype, 'getFullName', {
//     writable: false
// });

// create instance
let user = new User('John', 'Doe');

console.log(Object.getOwnPropertyDescriptor(User.prototype, 'getFullName'));

// User.prototype.getFullName = function() {
//     return 'HACKED!';
// }


//print full name
console.log(user.getFullName());