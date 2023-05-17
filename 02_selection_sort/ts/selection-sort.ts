function findSmallestIndex<T>(arr: T[]): number {
  let smallestIndex = 0
  let smallestElement = arr[smallestIndex]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i]
      smallestIndex = i
    }

    return smallestIndex
  }
}

function selectionSort<T>(arr: T[]): T[] {
  const result: T[] = []
  const length = arr.length

  for (let i = 0; i < length; i++) {
    const smallest = findSmallestIndex(arr)
    result.push(arr.splice(smallest, 1)[0])
  }

  return result
}

console.log(selectionSort([1, 4, 1, 3, 5, 3, 55]))

function recursiveSelectionSort<T>(arr: T[]): T[] {
  if (!arr.length) return []
  let smallestElement = arr.splice(findSmallestIndex(arr), 1)
  return [...smallestElement, ...recursiveSelectionSort(arr)]
}

console.log(recursiveSelectionSort([1, 4, 1, 3, 5, 3, 55]))

function tailRecursiveSelectionSort<T>(arr: T[]) {
  function rec(array: T[], acc: T[]): T[] {
    if (!array.length) return acc

    let copy = array.slice()
    let smallestElement = copy.splice(findSmallestIndex(copy), 1)[0]

    return rec(copy, [...acc, smallestElement])
  }

  return rec(arr, [])
}

console.log(tailRecursiveSelectionSort([1, 4, 1, 3, 5, 3, 55]))
