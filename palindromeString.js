const isStringPalindrome = (string) => {

    if (string === '') {
        return true
    }
    if (string.length === 1) {
        return true
    }


    let start = 0
    let end = string.length - 1
    

    for (let i = 0; i < string.length; i++) {

        if (string[start] !== string[end]) {
            return false
        } else {
            start++
            end--
        }
    }

    return true
}

const test1 = isStringPalindrome('abccba')
console.log(test1, true)

const test2 = isStringPalindrome('mnomno')
console.log(test2, false)

const test3 = isStringPalindrome('ana')
console.log(test3, true)

const test4 = isStringPalindrome('miko')
console.log(test4, false)

const test5 = isStringPalindrome('m')
console.log(test5, true)

const test6 = isStringPalindrome('')
console.log(test6, true)