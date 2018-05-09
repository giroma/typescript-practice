var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + 'is registered');
    };
    return User;
}());
var john = new User('jababa', 'fhdhf@hsd.com', 35);
console.log(john.age);
