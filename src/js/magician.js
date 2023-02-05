import Char from './app';

export default class Magician extends Char {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
  }
}
