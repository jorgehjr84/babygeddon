'use strict';
module.change_code = 1;
var Alexa = require('alexa-app');
var app = new Alexa.app('babygeddon');


app.launch(function(req,res){
    var prompt = "Welcome to babygeddon";
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

//Help Intent
app.intent('AMAZON.HelpIntent',{   
},
    function (req, res) {
        var speechOutput = 'There is no help for you. But I can assist you with finding out how long until captain crazy pants comes. To get started say Alexa, my due date is. Once thats done, you can say things like, Alexa, how long until babygeddon';
        var cardContent = 'To get started say Alexa, my due date is:\n' +
        'Then you can ask things like, "Alexa, how long until babygeddon\n';
        res.card('Babygeddon Help', cardContent);
        res.say(speechOutput).shouldEndSession(false).send();
});

//Add Due Date Intent
app.intent('dueDate',{
    'slots': {
        'DUEDATE' : 'AMAZON.DATE'
    },
    'utterances': [] 
},
    function(req,res){
       var dueDate = req.slot('DUEDATE');
       res.say(dueDate).shouldEndSession(false).send();
    }
);

module.exports = app;