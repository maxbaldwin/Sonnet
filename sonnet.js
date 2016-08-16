//solving problem 2 here
var sonnetVar = document.getElementById("sonnet").innerHTML; 
//solving problem 3 here with a 'index of' to find the variable asked for
var orphanValue = "The word 'orphan' it located " + sonnetVar.indexOf('orphan') + "<br>";
//solving problem 4 with finding the length of the 'sonnetVar' created on line 2
var sonnetLength = "This sonnet is this many characters: " + sonnetVar.length; + "<br>"; 
//solving problem 5 with the '.replace' method
var sonnetReplaceWord = sonnetVar.replace("winter", "yuletide") + "<br>"; 
//solving problem 6 with continuing the variable created on line 8 and joining the split of the variables asked
sonnetReplaceWord = sonnetReplaceWord.split("the").join("a large ");
//solving problem 7 with spitting out what we created 1 - 6
document.getElementById('sonnet').innerHTML =  orphanValue + sonnetLength + sonnetReplaceWord;