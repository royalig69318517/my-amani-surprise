// OPENING MESSAGE
const openButton = document.getElementById("openBtn");
const message = document.getElementById("message");

openButton.addEventListener("click", function() {
    message.classList.remove("hidden");
    openButton.textContent = "❤️";
});


// MEMORY CARDS
const memoryButtons = document.querySelectorAll(".open-memory");

memoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".memory-card");

        const cover = card.querySelector(".memory-cover");
        const content = card.querySelector(".memory-content");

        cover.classList.add("hidden");
        content.classList.remove("hidden");

    });

});


// FINAL SURPRISE
const surpriseButton = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

surpriseButton.addEventListener("click", function() {

    finalMessage.classList.remove("hidden");
    surpriseButton.style.display = "none";

});
const smileCard = document.querySelector(".smile-card");
const smileReveal = smileCard.querySelector(".card-reveal");

smileCard.addEventListener("click", function() {
    smileReveal.classList.toggle("hidden");
});
const littleThingsCard = document.querySelector(".little-things-card");
const littleThingsReveal = littleThingsCard.querySelector(".card-reveal");

littleThingsCard.addEventListener("click", function() {
    littleThingsReveal.classList.toggle("hidden");
});
const secretCard = document.querySelector(".secret-card");
const secretReveal = secretCard.querySelector(".secret-reveal");

secretCard.addEventListener("click", function() {
    secretReveal.classList.toggle("hidden");
});