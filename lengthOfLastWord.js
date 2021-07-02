// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    
    let array = s.split(' ')
    
    for (let i = array.length -1; i >= 0; i--) {
        if (array[i] !== '') {
            return array[i].length
        }
    }
    
    return 0

};

let test1 = lengthOfLastWord('Hello World')
console.log(test1, 5)

let test2 = lengthOfLastWord('a ')
console.log(test2, 1)

let test3 = lengthOfLastWord('       ')
console.log(test3, 0)