const container = document.getElementById("bubble-container");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = Math.random() * 50 + 100; // Taille entre 30px et 80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    bubble.style.backgroundColor = color;

    let posX = Math.random() * (window.innerWidth - size);
    bubble.style.left = `${posX}px`;

    container.appendChild(bubble);

    // Supprime la bulle au clic et incrémente le score
    bubble.addEventListener("click", () => {
        bubble.remove();
        score++;
        scoreDisplay.textContent = score;
    });

    // Supprime la bulle après l'animation
    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

// Générer des bulles à intervalle régulier
setInterval(createBubble, 500);
