const messages = [
    "Are you sure betu?",
    "Really Sonal??",
    "But I love you 👉👈?",
    "Suno Ji pakka se?",
    "theek hai phirr per ek baari or soch lo?",
    "I will be sad ji!!",
    "acha are you sure jii pinkii sure?",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "betu say yess noww noww enough! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html"; // Redirects to "yes_page.html"

    // Start heart animation in the background
    startHeartAnimation();
}

// Function to start heart animation
function startHeartAnimation() {
    setInterval(createHeart, 500); // Create hearts every 500ms
}

// Function to create heart animation in the background
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');

    // Random heart emoji
    const heartsArray = ["❤️", "💖", "💗", "💓", "💕", "💘", "💞", "💝"];
    heart.innerHTML = heartsArray[Math.floor(Math.random() * heartsArray.length)];

    // Random position along the width of the screen
    heart.style.left = Math.random() * 100 + 'vw';  // Position horizontally across the screen

    // Random animation duration between 3s and 6s
    const duration = Math.random() * 3 + 3;  
    heart.style.animationDuration = duration + 's'; 

    document.querySelector('.hearts-container').appendChild(heart);

    // Remove heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("surprise-video");
    video.play().catch(error => console.log("Autoplay prevented: " + error));
});

