// var object={
//     name:"Umar Aslam Nawab",
// }
// var stringObj=JSON.stringify(object);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString='{"name":"Umar","age":"25}';
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(person.name,person.age);

var fs=require('fs');
var originalNote={
    title:"Some title",
    body:"Some body",
}

var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
console.log(typeof originalNoteString);
console.log(originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log("Title",note.title,"Body",note.body);