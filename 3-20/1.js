function binary(arrayOfNumbers, numberToLookFor) {

  // get middle item
  middleIndex = Math.floor(arrayOfNumbers.length / 2)
  middle = arrayOfNumbers[middleIndex]

  if (numberToLookFor === middle) console.log('found', middleIndex)
  else {
    if (numberToLookFor < middle) {
      newArrayOfNumbers = arrayOfNumbers.slice(0, middleIndex)
      binary(newArrayOfNumbers, numberToLookFor);
    } else {
      newArrayOfNumbers = arrayOfNumbers.slice(middleIndex + 1)
      binary(newArrayOfNumbers, numberToLookFor);
    }
  }
}

binary(
  [1,3,5,7,9],
  5
)

