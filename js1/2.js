/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 * When the returned function is called,
 *   it will return whatever the input function returns
 * When the returned function is called input number of times,
 *   it will return null
 * @param {number} num
 * @param {function} fun
 * @returns {function}
 */

const solution = (num, fun) => {
  temp = 0

  return () => {
    // returns null if the temporary value reaches the number's value
    if(temp >= num){
      return null
    }
    // increments the temporary value until the number's value is reached; calls the closure 'num' times
    else{
        temp += 1 
        return fun()
    }
    
  }

}

module.exports = {
  solution
}
