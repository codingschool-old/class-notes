low = 0;
high = 100;
finished = false;
cycles = 0;
while (finished === false) {
    cycles = cycles + 1;
    guess = Math.floor((low + high) / 2);
    result = compare(guess);
    if (result === 'same') {
        finished = true;
        console.log(guess);
        console.log(cycles);
    } else {
        if (result === 'bigger') {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
}
