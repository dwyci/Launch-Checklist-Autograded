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
    //maybe get info from form submission
    //need to validat pilot, co-pilot, fuel level, cargo mass
    <script>
    window.addEventListener("load", function() {
        let form = document.querySelector("formSubmission");
        form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilot]");
        let copilot = document.querySelector("input[name=copilot]");
        let fuelLevel = document.querySelector("input[quantity= fuelLevel]");
        let cargoLevel = document.querySelector("input[quantity = cargoLevel]");

        if (pilot.value === "" || copilot.value === "" || fuelLevel === ""|| cargoLevel ==="") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
        } else if(pilot.value === isNaN || copilot.value === isNaN){
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
            return("Not a number");

        } else(fuelLevel.value === !isNaN || cargoLevel.value === !isNaN){
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
            return("Is a number");
        }
        });
    });
</script>

    //start coding here   isNaN(value)
    //make in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
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