console.log("Hello app.js");
const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes');


const titleOptions={
    describe:"Title of Note",
    demand:"true",
    alias:"t",
};
const bodyOptions={
    describe:"Body of Note",
    demand:"true",
    alias:"b"
};
// var yargsArgv=yargs.argv;
var yargsArgv=yargs.command('add','add a new note',{
    title:titleOptions,
    body:bodyOptions
})

.command("list","List All Notes")

.command("read","Reading the Note",{
title:titleOptions
})

.command("remove","Removing a Note",{
    title:titleOptions
})
.help().argv
console.log("Yargs",yargsArgv);

console.log(process.argv);
// var command=process.argv[2];
var command=yargsArgv._[0];
console.log(`Command ${command}`);

if(command==='add'){
    // console.log("Adding new note ")
    // console.log(yargsArgv.title,yargsArgv.body)
  var noteAdded=notes.addNote(yargsArgv.title,yargsArgv.body);

 if(noteAdded){   // i)if it return the note with different title b/c (note) return if ad ony if it has unique title
                  // ii)this "note" variable is returning from notes.js from "return note" statement
     console.log("Note Created");
     notes.logNote(noteAdded)
    //  console.log("------");
    //  console.log("Title " + noteAdded.title);
    //  console.log("Body " + noteAdded.body);

 }
 else{    //if it return the note with same title
     console.log("Note Title Already Exist");
 }


}
else if(command==='list'){
    // console.log("Listing all notes");
   var allNotes=notes.listNote(yargsArgv.title,yargsArgv.body);
   console.log("-----------------------------------------------");
   console.log(`Printing all notes ${allNotes.length} note(s)`);
   allNotes.forEach((noteAdded)=>{
       return notes.logNote(noteAdded)
   })
}
else if(command==='read'){
    // console.log("Reading all notes");
    //we are doing same thing like we do in 'remove' statement.
    var noteReaded= notes.readNote(yargsArgv.title);  // b/c we dont need body in this
    if(noteReaded){
        console.log("Note Readed");
        notes.logNote(noteReaded);
    }
    else{
        console.log("Note not found");
    }

    //    var message= noteReaded ? `Note readed ${noteReaded.title},${noteReaded.body}` : "Note not Found";
    //    console.log(message);
}
else if(command==='remove'){
    // console.log("removing all notes");
    // notes.removeNote(yargsArgv.title,yargsArgv.body);
 
     var noteRemoved = notes.removeNote(yargsArgv.title);
     var message = noteRemoved ? "Note is removed" : "Note is not found" ; 
     console.log(message); 
}
else{
    console.log("Command not recognized");
}

// console.log(_.isString(123));
// console.log(_.isString("Umar"));

// var filteredArray=_.uniq(["umar",1,false,true,"aslam",2,1,"nawab","umar"]);
// console.log(filteredArray);

// var res=notes.addNote();
// console.log(res);
// console.log(`Result is ${notes.add(8,2)}`);

// var user=os.userInfo();
// console.log(user);
// fs.appendFileSync('greetings.txt',` Hello ${user.username} and your age is ${notes.age} `);
