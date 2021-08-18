/*
Author: Jason Lee 08/17/2021
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/

/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

// transform only first char of string as upper case
function firstCharUpperCase(str) {
    str.toString().toLowerCase();
    str = str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
    return str;
}

function greeting(name, gender, isSelf) {
    // return string var
    let ret = [];

    //     greeting msg with first char upper case only
    let randomGreeting =
        greetingWords[Math.floor(Math.random() * greetingWords.length)];

    randomGreeting = firstCharUpperCase(randomGreeting) + ",";
    ret.push(randomGreeting);

    //     checking name and gender with regex
    if (!/[a-zA-Z]+/.test(name) | !genders.includes(gender)) {
        return "Please check your name or enter the proper gender. e.g) male, female or nonbinary ";
    }
    // if self is true, prefix as "my"
    if (isSelf == true) {
        ret.push(prefixes[0]);
        // if self is false, prefix as "male/female/their depends on gender param"
    } else {
        if (gender == genders[0]) {
            ret.push(prefixes[1]);
        } else if (gender == genders[1]) {
            ret.push(prefixes[2]);
            // default as "their"
        } else {
            ret.push(prefixes[3]);
        }
    }
    ret.push("name is");
    ret.push(firstCharUpperCase(name));

    // adding space for each str
    ret = ret.join(" ");

    return ret; // use template literal for string to return
}

// expecting hoisting
const greetingWords = ["hello", "hi", "hey"];
const prefixes = ["my", "his", "her", "their"];
const genders = ["male", "female", "nonbinary"];

console.log(greeting("jason", "male", true));
console.log(greeting("claire", "female", false));
console.log(greeting("Simpson", "nonbinary", false));
// return false test
console.log(greeting("1234", "male", true));