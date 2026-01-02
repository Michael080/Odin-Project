const add = (i, num) => {
  return i + num //16
}

const subtract = (i, num) => {
  return i - num //12
}

const divide = (i, num) => {
  return i / num //4
}

const multiple = (i, num) => {
  return i * num //8
}

// EXAMPLE
// w/out chaining
let x = 10
const a = add(x, 6)
const b = subtract(a, 4)
const c = divide(b, 3)
const res = multiple(c, 2)

console.log(res)

// EXAMPLE
// w/ chaining

