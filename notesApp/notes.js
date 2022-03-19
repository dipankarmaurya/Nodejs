import fs from "fs";
import chalk from "chalk";

let getAllNotes=()=> {
  let notes = loadNotes();
}
let addNotes=(title, body)=> {
  let notes = loadNotes();
  let duplicatesNotes = notes.filter((note) => {
    return title === note.title;
  });
  if (duplicatesNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.yellow("notes added"));
  } else {
    console.log(chalk.red.inverse("you can not add duplicate title"));
  }
}
let saveNotes=(notes)=> {
  let notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
}

let removeNotes=(title)=> {
    let notes = loadNotes();
    let updatedNotes = notes.filter((note)=>{
        return note.title !== title;
    })
  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse('no note found of this title'))
  }
  else {
    saveNotes(updatedNotes);
    console.log(chalk.green(`${title} removed successfully`))
  }
  
}

let loadNotes=() =>{
  try {
    let dataBuffer = fs.readFileSync("notes.json");
    let dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
}
export default {
  getAllNotes,
    addNotes,
  removeNotes
};
