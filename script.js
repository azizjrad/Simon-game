const typingSpeed = 100;
let index = 0;

// Target the h1 element
const typingEffect = document.getElementById("typing-effect");

// Set the text dynamically based on the page
let text;

if (document.title === "Accueil") {
    text = "Bienvenue sur le jeu Simon";
} else if (document.title === "Rules") {
    text = "Les règles du jeu de Simon";
}  else if (document.title === "Leaderboard") {
    text = "Les stats des leaders"; // Default or fallback text if needed
} else {
    text = "Contactez-nous"; // Default or fallback text if needed
}

// Function to simulate typing
function type() {
    if (index < text.length) {
        typingEffect.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
if (typingEffect && text) {
    type();
}



// Initialize EmailJS
(function() {
    emailjs.init("j0xFly-S0XU_lbh8B");
})();

// Handle form submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("service_dyqaxrg", "template_jlcnktq", templateParams)
        .then(function(response) {
            alert("Votre message a été envoyé avec succès!");
            form.reset();  // Reset the form after successful submission
        }, function(error) {
            alert("Erreur lors de l'envoi du message: " + error.text);
        });
});