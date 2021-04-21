var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++
        }
    }
    return count;
};

let test1 = numJewelsInStones("aA", "aAAbbbb")
console.log(test1)

let test2 = numJewelsInStones("z", "ZZ")
console.log(test2)

let test3 = numJewelsInStones("BMh", "BnuMMMhVV")
console.log(test3)