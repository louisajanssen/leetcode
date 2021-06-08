var maximumWealth = function(accounts) {
    
    let maxWealth = 0;
    let maxArr = [];
    
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            maxWealth += accounts[i][j]
        }
        maxArr.push(maxWealth)
        maxWealth = 0;
    }
    let max = 0;
    
    for (let i = 0; i < maxArr.length; i++) {
        if (maxArr[i] > max) {
            max = maxArr[i]
        }
    }
    
    return max;
};

let test1 = maximumWealth([[1,2,3],[3,2,1]])
console.log(test1)

let test2 = maximumWealth([[1,5],[7,3],[3,5]])
console.log(test2)

let test3 = maximumWealth([[2,8,7],[7,1,3],[1,9,5]])
console.log(test3)
