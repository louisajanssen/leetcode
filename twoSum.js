var twoSumV1 = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        const lookingFor = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === lookingFor) {
                return [i, j]
            }
        }
    }
};

const twoSum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    for (let i = 0; i < nums.length; i++) {
        const lookingFor = target - nums[i]
        const num = map.get(lookingFor)

        if (num !== undefined && i !== num) {
            return [i, num]
        }
    }
    return [-1, -1];
}

// time complexity: O(m+m)
// space complexity: O(m)

let test1 = twoSum([2,7,11,15], 9)
console.log(test1, [0,1]) // expect [0, 1]

let test2 = twoSum([2,3,4], 6)
console.log(test2, [0,2]) // expect [0, 2]

let test3 = twoSum([1,2,6,8], 8)
console.log(test3, [1,2]) // expect [1, 2]

let test4= twoSum([1,2], 4)
console.log(test4, [-1,-1]) // expect [-1, -1]

let test5 = twoSum([2,2], 4)
console.log(test5, [0,1]) // expect [0, 1]

