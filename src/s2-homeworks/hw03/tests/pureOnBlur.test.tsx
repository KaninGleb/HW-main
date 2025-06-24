import {pureOnBlur} from '../GreetingContainer'

let name: any
let error: any
const setError = (a: any) => {
    error = a
}

beforeEach(() => {
    name = ''
    error = ''
})

test('name 1', () => {
    name = '1'
    pureOnBlur(name, setError)
    expect(error).toBe('')
})

test('name 2', () => {
    name = ''
    pureOnBlur(name, setError)
    expect(error).toBe('Mistake! Enter a name!')
})

test('name 3', () => {
    name = '    '
    pureOnBlur(name, setError)
    expect(error).toBe('Mistake! Enter a name!')
})
