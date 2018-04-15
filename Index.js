"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, and welcome to Pill Pal. I can help answer some questions you may have about birth control pills. What can I help you with today?").listen("Ask me your questions about birth control pills. You could try saying, I missed a pill, or does the pill protect against STIs?");
    this.emit(':responseReady');
  },

  'TypesOfPillsIntent': function () {
    this.response.speak("There are a few different kinds of birth control pills. There are different doses of hormones in different hormonal pills. Birth control pills with two hormones — estrogen and progestin — are called combination pills. They’re the most common type of birth control pill. Most combination pills come in 28-day or 21-day packs. You’re protected from pregnancy as long as you take 1 pill every day. Progestin-only pills have 1 kind of hormone, progestin. These pills don’t have any estrogen. You must take progestin-only pills within the same three hours every day to be protected from pregnancy.");
    this.emit(':responseReady');
  },
  
  'STIIntent': function () {
    this.response.speak("Birth control pills don’t protect against sexually transmitted infections. It’s very important to use condoms when having sexual intercourse. Condoms are also an important second method of protection against pregnancy if you miss more than one birth control pill, especially during the first month of pills to be extra safe, when you are taking other medications that change the effectiveness of the Pill, or when you are sick with diarrhea or vomiting.");
    this.emit(':responseReady');
  },
  
  'MissedPillIntent': function () {
    this.response.speak("The pill works best if you take it at the same time every day, but almost everyone on the pill forgets to take it sometimes. If you just missed one, take it as soon as you remember. If you don't remember until the next day, go ahead and take 2 pills that day. If you forget to take your pills for 2 days, take 2 pills the day you remember and 2 pills the next day. You will then be back on schedule. Don't forget to use a condom anytime you have vaginal sex until you’re back on schedule for 7 straight days. If you’ve already had sex in the last 5 days since making a mistake, you may want to use emergency contraception. ");
    this.emit(':responseReady');
  },
  
    'PeriodIntent': function () {
    this.response.speak("Skipping your period with the pill is easy. To do this, you must make sure you take an active pill with hormones every day. You can do this two ways. You can use a brand of pills that has 3 months of active pills in a row so you only get your period 4 times a year. OR, You can skip the placebo pills in your pack and jump right to the next pack, either all of the time or just when you have something special coming up and don’t want your period then. You may have some bleeding or spotting when you use the pill to skip your period. It’s completely normal and if you skip your hormone-free week every month, it should go away after about six months.");
    this.emit(':responseReady');
  },
  
      'PregnancyDamageIntent': function () {
    this.response.speak("");
    this.emit(':responseReady');
  },
  
        'GetPregnantIntent': function () {
    this.response.speak("If you decide you want to get pregnant, stop taking the pill. No matter what kind of birth control pill you’re on, it’s possible to get pregnant right after stopping. It can take a few months for your period to go back to the cycle you had before you started taking the pill, but that doesn’t mean you can’t become pregnant.");
    this.emit(':responseReady');
  },
  
      'AntibioticsIntent': function () {
    this.response.speak("");
    this.emit(':responseReady');
  },
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
