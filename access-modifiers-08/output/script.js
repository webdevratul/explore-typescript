"use strict";
// player er akta class jar akta contructor ache jekhane se value receaive korbe and type gula bole doea ache
class player {
    // public amra je kono jayga theke access korte parbo, private only class er vitor theke access korte parbo, readonly class er baire theke read kora jabe but value change kora jabe nah
    // When a member is marked as protected, it behaves similarly to private, but with an additional capability: it can also be accessed within derived classes (classes that inherit from the base class). This means that subclasses can access the protected member
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing age ${this.age}`);
    }
}
const skib = new player("sakib", 34, "BD");
