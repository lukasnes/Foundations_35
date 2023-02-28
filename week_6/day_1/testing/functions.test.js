const { add, multiply, divide, subtract } = require('./functions')

describe('Calculator tests', () => {
    describe('add', () => {
        test('addition works', () => {
            expect(add(1,2)).toEqual(3)
        })
        test('returns a number', () => {
            expect(typeof add(2,3)).toEqual('number')
        })
    })

    describe('multiply', () => {
        test('multiplication works', () => {
            expect(multiply(3,4)).toEqual(12)
        })
        test('did not receive enough arguments', () => {
            expect(multiply(3)).toBeNaN()
        })
    })

    describe('divide', () => {
        test('division works', () => {
            expect(divide(9,3)).toEqual(3)
        })
    })

    describe('subtract', () => {
        test('subtraction works', () => {
            expect(subtract(4,2)).toEqual(2)
        })
    })
}) 