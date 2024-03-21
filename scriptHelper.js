// Write your helper functions here!

// require('cross-fetch/polyfill');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML= `
                
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">

        `;
 }
 
 function validateInput(testInput) {
        if(testInput ===""){
            return "Empty";
        } else if(isNaN(testInput)){
            return "Not a Number";
        } else{
            return "Is a Number";
        }

 }
 
 function formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel) {  
    //takes in these parameters and updates shuttle requirements
    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelLevelValidation = validateInput(fuelLevel);
    let cargoLevelValidation = validateInput(cargoLevel); 

    if(pilot === "Empty" || copilot === "Empty" ||
        fuelLevel === "Empty" || cargoLevel === "Empty") {
        alert("All fields are required!");
    }
    
    if(fuelLevel === "Not a number" || cargoLevel === "Not a Number") {
        alert("Fuel level and cargo mass must be numbers!");
    }

    // Update html with pilot and copilot
 
        let pilotStatus = document.getElementById("pilotStatus");  
        pilotStatus.innerText = `Pilot ${pilot} is ready for launch`;
            
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerText = `Co-pilot ${copilot} is ready for launch`;

        if(fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";        
          let fuelStatusElement = document.getElementById("fuelStatus");
         fuelStatusElement.textContent = "There is not enough fuel for the journey";

        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";     
        document.getElementById("pilotStatus").innerText =   `Pilot ${pilot} is ready for launch`;       

        return;        
    } 
    else if(cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerText =  "There is too much mass for the shuttle to take off. ";        
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";      
        document.getElementById("pilotStatus").innerText =   `Pilot ${pilot} is ready for launch`;   

        return;
    } 
  
        // If everything is correct
        else {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("pilotStatus").innerText =   `Pilot ${pilot} is ready for launch`;
        }

        // document.getElementById("launchStatus").innerText = "Shuttle is Ready for Launch";    
        //  document.getElementById("launchStatus").style.color = "green";
        return;
    }


 
 async function myFetch() {
     let planetsReturned;
 //add url
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json());
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

    const randomIndex = Math.floor(Math.random()*planets.length);
    return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;