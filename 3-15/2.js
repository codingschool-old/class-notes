numbers = [ 12, 45, 34, 96, 85 ]

// index = 0
// while(numbers.length > index) {
//   console.log(numbers[index])
//   index = index + 1
// }

for (index = 0; numbers.length > index; index = index + 1) {
  console.log(numbers[index])
}

function average(arrayOfNumbers) {
  total = 0
  for (index = 0; arrayOfNumbers.length > index; index = index + 1) {
    total = total + arrayOfNumbers[index];
  }
  result = total / arrayOfNumbers.length
  console.log(result)
}

average(numbers)
