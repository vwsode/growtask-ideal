(function () {
    const introScrollToNextSection = document.querySelector(".intro__btn-next");
    const popupScrollToPriceSection =
        document.querySelector(".popup-price__btn");

    popupScrollToPriceSection.addEventListener("click", () => {
        document
            .querySelector(".calculation")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    });

    introScrollToNextSection.addEventListener("click", () => {
        document
            .getElementById("about-1")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    });
})();
