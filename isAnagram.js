// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false
  }
  const map = new Map()
  for (const element of s) {
      const exists = map.get(element)
      
      if (exists === undefined) {
          map.set(element, 1)
      } else {
          map.set(element, exists + 1)
      }
  }

  for (const element of t) {
      const foundLetter = map.get(element)

      if (foundLetter === undefined) {
          return false
      } else {
          map.set(element, foundLetter - 1)
      }
  }

  for (let [key, value] of map) {
      if (value !== 0) {
          return false
      }
  }
  return true
};

const test1 = isAnagram("anagram", "nagaram")
console.log(test1)

const test2 = isAnagram("rat", "car")
console.log(test2)