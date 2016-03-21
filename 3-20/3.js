function binary(arrayOfNumbers, numberToLookFor, offset) {
  console.log('calling binary')

  middleIndex = Math.floor(arrayOfNumbers.length / 2)
  middle = arrayOfNumbers[middleIndex]

  if (arrayOfNumbers.length === 0) console.log('not found')
  else if (numberToLookFor === middle) console.log('found', middleIndex + offset)
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

numbers = Array.apply(null, Array(1000)).map(() => Math.floor(Math.random() * 1000)).sort();
console.log(numbers)
binary(
  numbers,
  250,
  0
)

