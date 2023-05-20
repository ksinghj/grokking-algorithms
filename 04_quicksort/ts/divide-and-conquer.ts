// 4.1
function sum(arr: number[]): number | null {
  if (!arr.length) return null
  if (arr.length === 1) return arr[0]

  const copy = arr.slice()
  const firstRemoved = copy.shift()
  return arr[0] + sum(copy)
}

console.log(sum([1, 2, 3, 4, 4, 4, 4]))

// 4.2
function getLength(arr: unknown[]): number {
  if (!arr.length) return 0
  if (arr.length === 1) return 1

  const copy = arr.slice()
  const firstRemoved = copy.shift()
  return 1 + getLength(copy)
}

console.log(getLength([1, 2, 3, 4, 4, 4, 4]))

// 4.3 "Find the maximum number in a list" - assuming he meant highest..
function getHighestVal(arr: number[]): number | null {
  if (!arr.length) return null

  let highest = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i]
    }
  }

  return highest
}

console.log(getHighestVal([1, 2, 3, 4, 4, 7, 4]))

function getHighestValRecursive(arr: number[]): number | null {
  if (!arr.length) return 0
  if (arr.length === 1) return arr[0]

  const copy = arr.slice()
  const first = copy.shift()
  return first < getHighestVal(copy) ? getHighestVal(copy) : first
}

console.log(getHighestValRecursive([1, 2, 3, 4, 4, 7, 4]))

// 4.4
const binarySearchRecursive = <T>(list: T[], item: T): T | null => {
  let mid = Math.floor((0 + list.length - 1) / 2)
  let guess = list[mid]

  if (guess === item) {
    return guess
  }

  const halfLength = Math.ceil(list.length / 2)

  if (guess > item) {
    const firstHalf = list.slice().splice(0, halfLength)
    return binarySearchRecursive(firstHalf, item)
  } else {
    const secondHalf = list.slice().splice(halfLength, list.length - 1)
    return binarySearchRecursive(secondHalf, item)
  }
}

console.log(binarySearchRecursive(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'a'))
