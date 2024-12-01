/*take two strings with spaces at starting of one string and 
at the ending of another string remove the spaces and 
concat the both string and 
convert the combined string into uppercase string*/
var str1="string1              ";
var str2="              string2";
var trim_str1=str1.trimEnd();
var trim_str2=str2.trimStart();
var concat_string=trim_str1.concat(trim_str2);
var uppercase_str=concat_string.toUpperCase();
console.log(uppercase_str);
2.
/*Extract Middle Portion of the string and
 get the last index of char of extracted string and
 Convert the portion to Lowercase*/
 var str="vineela"
 var a1_str=str.slice(2,5);
 var indexof_str=a1_str.indexOf("e")
 var lowercase_str=a1_str.toLowerCase();
 console.log(indexof_str);
 console.log(lowercase_str);
 3.
/* take a single char and concat string to that char and 
convert the resulted string to uppercase and 
then extract the last second char*/
var char="a";
var b1_char=char.concat(char);
var uppercase_char=b1_char.toUpperCase();
var slice_char=uppercase_char.slice(1);
console.log(slice_char);
4.
/*we have 2 string and extract first 3 chars of first string and
 extra last 3 chars of another string and concat those 2 results together
 and first char and last char of the resulted concatinated string should as uppercase.*/
 var str1="pond";
var str2="water";
var slice_str1=str1.slice(0,3);
var slice_str2=str2.slice(-3);
console.log(slice_str1)
console.log(slice_str2)
var concat_str=slice_str1.concat(slice_str2);
var upper_case=concat_str.toUpperCase();
console.log(upper_case);
 /*5.You are given a string with extra spaces at the beginning and end.
 You need to trim the string, make the first and last characters uppercase, 
 extract a specific part of the string, 
 concatenate it with another string*/
 var str_spaces="   vinni   ";
 var str_c1=str_spaces.trim();
 var upparcase_str=str_spaces[0].toUpperCase();
 var upparcase_str1=str_spaces[4].toUpperCase();
 console.log(upparcase_str);
 console.log(upparcase_str1);
 var uppercase_lastchar=str_c1.toUpperCase(0,4);
 var slice_part=str_c1.slice(0,2);
 var concat_part=slice_part.concat(uppercase_lastchar);
console.log(concat_part);
// 6."hello there , how are you " find the index of are word in the sentence.
var str="hello there, how are you";
var str1=str.indexOf("t")
console.log(str1)

