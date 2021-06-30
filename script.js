'use strict'

let time = new Date().getHours(); //15

function getname(){
let answer = prompt('What is your name?');
return answer;

}

function hostCITY() {
    let OlympicCity = prompt('Where is the next Olympics');
    while (OlympicCity != 'Tokyo'){OlympicCity = prompt('Try Again, Where is next Olympics')};
}

function GoldCount() {
    let medals = prompt('How many gold medals do you want?');
for (let count = 0; count < medals; count++){
    document.write ('<img src = "goldmedal.jpeg"/>');
}
}

function morningafternoonevening(){
    let timeofday = '';
if (time < 12){
    timeofday = 'Good morning, ';
} else if (time <17){
    timeofday = 'Good afternoon, ';
} else{
    timeofday = 'Good evening, ';
}
return timeofday;
}

function amOrpm(time){
if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
} 
return time;
}


function greeting(timeofday, answer, time){
if(answer === 'johnny'){
    greeting = timeofday + ' ' + answer + '. I hope you have a great day. The hour time is ' + time;
} else {
    greeting = timeofday + 'today is a good day. The time right now is ' + time;
}
return greeting;
}

let answer = getname();
let OlympicCity = hostCITY();
let medals = GoldCount()
let timeofday = morningafternoonevening();
let greetings = greeting(timeofday, answer, time);

document.write (greetings); 



