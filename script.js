'use strict'

let answer = prompt('What is your name');


let time = new Date().getHours(); //15
let timeofday = '';
let greeting = '';
if (time < 12){
    timeofday = 'Good morning, ';
} else if (time <17){
    timeofday = 'Good afternoon, ';
} else{
    timeofday = 'Good evening, ';
}
if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
} 

if(answer === 'johnny'){
    greeting = timeofday + ' ' + answer + '. I hope you have a great day. The hour time is ' + time;
} else {
    greeting = timeofday + 'today is a good day. The time right now is ' + time;
}
document.write (greeting); 

