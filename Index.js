"use strict";

var Alexa = require("alexa-sdk");

const HELP_MESSAGE = 'Ask me your questions about birth control pills. You could try saying, I missed a pill, or does the pill protect against STIs?';
const HELP_REPROMPT = 'What can I help you with?';
const SKILL_NAME = 'Pill Pal';
const GET_FACT_MESSAGE = "Here's a myth about birth control: ";

const data = [
    "MYTH: You can't get pregnant if you're on birth control. TRUTH: No form of birth control is 100% effective. The pill is realistically about 91% effective, and pregnancy is still possible no matter what type of contraception you use.",
    "MYTH: Hormonal birth control is toxic and unnatural. TRUTH: All types of hormonal birth control have real risks worth discussing with your gynecologist. But for a lot of women, the benefits of hormonal birth control easily outweigh those risks. The type and amount of hormones in each method varies, so the one you choose should be a very individual decision. And if you want or need to go hormone-free, you can try the copper IUD or condoms.",
    "MYTH: The pill makes you gain tons of weight. TRUTH: A large review from 2014 didn't find sufficient evidence that birth control pills or patches cause weight gain, though a 2009 study did find that people using the birth control shot typically gain weight. Of course, some people gain weight and some people lose weight while taking the pill, but there's not enough evidence to blame it on the birth control.",
    "MYTH: Being on birth control too long can mess with your fertility. TRUTH: There's no research to suggest that birth control itself can impact your future fertility, says Dweck. Some people have trouble getting pregnant after taking it for 20 years because of increased age — if you're 40 when you stop the pill, then you'll probably have a harder time getting pregnant. And if you went on birth control to deal with irregular cycles or a condition like PCOS or endometriosis, those issues could return once you stop birth control, and they can also impact your fertility,",
    "MYTH: You should really take a break from birth control every once in a while. TRUTH: You should only take a break if you want to get pregnant. There's no medical reason to take a break from your birth control method if you're in good health and having no problems with it, even if you're not having sex right now. In fact, stopping and starting may actually put you at risk for introductory side effects all over again. The only exception is the birth control shot, which is only recommended for use up to two years.",
    "MYTH: Blood clots are usually caused by birth control. TRUTH: Your risk of getting a blood clot while on birth control is actually lower than your risk of getting one while pregnant or just after giving birth. Yes, being on birth control can raise your risk, but only from a 0.04% chance to a 0.18% chance. Still, birth control isn't the main cause of blood clots. That said, if you have other risk factors (like a personal or family history of blood clots, smoking, obesity, high blood pressure, cardiovascular disease, etc.) then definitely talk to your doctor about which birth control method would be best for you. They may recommend an IUD or condoms, which won't raise your risk.",
    "MYTH: People over 35 can't be on the pill. TRUTH: They absolutely can as long as they don't have any other factors that would put them at a higher risk of blood clots. But if you're also a smoker, are obese, have a personal or family history of blood clots, have high blood pressure, or other medical factors, you should not be on the pill. If you have breast cancer or a history of breast cancer, this might mean you can't use estrogen-containing birth control.",
    "MYTH: The pill causes cancer. TRUTH: Not only does the pill NOT cause cancer, using the pill actually decreases the risk of certain types of cancer. Taking birth control pills doesn’t cause breast cancer or brain cancer, and your chances of developing ovarian cancer, uterine cancer, and colon cancer are actually lower if you’ve taken the pill in the past. Cervical cancer rates are higher among women who use the pill, but it’s likely because the HPV virus that causes cervical cancer is more common in people having unprotected sex—and so is using birth control.",
    "MYTH: The pill always affects your mood, or even your personality. TRUTH: Most people report either no change or a slightly more positive mood after starting the pill. In fact, for women who report severe mood swings with the natural rise and fall of their monthly hormones, the pill is sometimes prescribed as treatment. On the other hand, certain hormonal birth control methods may cause a slight increase in depression. The bottom line is that you know your body best. Especially if you have a history of mood disorders like depression or anxiety, it’s important to keep an eye on your mood symptoms when taking the pill. If you don’t like how you feel with your birth control method, don’t settle. Even a different formulation of the pill could work better for you, so feel free to talk with your provider about trying different options.",
    "MYTH: The pill causes abortions. TRUTH: Not only do birth control pills not cause abortion, they don’t even affect a developing fetus if taken by a pregnant woman. A pregnancy that’s already established won’t be harmed or aborted by taking the pill.",
];

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, and welcome to Pill Pal. I can help answer some questions you may have about birth control pills. What can I help you with today?").listen("Ask me your questions about birth control pills. You could try saying, I missed a pill, or does the pill protect against STIs?");
    this.emit(':responseReady');
  },

    'DebunkMythIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },

  'EffectivenessIntent': function () {
    this.response.speak("When used perfectly, taken every day at the same time, the pill is 99% effective. But when it comes to real life, the pill is about 91% effective because it can be hard to be perfect. The better you are about taking your pill every day and starting your pill packs on time, the better it will work. But there’s a very small chance that you could still get pregnant, even if you always take your pills correctly.");
    this.emit(':responseReady');
  },
  
    'OtherPurposesIntent': function () {
    this.response.speak("More than half of women who take birth control pills do so for reasons other than avoiding pregnancy. It can make your periods more regular and lighter, too. The pill lowers heavy blood loss leading to anemia by thinning the lining of your uterus. Birth control can quell painful crampsand ease dysmenorrhea, iwhich affects up to 90% of reproductive-age women. Birth control pills with the hormone drospirenone can ease symptoms of PMS. They can also treat menstrual migraines, and improve acne and excess hair growth. They also ease endometriosis, and can help with polycystic ovarian syndrome.");
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
    this.response.speak("According to the U.S. Food and Drug Administration (FDA), there is no evidence that taking combination birth control pills or progestin-only pills while pregnant will harm your baby in any way, either by increasing the risk of birth defects or causing pregnancy complications. That said, it is not recommended that you continue taking birth control if you that you are pregnant. All substances consumed reach the fetus as well. So if you think you may be pregnant, take a pregnancy test to know for certain.");
    this.emit(':responseReady');
  },
  
        'GetPregnantIntent': function () {
    this.response.speak("If you decide you want to get pregnant, stop taking the pill. No matter what kind of birth control pill you’re on, it’s possible to get pregnant right after stopping. It can take a few months for your period to go back to the cycle you had before you started taking the pill, but that doesn’t mean you can’t become pregnant.");
    this.emit(':responseReady');
  },
  
      'AntibioticsIntent': function () {
    this.response.speak("You can take nearly any antibiotic you’ve been prescribed and your birth control pill will keep protecting you. Only one antibiotic is known to make the pill less effective. That is rifampin, a special medication used to treat tuberculosis. Brand names for it include Rifadin and Rimactane. Other antibiotics do not make the pill less effective. However, there are medications that can interact with the pill and decrease its effectiveness. Also, the pill can decrease or increase the effectiveness of some medications.Always let providers know about all the rescription, over-the-counter, recreational drugs and medications you take before they prescribe anything new for you.");
    this.emit(':responseReady');
  },
    
      'TimezoneIntent': function () {
    this.response.speak("Calculate the time it is at your destination when you typically take your pill. Remember to account for daylight savings time. If it’s easier, you can change your scheduled time, as long as you don’t go more than 24 hours between pills. Use a time zone chart and an alarm to make sure you are taking your pill at the right time throughout your trip. You may want to bring an extra pill pack even if you’re pretty sure you’ll be covered right through your return. Depending where you’re going, it could be hard to get a prescription or to get to a pharmacy if something unexpected happens. If you plan to use your pills or ring to skip your period while you’re away, factor that into your count.");
    this.emit(':responseReady');
  },
        
        'AlternativeIntent': function () {
    this.response.speak("There are many hormonal and non-hormonal alternatives to the pill, including the birth control implant, the birth control patch, the birth control shot, the vaginal ring, a cervical cap, condoms, diaphragms, female condoms, IUDs, spermicide, sterilization. Consult a specialist to find the method that's right for you. To get started, you could take Planned Parenthood's quiz called Which birth control method is right for me?");
    this.emit(':responseReady');
  },
  
    'AMAZON.CancelIntent': function () {
        this.response.speak("Hope I could help! If you're able to, please consider donating to Planned Parenthood to your comfort level. Just ask Alexa how. Goodbye!");
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak("Hope I could help! If you're able to, please consider donating to Planned Parenthood to your comfort level. Just ask Alexa how. Goodbye!");
        this.emit(':responseReady');
    },
    
'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },

'AMAZON.StartOverIntent': function() {
        this.toIntent('LaunchRequest');
    }


}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
