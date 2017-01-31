var moment = require ('moment');

console.log(moment().format( ));

var now = moment();
console.log(now.unix());

var timeStamp = 1485607922;

var currentMoment = moment.unix(timeStamp);

console.log(currentMoment.format('D/MM/YYYY @ H:mm A'));
