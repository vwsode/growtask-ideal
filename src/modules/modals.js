(function () {
    const introBtnRequest = document.querySelector(".intro__btn-request");
    const stepThreeBtnConsult = document.querySelector(".card-helper__btn");
    const stepFiveBtnConsult = document.querySelector(".step__helper-btn");
    const badReviewBtn = document.querySelector(".calculation__review-btn-bad");

    const modalConsultV1 = document.getElementById("modal-consult-1");
    const modalConsultV2 = document.getElementById("modal-consult-2");
    const modalConsultV3 = document.getElementById("modal-consult-3");
    const modalPreview = document.querySelector(".modal-preview");

    introBtnRequest.addEventListener("click", () => {
        modalConsultV1.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV1.classList.remove("modal-consult--active");
                });
            });
    });

    stepThreeBtnConsult.addEventListener("click", () => {
        modalConsultV2.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV2.classList.remove("modal-consult--active");
                });
            });
    });

    stepFiveBtnConsult.addEventListener("click", () => {
        modalConsultV3.classList.add("modal-consult--active");

        document
            .querySelectorAll(".modal-consult__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalConsultV3.classList.remove("modal-consult--active");
                });
            });
    });

    badReviewBtn.addEventListener("click", () => {
        modalPreview.classList.add("modal-preview--active");

        document
            .querySelectorAll(".modal-preview__btn-close")
            .forEach((element) => {
                element.addEventListener("click", () => {
                    modalPreview.classList.remove("modal-preview--active");
                });
            });
    });

    window.onclick = (event) => {
        if (event.target == modalConsultV1) {
            modalConsultV1.classList.remove("modal-consult--active");
        }

        if (event.target == modalConsultV2) {
            modalConsultV2.classList.remove("modal-consult--active");
        }

        if (event.target == modalConsultV3) {
            modalConsultV3.classList.remove("modal-consult--active");
        }

        if (event.target == modalPreview) {
            modalPreview.classList.remove("modal-preview--active");
        }
    };
})();
