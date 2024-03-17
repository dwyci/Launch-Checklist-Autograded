// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;

    let listedPlanetsResponse = myFetch().then(function(result) {
        listedPlanets = result;
    }).then(function() {
        const form = document.querySelector("form[data-testid='testForm']");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            let pilot = document.getElementById("pilotName").value;
            let copilot = document.getElementById("copilotName").value;
            let fuelLevel = document.getElementById("fuelLevel").value;
            let cargoLevel = document.getElementById("cargoMass").value;

            formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel);
        });

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
    });
});
