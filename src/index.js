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
        var speechOutput = 'There is no help for you. But I can assist you with finding out how long until captain crazy pants comes. To get started say Alexa, when is babygeddon. Once thats done, you can tell me your due date, and I will tell you how long you have left.';
        var cardContent = 'To get started say Alexa, my due date is:\n' +
        'Then you can ask things like, "Alexa, how long until babygeddon\n';
        res.card('Babygeddon Help', cardContent);
        res.say(speechOutput).shouldEndSession(false).send();
});


//Add Due Date Intent
app.intent('whenIsBabygeddon', {
    'slots': {
    },
    'utterances': ['{how many days until babygeddon?}']
    },
    function (req, res) {
        var speechOutput = 'What is your due date';
        res.say(speechOutput).shouldEndSession(true).send();
    });



//Add Due Date Intent
app.intent('dueDate', {
    'slots': {
        'DATE': 'AMAZON.DATE'
    },
    'utterances': ['{My due date is }{-|DATE}']
    },
    function (req, res) {
        var dateString = req.slot('DATE');
        var month;
        var day;
        var year;

        
    if(dateString.includes('january')){
          month = 'january ';
    }else if(dateString.includes('february')){
          month = 'february ';
    }else if(dateString.includes('march')){
          month = 'march ';
    }else if(dateString.includes('april')){
          month = 'april ';
    }else if(dateString.includes('may')){
          month = 'may ';
    }else if(dateString.includes('june')){
          month = 'june ';
    }else if(dateString.includes('july')){
          month = 'july ';
    }else if(dateString.includes('august')){
          month = 'august ';
    }else if(dateString.includes('september')){
          month = 'september ';
    }else if(dateString.includes('october')){
          month = 'october ';
    }else if(dateString.includes('november')){
          month = 'november ';
    }else{
          month = 'december ';
    }
    

    if(dateString.includes('tenth')){
          day = '10 ';
    }else if(dateString.includes('eleventh')){
          day = '11 ';
    }else if(dateString.includes('twelfth')){
          day = '12 ';
    }else if(dateString.includes('thirteenth')){
          day = '13 ';
    }else if(dateString.includes('fourteenth')){
          day = '14 ';
    }else if(dateString.includes('fifteenth')){
          day = '15 ';
    }else if(dateString.includes('sixteenth')){
          day = '16 ';
    }else if(dateString.includes('seventeenth')){
          day = '17 ';
    }else if(dateString.includes('eighteenth')){
          day = '18 ';
    }else if(dateString.includes('nineteenth')){
          day = '19 ';
    }else if(dateString.includes('twentieth')){
          day = '20 ';
    }else if(dateString.includes('twenty first')){
          day = '21 ';
    }else if(dateString.includes('twenty second')){
          day = '22 ';
    }else if(dateString.includes('twenty third')){
          day = '23 ';
    }else if(dateString.includes('twenty fourth')){
          day = '24 ';
    }else if(dateString.includes('twenty fifth')){
          day = '25 ';
    }else if(dateString.includes('twenty sixth')){
          day = '26 ';
    }else if(dateString.includes('twenty seventh')){
          day = '27 ';
    }else if(dateString.includes('twenty eighth')){
          day = '28 ';
    }else if(dateString.includes('twenty ninth')){
          day = '29 ';
    }else if(dateString.includes('thirtieth')){
          day = '30 ';
    }else if(dateString.includes('thirty first')){
          day = '31 ';
    }else if(dateString.includes('first')){
          day = '1 ';
    }else if(dateString.includes('second')){
          day = '2 ';
    }else if(dateString.includes('third')){
          day = '3 ';
    }else if(dateString.includes('fourth')){
          day = '4 ';
    }else if(dateString.includes('fifth')){
          day = '5 ';
    }else if(dateString.includes('sixth')){
          day = '6 ';
    }else if(dateString.includes('seventh')){
          day = '7 ';
    }else if(dateString.includes('eigth')){
          day = '8 ';
    }else if(dateString.includes('ninth')){
          day = '9 ';
    }else {
          day = '31 ';
    }

if(dateString.includes('twenty sixteen')){
          year = '2016';
    }else if(dateString.includes('twenty seventeen')){
          year = '2017';
    }else if(dateString.includes('twenty eighteen')){
          year = '2018';
    }else if(dateString.includes('twenty nineteen')){
          year = '2019';
    }else{
          year = '2020';
    }


    var newDateFormat = month + day + year;

                
    
            
        
        var oneDay = 24*60*60*1000;
        var today = Date.parse('today');
        var dueDate = Date.parse(newDateFormat);
        // var dueDate = req.slot('DATE');
        var daysLeft = Math.round(Math.abs((today.getTime() - dueDate.getTime())/(oneDay)));
        // var dateString = req.slot('DATE');
        var speechOutput2 = 'You have ' + daysLeft + ' days until you are in trouble. Muah hahahaha';
        res.say(speechOutput2).shouldEndSession(false).send();
        console.log(daysLeft + "????????????????");
        
        
//may twenty second twenty seventeen
        // res.card({
        //     'type': 'Standard',
        //     'title' : 'Due Date Recorded',
        //     'text' : 'I marked down your due date as ' + dateString,
        //     'image' : {
        //         'smallImageUrl': 'https://s3.amazonaws.com/duedate/stewie2.png',
        //         'largeImageUrl': 'https://s3.amazonaws.com/duedate/stewie2.png'
        //     }
        // });
    });


module.exports = app;