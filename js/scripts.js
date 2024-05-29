document.addEventListener("DOMContentLoaded", function() {
    const summerCampsButton = document.getElementById("summer-camps-button");
    const cityCampButton = document.getElementById("city-camp-button");
    const backArrow = document.getElementById("back-arrow");
    const mainButtons = document.getElementById("main-buttons");
    const summerCampButtons = document.getElementById("summer-camp-buttons");
    const cityCampMessage = document.getElementById("city-camp-message");

    summerCampsButton.addEventListener("click", function() {
        mainButtons.style.display = "none";
        summerCampButtons.style.display = "flex";
        backArrow.style.display = "flex";
    });

    cityCampButton.addEventListener("click", function() {
        mainButtons.style.display = "none";
        cityCampMessage.style.display = "flex";
        backArrow.style.display = "flex";
    });

    backArrow.addEventListener("click", function() {
        summerCampButtons.style.display = "none";
        cityCampMessage.style.display = "none";
        mainButtons.style.display = "flex";
        backArrow.style.display = "none";
    });
});
