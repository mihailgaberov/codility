'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Input: ', (arr) => {
    console.log('');
    console.log('Output: ', getEqui([-1, 3, -4, 5, 1, -6, 2, 1]));
    console.log('');
    rl.close();
});

function getEqui (arr) {
    if (!arr)
        return -1;
    
    var sum = 0;

    var i;
    var len = arr.length;

    for (i = 0; i < len; i++) {
        sum += arr[i];
    }

    var sumLeft = 0;

    for (i = 0; i < len; i++) {
        var sumRight = sum - sumLeft - arr[i];
        if (sumLeft === sumRight)
            return i;

        sumLeft += arr[i];

    }

    return -1;
}