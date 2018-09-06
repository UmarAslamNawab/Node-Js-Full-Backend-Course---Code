console.log("notes.js");
// console.log(module);
// module.exports.addNote=() =>{
//     console.log("add Note");
//     return 'new Note';
// }

// module.exports.add=(a,b)=>{
// return a+b;
// }

var fs=require('fs');

var fetchNotes = () => {
    try {
      var notesStr = fs.readFileSync('notes-data.json'); //if it fails no problem
      return JSON.parse(notesStr); // b/c notes already an empty[] it 1st line fails
    } catch (error) {
      return []; // run if and only if (try) command throughs an error 
    }
  };
  
  var saveNotes = (notes) => {
    var notesString=JSON.stringify(notes);
    fs.writeFileSync('notes-data.json', notesString);
  };
  



var addNote=(title,body)=>{
    // console.log("Adding Note",title,body);
    var notes=fetchNotes();
    // var notes=[];
    var note={
        title,
        body
        //ES6
    }
 
// try{
//     var notesStr=fs.readFileSync('notes-data.json'); //if it fails no problem
//     notes=JSON.parse(notesStr); // b/c notes already an empty[] it 1st line fails
// }
// catch(error){
// // rum if and only if (try) command throughs an error 
// }

// var duplicateNotes=notes.filter((note)=>{
//     return notes.title===title
// }) ES5

var duplicateNotes=notes.filter((note)=>note.title===title) //ES6
if(duplicateNotes.length===0){

    notes.push(note);
    // var notesString=JSON.stringify(notes);
    // fs.writeFileSync('notes-data.json',notesString);
     saveNotes(notes);

     return note;

}   




    // var notesStr=fs.readFileSync('notes-data.json');
    // notes=JSON.parse(notesStr);

    // notes.push(note);
    // var notesString=JSON.stringify(notes);
    // fs.writeFileSync('notes-data.json',notesString);
}
var listNote=(title,body)=>{
    console.log("Listing Note",title,body);
    return fetchNotes();
}
var readNote=(title)=>{ // b/c we dont need body in this
    console.log("Reading Note",title);
    //doing same thing like we do in removeNote function
   
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title === title); //just like previous remove note method
    // saveNotes(filteredNotes);
    return filteredNotes[0];


}
var removeNote=(title,body)=>{
    console.log("Removing Note",title,body);
    
    // fetch data
    var notes=fetchNotes();
    // filter notes, removing the one with the title of argument
    var filteredNotes=notes.filter((note)=>note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length; 
}

var logNote = (note) => {
    debugger;
    //Break on this line and use 'repl' to output here
    //Use read command with --title
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  };
  

module.exports={
    // addNote:addNote ES5
    addNote,
    listNote,
    readNote,
    removeNote,
    logNote 
   //ES6
}

