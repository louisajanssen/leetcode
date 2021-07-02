// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    
    let end = nums.length -1
    let start = 0
    
    if (target > nums[end]) {
        return end + 1
    }

    if (target < nums[start]) {
        return 0
    }
    
    if (target === nums[end]) {
        return end
    }
    if (target === nums[0]) {
        return 0
    }
    
    
    while (start + 1 < end) {
        let middle = Math.floor((start + end)/2)
        
        if (target === nums[middle]) {
            return middle
        }
        if (target > nums[middle]) {
            start = middle
        } else {
            end = middle
        }
        
    }
    
    if (target > nums[start] && target < nums[end]) {
        return end
    }

};
let test1 = searchInsert([1,3,5,6], 6)
console.log(test1)

let test2 = searchInsert([1,3,5,6], 0)
console.log(test2)

let test3 = searchInsert([1,3,5,6], 7)
console.log(test3)
