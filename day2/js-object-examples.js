// Example of all valid JSON types
// See https://json-schema.org/understanding-json-schema/reference/type.html
const myInfo = {
    name: "Jason",
    // JSON doesn't accept date type
    birthday: "01011990",
    citiesLivedIn: ["Boston", "MA"],
    isHuman: true,
    planetsVisited: null,
    personalInfo: {
        favoriteFood: "pizza",
    },
};

console.log(myInfo);

const myInfoAsJSON = JSON.stringify(myInfo);
console.log(myInfoAsJSON);

function sayHi(name) {
    return `my name is ${name} and I'm  years old`;
}
console.log(sayHi("Jason, 30"));