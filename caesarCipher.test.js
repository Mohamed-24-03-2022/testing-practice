import { caesarCipher } from './caesarCipher';

it('should shift the string by number of the key provided', () => {
  expect(caesarCipher('AB', 2)).toBe('cd');
  expect(caesarCipher('attack, at dawn', 1)).toBe('buubdl, bu ebxo');
  expect(caesarCipher('zyzz is the god father of athestic.', 1)).toBe(
    'azaa jt uif hpe gbuifs pg buiftujd.'
  );
  expect(caesarCipher('zyzz is the god father of athestic', 6)).toBe(
    'feff oy znk muj lgznkx ul gznkyzoi'
  );
});
