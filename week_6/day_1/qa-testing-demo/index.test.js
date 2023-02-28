 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

const { buildTower } = require('../tower')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

let arr = [1,2,3]
let arrTwo = [1,2,3]

describe('Testing formatTitle function', () => {
  test('Returns a String', () => {
    expect(typeof formatTitle(testData.title)).toBe('string')
  })

  test('Returns a Capitalized String', () => {
    expect(formatTitle(testData.title)).toEqual('Nulla Ac')
  })

})

describe('To be an array or not to be an array', () => {
  test('Is array 1 array 2?', () => {
    expect(arr).toBe(arrTwo)
  })

  test('Does array 1 equal array 2?', () => {
    expect(arr).toEqual(arrTwo)
  })
})

describe('Testing shortenBio function', () => {
  let shortBio = shortenBio(testData.bio)
  test('Does function shorten string?', () => {
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })
  test('Does shortened bio include "..."', () => {
    expect(shortBio).toContain('...')
  })
})
 
describe('Testing convertLength function', () => {
  test('Function returns an array of length 2', () => {
    expect(convertLength(testData.length)).toHaveLength(2)
  })
  test('Function converts minutes into array', () => {
    expect(convertLength(200)).toEqual([3,20])
  })
  test('Function can handle less than 60 minutes', () => {
    expect(convertLength(45)).toEqual([0,45])
  })
})

test('Tower Function returns a tower', () => {
  expect(buildTower(3)).toEqual(['  *  ',' *** ','*****'])
})