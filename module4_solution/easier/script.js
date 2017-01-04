(function (){
  //create a array of list of names;
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  // loop for listing name
  for(var i=0; i<names.length; i++){
    //create a var firstletter to find the first letter of each name in the array
    var firstLetter = names[i].CharAt(0).toLowerCase();
    //if...else.. to meet the requirement
    if (firstLetter === 'j'){
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
}) ();
