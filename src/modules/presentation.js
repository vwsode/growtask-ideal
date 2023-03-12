(function () {
    const steps = document.querySelectorAll(".presentation__steps-item");
    const contents = document.querySelectorAll(".presentation__content");

    steps[0].classList.add("presentation__steps-item--active");
    contents[0].classList.add("presentation__content--active");

    steps.forEach((element) => {
        element.addEventListener("click", () => {
            steps.forEach((element) =>
                element.classList.remove("presentation__steps-item--active")
            );

            contents.forEach((content) => {
                if (
                    content.getAttribute("data-index") ===
                    element.getAttribute("data-index")
                ) {
                    contents.forEach((content) =>
                        content.classList.remove(
                            "presentation__content--active"
                        )
                    );
                    content.classList.add("presentation__content--active");
                }
            });

            element.classList.add("presentation__steps-item--active");
        });
    });
})();
