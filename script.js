// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;

    let listedPlanetsResponse = myFetch().then(function(result) {
        listedPlanets = result;
    }).then(function() {
        

        // Pick a random planet and add destination info
        const randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image
        );

        const form = document.querySelector("form[data-testid='testForm']");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            let pilot = form.querySelector('input[id= "pilotName"]').value;   
            let copilot = form.querySelector('input[name="copilotName"]').value;
            let fuelLevel =  form.querySelector('input[name="fuelLevel"]').value;   
            let cargoLevel =  form.querySelector('input[name="cargoMass"]').value;    
            
            formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel);
        });

    });
});
