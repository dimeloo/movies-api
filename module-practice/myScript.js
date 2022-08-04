// Need to export function in order to use in another file
// module.exports will only export the last function
// module.exports = function [function name]

function mikesScript() {
  console.log("Here is Mike's script")
  console.log('module from myscript', module)
}

// Module with arrow function
// This function will export since it's the last function
const secondFunction = () => {
  console.log('here is my second function')
}

// Export both functions
//module.exports = { mikesScript, secondFunction}

/* ************************************************** */

const car = {
  make: 'GMC',
  color: 'Metallic Blue',
  year: 2016,
  engine: 6.4,
  gassHogger: true,
}

// const thirdFunction = () => {
//   console.log('third function')
// }

// exports.thirdFunction = thirdFunction

module.exports = { mikesScript, secondFunction, car }
