'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Input: ', (arr) => {
	console.log('');
	console.log('Output: ', getDistinctsNum([2, 1, 1, 2, 3, 1]));
	// console.log('Output: ', getDistinctsNum(arr));	// Uncomment this if you want to input data via cmd
	console.log('');
	rl.close();
});

function getDistinctsNum (arr) {
	// Uncomment this is you want to input data via cmd
	/*if (arr) {
		arr = arr.split(',');
	}*/

	if (arr === 'undefined' || (toString.call(arr) !== '[object Array]') || arr.length === 0) {
		return 0;
	}

	var z = 0;
	while (z < arr.length) {
		if (!Number.isInteger(parseInt(arr[z], 10))) {
			return 0;
		}
		z++;
	}

	arr = arr.sort();
	var arrDistincts = [];

	var i = 0;
	var len = arr.length;

	while (i < len) {
		if (arr[i] !== arr[i+1]) {
			arrDistincts.push(arr[i]);
		}
		i++;
	}

	return arrDistincts.length;
}