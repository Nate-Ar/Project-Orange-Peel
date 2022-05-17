// Creator: Nathan A
// Description: Virtual assistant
// Creation Date: 12/3/2019
// Update Date: 9/2/2020
const meeturl = 'https://meet.google.com/qyi-oqag-tee';
speaks = [
    {
        "name": "Alex",
        "lang": "en-US"
    }]
var text = 'hi i am jamie';
var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;';
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    if (command.toLowerCase() === 'hey jamie'){
        text = 'yes ?';
        speak();
    }
    else if (command.toLowerCase() === 'open google'){
        window.open('https://www.google.com');
        text = 'Ok  i am opening Google now';
        speak();
    }
    else if (command.toLowerCase() === "what's the weather"){
        window.open('https://weather.com/weather/today/l/38.48,-89.91?par=google&temp=f');
        text =  ('you can see the weather in the screen now ');
        speak();
    }
    else if (command.toLowerCase() === 'what is the date'){
        date = new Date();
        text = (date.toDateString());
        speak();
    }
    else if (command.toLowerCase() === 'open github'){
        window.open('https://github.com/Nate-Ar');
        text = 'ok i am opening Nathans Github page where he stores all of his projects';
        speak();
    }
    else if (command.toLowerCase() === 'tell me a joke'){
        var temp = Math.round(Math.random()*3);
        if (temp === 2) {
            text = 'Why do we tell actors to break a leg?';
            speak();
            text = 'Because every play has a cast.';
            speak();
        }
        // i am listening to sweet caroline great song
        if ( temp === 0) {
            text = 'Hear about the new restaurant called Karma?';
            speak();
            text = 'There’s no menu: You get what you deserve.';
            speak();
        }
        if (temp === 1){
            text = 'Did you hear about the actor who fell through the floorboards?';
            speak();
            text = 'He was just going through a stage.';
            speak();
        }
    }
    else if (command.toLowerCase() === 'what time is it'){
        text="I think it's Hammer Time";
        speak();
        var theHammer = document.getElementById('hammer');
        theHammer.play();
    }
    else if (command.toLowerCase() === 'scare me'){
        text='boo!';
        speak();
    }else if (command.toLocaleLowerCase() === 'start 4th hour meat'|| command.toLocaleLowerCase() === 'start 4th our meat'){
        window.open(meeturl)
        text='yes sir, it should be ready'
        speak()
    }
    console.log(command);
};

recognition.onspeechend = function() {
    recognition.stop();
};
recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}
document.querySelector('#btnGiveCommand').addEventListener('click', function(){
    recognition.start();

});
// Another good song Bar Mitzah Boy by Adam Sandler from his netflix special 100% fresh
function speak() {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1.3; // 0 to 2
    msg.text  = text;
    const voice = speaks[0]; //47
    console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
    msg.voiceURI = voice.name;
    msg.lang = voice.lang;
    speechSynthesis.speak(msg);
}
