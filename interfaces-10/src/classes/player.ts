import { IsPlayer } from "../interfaces/isPlayer.js";

// implements interface
export class player implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  // amra interface a private use korte chaile
  getAge() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing age ${this.age}`);
  }
}
