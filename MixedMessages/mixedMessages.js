// Mixed Messages, random sentence generator

const greetingArr = ['Hello', 'Greetings', 'Wow'];
const dayOfTheWeekArr = ['today', 'on Friday', 'on Thursday'];
const weatherArr = ['cloudy', 'sunny', 'thundering'];

function getRandomEntry( arr ){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function createMessage(){
    let output = '';
    const getRand = getRandomEntry;
    output = getRand(greetingArr) + ', ' + getRand(dayOfTheWeekArr) + ' it is going to be ' + getRand(weatherArr) + '!';
    return output;
}

console.log(createMessage());