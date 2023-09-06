const fs = require('fs')

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    symbols:true,
    strict: true
});

console.log(password)