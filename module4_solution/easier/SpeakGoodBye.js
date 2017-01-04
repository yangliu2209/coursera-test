//var speakGoodBye = "Good Bye";

(function (window) {
  var byeSpeaker = {};
  byeSpeaker.Speak = function (name){
    console.log("Good Bye"+ name);
  };
  window.byeSpeaker = byeSpeaker;
}) (window);
