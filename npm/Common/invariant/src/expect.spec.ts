import { toBeInstanceOf } from './expect'

test('expect', () => {
    toBeInstanceOf(new Error('testing'), Error);
})