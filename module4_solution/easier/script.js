(function (){
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for(var i=0; i<names.length; i++){
    var firstLetter = names[i].CharAt(0).toLowerCase();
    if (firstLetter === 'j'){
      byeSpeaker.speak(name[i]);
    } else {
      helloSpeaker.speak(name[i]);
    }
  }
});()
