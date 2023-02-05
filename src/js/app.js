/* eslint-disable no-underscore-dangle */

export default class Char {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.stoned = false;
    this.attack = 100;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (value) {
      this._stoned = true;
    }
  }

  get attack() {
    let attack = (this._attack - 10 * (this.distance - 1));

    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(attack);
  }

  set attack(val) {
    this._attack = val;
    return this.attack;
  }
}
