# [MDN Looping Code Exercises](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)
## [Implementing a launch countdown](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#implementing_a_launch_countdown)
In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff.

To complete the exercise:

- [ ] Add code to loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
- [ ] For each iteration, create a new paragraph and append it to the  
- [ ] For the different iteration numbers listed below, write code to insert the required text inside the paragraph (you'll need a conditional statement and multiple para.textContent = lines):
- [ ] If the number is 10, print "Countdown 10" to the paragraph.
- [ ] If the number is 0, print "Blast off!" to the paragraph.
- [ ] For any other number, print just the number to the paragraph.
- **Remember to include an iterator!** However, in this example we are counting down after each iteration, not up, so you don't want `i++` — *how do you iterate downwards?*

## [Filling in a guest list](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#filling_in_a_guest_list)
Take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

To complete the exercise:

- [ ] 1. Write a loop that will iterate through the people array.
- [ ] 2. During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
    - [ ] 1. If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
    - [ ] 2. If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.

 **Extra bonus question** — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one. Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end? Have a look at the Useful string methods article for help.
