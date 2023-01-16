let generator = require('generate-password');

let passwords = generator.generateMultiple(3, {
	length: 10,
    uppercase: true,
    symbols: true,
    lowercase: true
});


console.log(passwords);