var romanToInt = function(s) {
    
    let result = 0;
    let numArray = []
    for (let i = 0; i < s.length; i++) {
        let num = turnIntoNum(s[i])
        numArray.push(num)
    }
    
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < numArray[i + 1]) {
            result -= numArray[i]
        } else {
            result += numArray[i]
        }
    }
    
    return result;
    
};

var turnIntoNum = function(str) {
    if (str === 'I') {
        return 1
    } else if (str === 'V') {
        return 5
    } else if (str === 'X') {
        return 10
    } else if (str === 'L') {
        return 50
    } else if (str === 'C') {
        return 100
    } else if (str === 'D') {
        return 500
    } else {
        return 1000
    }
    
}

let test1 = romanToInt('III')
console.log(test1)

let test2 = romanToInt('MCMXCIV')
console.log(test2)

let test3 = romanToInt('IV')
console.log(test3)

let test4 = romanToInt('LVIII')
console.log(test4)

