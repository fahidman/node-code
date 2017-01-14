const fs = require('fs');

var addNotes = (title,body)=>{

var notes =[];
var note ={
  title,
  body
}
try{
  var notesString = fs.readFileSync('notes-data.json')
  notes = JSON.parse(notesString);
}catch(e){

}
var duplicateNotes = notes.filter((note)=> note.title === title);
if(duplicateNotes.length === 0){
  notes.push(note);
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))
  console.log(note);
}

}

var getAll = ()=>{
  console.log("Getting ALl the notes")
}

var getNote = (title)=>{
  note = {
    title
  }
  console.log(`\"${title}\" note is read`)
}

var removeNote = (title)=>{
  note = {
    title
  }
  console.log(`${title} is removed`)
}

module.exports = {
getAll,
addNotes,
getNote,
removeNote
}
