var myAge = 31; // This line of code establishes my age as 31.

var earlyYears = 2; // This line of code establishes the variable "earlyYears" as representing the value of two.

earlyYears *= 10.5; // This line of code reestablishes the the "earlyYears" variable as a the product of 2 multiplied by 10.5. In other words, it converts the value of "earlyYears" to dog years.

var laterYears = myAge - 2; // This line of code establishes the variable "laterYears" with a value of "myAge" minus two. Since the "earlyYears" (first two actual years) and "laterYears" (the years following the first two) are converted to dog years differently, it is essential to create find the separate values of the "earlyYears" and the "laterYears".

laterYears *= 4; // This line of code essentially converts the value of "laterYears" from human to dog years.

console.log(earlyYears);

console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears; // This line of code establishes a new variable "myAgeInDogYears" which has the value of "earlyYears" added to "laterYears" after being converted to dog years.

var myName = 'Patrick Warren Groves, Jr.'.toLowerCase(); // This line of code establishes the variable "myName" with the value of my name, utilizing a string method which returns the value of the string converted to lower case.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // This line of code outputs a message to the console utilizing string interpoloation to input the relevant values from previously establish variables.
