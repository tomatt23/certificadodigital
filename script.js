const revealElements = document.querySelectorAll(".reveal");

const scrollReveal = () => {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};

// Ativa a animação ao carregar e ao dar scroll
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Efeito de Parallax suave no card flutuante
document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".floating-card");
    if (card) {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

// Mensagem de confirmação simples nos botões de CTA
const buyButtons = document.querySelectorAll(".btn-primary");
buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Redirecionando para o checkout...");
    });
});
