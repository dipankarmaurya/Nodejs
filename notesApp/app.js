
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);


























// const fs = require('fs');

// // override what ever written in notes.txt file -->nots.txt not exit  it creates notes.txt and write the msg
// //  fs.writeFileSync('notes.txt', 'this text file is created by node js');

// // added some extra text in notes.txt;
// // fs.appendFileSync('notes.txt', "\nhello, how are you?");


// // require file from another file

// const sum = require('./utility');
// console.log(sum(4,-2))


// // 
// console.log('i am fromapp.js')