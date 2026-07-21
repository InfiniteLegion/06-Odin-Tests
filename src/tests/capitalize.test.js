import { capitalize } from "../functions/capitalize.js";

test('capitalize', () => {
  expect(capitalize('simCity')).toBe('Simcity');
  expect(capitalize('SIMON')).toBe('Simon');
  expect(capitalize('negative')).toBe('Negative');
  expect(capitalize('pOSITIVE')).toBe('Positive');
});
