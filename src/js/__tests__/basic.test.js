import Daemon from '../daemon';
import Magician from '../magician';

test('attack, dist = 1, stone = false ', () => {
  const expected = 100;
  const pers = new Magician('Mag');
  pers.distance = 1;
  const received = pers.attack;
  expect(received).toBe(expected);
});

test('attack, dist = 3, stone = false ', () => {
  const expected = 80;
  const pers = new Daemon('Chert');
  pers.distance = 3;
  const received = pers.attack;
  expect(received).toBe(expected);
});

test('attack, dist = 1, stone = true ', () => {
  const expected = 100;
  const pers = new Magician('Mag');
  pers.stoned = true;
  pers.distance = 1;
  const received = pers.attack;
  expect(received).toBe(expected);
});

test('attack, dist = 5, stone = true ', () => {
  const expected = 48;
  const pers = new Daemon('Chert');
  pers.stoned = true;
  pers.distance = 5;
  const received = pers.attack;
  expect(received).toBe(expected);
});
