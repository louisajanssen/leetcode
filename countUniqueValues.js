// Accepts sorted array, and counts the unique values in the array

function countUniqueValues(array){
    
    let left = 0
    let right = 1
    let count = 0
    
    while (right <= array.length ) {
        if (array[left] !== array[right]) {
            right++
            left = right - 1
            count++
        } else {
            right++
        }
    }
    
    return count;
  }

  const test1 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
  console.log(test1)

  const test2 = countUniqueValues([])
  console.log(test2)

  const test3 = countUniqueValues([-2, -1, 2, 3, 3, 4, 5])
  console.log(test3)