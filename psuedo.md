                                    ALL ACTIONS BROKEN DOWN VIA SHEET AND FUNCTION
HTML
1. Create all divs. Add references to external sheets
2. Think about classes and ID's 
3. TIMER DIV
CSS
1. 


JS 
1. Establish Questions Vars
>>From Current Position, next step is to 
2. Set Timer variables, then timer function. 
2a.  Timer vars are: number - (seconds starting from); intervalId - (undeclared for now,can name this  variable"timer"); Correct Answers = 0; incorrect count = 0; unanswered = 0;                              <-- TO.BE.CHANGED.ACCORDING.TO.ANSWERS
3. Set all functions BELOW 
4. showquestions();
>>Append All Questions to Correct Div's
>>Remeber to call showquestions() and countdown() functions at same time 
>>
5. Timer();
>> create timer function timer() {
>>          timerval = setInterval(decrement, 1000)           
>>      }     
5. decrement(); 
>>Start timers. if timer is > 0, *******, else {finished()}
>>>if timer is >0, 
>>number --
>> append number to header via jquery and strng interpolation
>>function in which $(.header).html = 
6. finished(); 
>>>a. Stop Timer funct (stop) { (clearinterval(timerval)) }
>>>b. 
7. 