const faq = document.querySelector(".faq");
const faqAccordions = faq.querySelectorAll(".accordion");

faqAccordions.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("accordion--active");
    });
});
