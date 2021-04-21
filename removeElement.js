var removeElement = function(nums, val) {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i,1)
        }
    }
    return nums.length
};

let test1 = removeElement([2, 3, 3], 3)
console.log(test1) // expect 1

let test2 = removeElement([0,1,2,2,3,0,4,2], 2)
console.log(test2) // expect 5

let test3 = removeElement([3], 3)
console.log(test3) // expect 0

let test4 = removeElement([3, 3, 3, 5, 7, 8, 9, 3], 3)
console.log(test4) // expect 4

let test5 = removeElement([2, 2, 2, 2, 2, 2], 2)
console.log(test5) // expect 0