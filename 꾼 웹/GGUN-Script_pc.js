function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.querySelector("#particle-container").appendChild(particle);

    const size = Math.random() * 10 + 5;
    const left = Math.random() * window.innerWidth;
    particle.style.left = `${left}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const animationDuration = Math.random() * 10 + 5;
    particle.style.animationDuration = `${animationDuration}s`;

    particle.addEventListener("animationiteration", () => {
        // 애니메이션이 끝날 때 파티클을 제거
        particle.remove();
    });
}

setInterval(createParticle, 500);