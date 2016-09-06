'use strict';
module.change_code = 1;
var Alexa = require('alexa-app');
var app = new Alexa.app('babygeddon');
require('datejs');




app.launch(function(req,res){
    var prompt = "Welcome to babygeddon";
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

//Help Intent
app.intent('AMAZON.HelpIntent',{   
},
    function (req, res) {
        var speechOutput = 'There is no help for you. But I can assist you with finding out how long until captain crazy pants comes. To get started say Alexa, when is babygeddon. Once thats done, you can tell me your due date, and I will tell you how long you have left until, you know, you are F"d.';
        var cardContent = 'To get started say Alexa, my due date is:\n' +
        'Then you can ask things like, "Alexa, how long until babygeddon\n';
        res.card('Babygeddon Help', cardContent);
        res.say(speechOutput).shouldEndSession(false).send();
});


//Add Due Date Intent
app.intent('whenIsBabygeddon', {
    'slots': {
    },
    'utterances': ['{how many days until | how long until | when is| how much time until}{babygeddon?}']
    },
    function (req, res) {
        var speechOutput = 'What is your due date';
        res.say(speechOutput).shouldEndSession(false).send;
    });



//Add Due Date Intent
app.intent('dueDate', {
    'slots': {
        'DATE': 'AMAZON.DATE'
    },
    'utterances': ['{|My due date is | I am due on| the baby is coming| }{-|DATE}{|is my due date}']
    },
    function (req, res) {             
        var oneDay = 24*60*60*1000;
        var today = Date.parse('today');
        var dueDate = Date.parse(req.slot('DATE'));
        var daysLeft = Math.round(Math.abs((today.getTime() - dueDate.getTime())/(oneDay)));        
        var speechOutput2 = 'You have ' + daysLeft + ' days until you are in trouble. Muah hahahaha';
    
        res.say(speechOutput2).shouldEndSession(false).send();
        res.card({
            'type': 'Standard',
            'title' : 'Days until babygeddon',
            'text' : 'you have ' + daysLeft + ' until babygeddon',
            'image' : {
                'smallImageUrl': 'https://s3.amazonaws.com/duedate/stewie2.png',
                'largeImageUrl': 'https://s3.amazonaws.com/duedate/stewie2.png'
            }
        });
    });


module.exports = app;