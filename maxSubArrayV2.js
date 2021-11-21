const maxSubArrayV2 = (nums) => {

    let max = undefined

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]

            if (max === undefined || sum > max) {
                max = sum
            }
        }
    }

    return max
}

let test1 = maxSubArrayV2([-2,1,-3,4,-1,2,1,-5,4])
console.log(test1, 6)

let test2 = maxSubArrayV2([1])
console.log(test2, 1)

let test3 = maxSubArrayV2([5, 4, -1, 7, 8])
console.log(test3, 23)

let test4 = maxSubArrayV2([-1, -2, -3])
console.log(test4, -1)