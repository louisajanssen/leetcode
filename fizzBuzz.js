var fizzBuzz = function(n) {
    let newArr = []
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("FizzBuzz")
        } else if (i % 5 === 0) {
            newArr.push('Buzz')
        } else if (i % 3 === 0) {
            newArr.push("Fizz")
        } else {
            let string = JSON.stringify(i)
            newArr.push(string)
        }
    }
    return newArr;
};

let test1 = fizzBuzz(15)
console.log(test1)
let test2 = fizzBuzz(100)
console.log(test2)