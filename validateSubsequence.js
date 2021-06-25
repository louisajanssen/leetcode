// Given two non-empty arrays of integers, write a fucntion that determines whether the second array is a subsequence of the first one

function isValidSubsequence(array, sequence) {
      
      let resultArray = []
      let index = 0
      for (let i = 0; i < array.length; i++) {
          if (array[i] === sequence[index]) {
              resultArray.push(true)
              index++
          } else {
              continue
          }
      }
       if (resultArray.length === sequence.length) {
           return true
       } else {
           return false
       }
  }

  let test1 = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
  console.log(test1, true)

  let test2 = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10])
  console.log(test2, false)