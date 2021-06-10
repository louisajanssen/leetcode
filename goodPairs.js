// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i < j)) {
                counter++
                }
        }
    }
    return counter;
};

let test1 = numIdenticalPairs([1,2,3,1,1,3])
console.log(test1)

let test2 = numIdenticalPairs([1,1,1,1])
console.log(test2)

let test3 = numIdenticalPairs([1,2,3])
console.log(test3)