const stringSearch = (str1, str2) => {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str2[j] !== str1[i+j]) {
                break;
            }
            if (str2.length - 1 === j) {
                count++
            }
        }
    }
    return count
}

let test1 = stringSearch('wowomgzomg', 'omg')
console.log(test1, 2)
let test2 = stringSearch('helloimmiko', 'loi')
console.log(test2, 1)
let test3 = stringSearch('lorie loled', 'abc')
console.log(test3, 0)