"use strict";
// player er akta class jar akta contructor ache jekhane se value receaive korbe and type gula bole doea ache
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const sakib = new player("Sakib", 38, "BD");
const tamim = new player("tamim", 39, "BD");
sakib.play();
tamim.play();
// and oi player class take amra akta type hisebe use korte pari
const players = [];
// akhn ai array er vitore amra kono value dite chaile amader ai player namok class er under a thaka kono object ke dite hobe out of the box kono value se receaive korbe nah
players.push(tamim);
console.log(players);
