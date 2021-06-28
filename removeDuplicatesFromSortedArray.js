//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Return k after placing the final result in the first k slots of nums.

var removeDuplicates = function(nums) {
    
    let i = 0
    while ( i < nums.length -1) {
        let j = i+1
        
        if (nums[i] === nums[j]) {
            nums.splice(j, 1)
        } else {
            i++
        }
    }
    
    
    return nums.length
};

let test1 = removeDuplicates([1, 1, 2])
console.log(test1)

let test2 = removeDuplicates([0, 0, 0, 0])
console.log(test2)