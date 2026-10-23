
/**
 * 
 * Enter a number (1-9): 9

9 × 1 = 9
9 × 2 = 18
9 × 3 = 27
9 × 4 = 36
9 × 5 = 45
9 × 6 = 54
9 × 7 = 63
9 × 8 = 72
9 × 9 = 81
 * 
 * 
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (1-9): ', (answer) => {

    let num = Number(answer);

    // TODO 1: Create a for loop from 1 to 9

    for (let i = ___; i <= ___; i++) {

        // TODO 2: Calculate the result
        let result = ___;

        // TODO 3: Print the multiplication table
        console.log(`${num} × ${i} = ${___}`);

    }

    rl.close();
});


