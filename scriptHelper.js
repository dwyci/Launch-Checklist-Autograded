// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
        if(testInput ===""){
            return "Empty";
        } else if(isNaN(testInput)){
            return "Not a number";
        } else{
            return "Is a number";
        }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // takes in these parameters and updates shuttle requirements
    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelLevelValidation = validateInput(fuelLevel);
    let cargoLevelValidation = validateInput(cargoLevel); 

    if(pilotValidation === "Empty" || copilotValidation === "Empty" ||
        fuelLevelValidation === "Empty" ||cargoLevelValidation === "Empty"){
            alert("All fields are required!");
            return false;
        }
    
    if(fuelLevelValidation === "Not a number" ||cargoLevelValidation === "Not a number"){
        alert("Fuel level and cargo mass must be numbers!");
            return false;
    }



 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;