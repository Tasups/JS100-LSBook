/*
DOCUMENTATION

Given reliable data on a contestant, we want to know what time we should expect them to complete a "100 metre" race in. This is in quotes because they might get a head-start or a handicap!

Inputs:

All inputs will be numbers to two decimal places, and may be negative.
The function will always receive all four inputs.
Your function should take four numbers as inputs:

H -- Head-start/handicap (h, metres): how many metres head-start the contestant will receive (so 10.00 means they have to run 90 metres, and -20.50 means they have to run 120.5 metres).
R -- Reaction time (r, seconds): how long it takes them to react to the starting gun. This should be included in their final race time.
A -- Acceleration (a, metres/second/second): assume that they accelerate at a constant rate from their initial velocity (0 m/s) to their maximum. Note that they might not have finished accelerating when 
they reach the end of the race.
V -- Max velocity (v, metres/second): assume that they can maintain this indefinitely, once they've reached it.
Check for invalid inputs (do this before checking for false start):

Return "Cannot calculate. Invalid data." if any of these apply:
The contestant has a negative distance to run. Note that they could technically have a 0.00 metre race, though, which they would complete in their reaction time.
Acceleration is 0.00 or less. We'll allow it to be super-human, though.
Max velocity is 0.00 or less. We'll allow this to be super-human, too.
Reaction time is negative.

Check for false start (not an error):
Return "False start!" if the reaction time is between 0.00 and 0.10 seconds inclusive. We're allowing super-human speed and acceleration, but not super-human reaction times.
Output:

If the inputs are valid and there's no false start, output the race time in seconds, to two decimal places, followed by " seconds".
E.g. "13.50 seconds"
E.g. raceTime(0.00,1.00,10.00,10.00) outputs "11.50 seconds"
Tips:

If your maths/physics is a little rusty (like mine), search around for the SUVAT equations (AKA "equations of motion"). These will help you figure out how to deal with the constant acceleration.
If you want even more help, you should be able to find a useful table of rearranged SUVAT equations on Google image search

*/

function raceTime(h,r,a,v) {
  if (h < 0 || a <= 0 || v <= 0 || r < 0 ) {
    console.log("Cannot calculate. Invalid data.");
  } else if (r >= 0 && r <= 0.10) {
    console.log("False start!");
  }
  
  const raceDistance = 100 + (h * -1);
  const addedTime = r;
  const remainderTime = //acceleration converted into distance traveled.
  
  /* MATHEMATICAL NOTES
  time = distance/velocity;
  velocity is a known quantity so we can solve for distance even though that isn't stringent enough to accomodate for R = reaction time and A = acceleration
  */
}

raceTime(1, 0.09, 1, -2);

