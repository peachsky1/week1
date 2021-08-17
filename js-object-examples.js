// Example of all valid JSON types
// See https://json-schema.org/understanding-json-schema/reference/type.html
const myInfo = {
    "name": "Jason",
    // JSON doesn't accept date type
    "birthday": '01011990',
    "citiesLivedIn": ["Boston", "MA"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
      "favoriteFood": "pizza",
    }
  };
  
  console.log(myInfo);

  const myInfoAsJSON = JSON.stringify(myInfo);
  console.log(myInfoAsJSON)