// ES5 importing/exporting (old)

// const thirdFunction = () => {
//     console.log('third function')
//   }
  
//   exports.thirdFunction = thirdFunction

/* ************************************************ */

const thirdFunction = () => {
    console.log('this is third function')
}

export default thirdFunction

/* ************************************************ */

export function fourthFunction(){
    console.log('this is fourth function')
}

