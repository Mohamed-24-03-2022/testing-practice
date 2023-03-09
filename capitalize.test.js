import { capitalize } from './capitalize'

it('should return first letter capitalized', () => {
  expect(capitalize('no')).toMatch(/^[A-Z][a-z0-9_-]/);
});
