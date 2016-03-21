function binary(arrayOfNumbers, numberToLookFor, offset) {

  // get middle item
  middleIndex = Math.floor(arrayOfNumbers.length / 2)
  middle = arrayOfNumbers[middleIndex]

  if (numberToLookFor === middle) console.log('found', middleIndex + offset)
  else {
    if (numberToLookFor < middle) {
      newArrayOfNumbers = arrayOfNumbers.slice(0, middleIndex)
      binary(newArrayOfNumbers, numberToLookFor, offset);
    } else {
      newArrayOfNumbers = arrayOfNumbers.slice(middleIndex + 1)
      binary(newArrayOfNumbers, numberToLookFor, offset + middleIndex + 1);
    }
  }
}

binary(
  [1,3,5,7,9],
  3,
  0
)

