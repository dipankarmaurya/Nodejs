import chalk from "chalk";
import validator from "validator";
import yargs from "yargs";
import notes from "./notes.js";

// add command for adding notes
yargs.command({
  command: "add",
  describe: "add new notes",
  builder: {
    title: {
      describe: "notes title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//remove commands
yargs.command({
  command: "remove",
  describe: "removing note",
  builder: {
    title: {
      describe: "removing notes",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//read commands
yargs.command({
  command: "read",
  describe: "reading a note",
  handler(){
    console.log("read a  notes");
  },
});

//list commands
yargs.command({
  command: "list",
  describe: "show all notes",
  handler(){
    console.log("showing   notes");
  },
});

yargs.parse();

// let msg = getNotes();
// // taking user input
// let command = process.argv[2];

// if (command === 'add') {
//     console.log(msg+" successfully added to list")
// }
// else if(command==='remove'){
//     console.log(msg+"successfully remove to list")
// }

// // const msg = getNotes();
// // console.log(msg);

// //validating email using email validator

// let isValidEmail = validator.isEmail('dipankarmaurya5855@gmail.com');
// // using chalk method if email is valid print in green else in red
// if (isValidEmail) {
//    console.log( chalk.inverse.red('error'));
// }
// else {
//     console.log( chalk.red(isValidEmail));
// }

// // method to check if url is valid or not
// // isURL();

// // const fs = require('fs');

// // // override what ever written in notes.txt file -->nots.txt not exit  it creates notes.txt and write the msg
// // //  fs.writeFileSync('notes.txt', 'this text file is created by node js');

// // // added some extra text in notes.txt;
// // // fs.appendFileSync('notes.txt', "\nhello, how are you?");

// // // require file from another file

// const sum = require('./utility');
// console.log(sum(4,-2))

// //
// console.log('i am fromapp.js')
