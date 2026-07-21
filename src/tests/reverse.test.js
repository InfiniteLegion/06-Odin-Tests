import { reverseString } from "../functions/reverse";

test('reverse string', () => {
  expect(reverseString('test')).toBe('tset');
  expect(reverseString('Star Wars')).toBe('sraW ratS');
  expect(reverseString('Obi-Wan Kenobi')).toBe('iboneK naW-ibO');
  expect(reverseString('Grand Master Darth Sidius')).toBe('suidiS htraD retsaM dnarG');
});