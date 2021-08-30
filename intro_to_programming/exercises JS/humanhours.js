/* DESCRIPTION
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format 
(HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  
  if (seconds >= 360000) {
    console.log("Value for seconds is too high. Enter a smaller number.")
  } else {
  
  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  
  const minutes = Math.floor(seconds / 60);
  
  seconds -= minutes * 60;
  const secondsResult = seconds;
  
  const hoursRes = ((hours < 10) ? '0' + hours : hours);
  const minutesRes = ((minutes < 10) ? '0' + minutes : minutes);
  const secondsRes = ((secondsResult < 10) ? '0' + secondsResult : secondsResult);
  
  //console.log(`${hoursRes}:${minutesRes}:${secondsRes}`);
  console.log(hoursRes + ':' + minutesRes + ':' + secondsRes);
  }
}
humanReadable(0);
//should read '00:00:00'

humanReadable(5);
//should read '00:00:05'

humanReadable(60);
//should read '00:01:00'

humanReadable(86399);
//should read '23:59:59'

humanReadable(359999);
//should read '99:59:59'