//var speakHello = "Hello";

(function (window) {
  var helloSpeaker = {};
  helloSpeaker.Speak = function (name){
    console.log("Hello" + name);
  };
  window.helloSpeaker = helloSpeaker;
}) (window);
