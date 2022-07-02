import fs from 'fs';

let j = '';
let s = '';
let result = 0;

let input = fs.readFileSync('input.txt', 'utf-8', function(err, fileContent) {
    if(err) throw err;
});

[j, s] = input.split("\r");

Array.from(s).forEach(item => j.includes(item) ? result++ : item);

fs.open('output.txt', 'w', function(err) {
    if(err) throw err;
});
fs.writeFileSync('output.txt', `${result}`, function(err) {
    if(err) throw err;
});



