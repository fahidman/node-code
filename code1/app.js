

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');
const yargs = require('yargs');
var command = yargs.argv._[0];
console.log(yargs.argv)



if(command === 'add'){
  notes.addNotes(yargs.argv.title,yargs.argv.body);
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'read'){
  notes.getNote(yargs.argv.title)
}else if(command === 'remove'){
  notes.removeNote(yargs.argv.title)
}else{
  console.log('Command not recognized')
}
