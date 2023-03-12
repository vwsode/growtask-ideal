(function () {
    const cards = document.querySelectorAll(".step__cards-item");
    const popupPrice = document.querySelector(".popup-price__text-title");
    const calculationPrice = document.querySelector(".calculation__price-title");
    const calculationPromotionPrice = document.querySelector(".calculation__price-additional-title");

    let currentProductType = null;

    let price = 0;
    let promotionPrice = 0;

    // Steps
    const stepOne = document.getElementById("step-1");
    const stepTwo = document.getElementById("step-2");
    const stepThree = document.getElementById("step-3");
    const stepFour = document.getElementById("step-4");
    const stepFive = document.getElementById("step-5");

    cards.forEach((card) =>
        card.addEventListener("click", (event) => {
            let mainClass = card.classList[0];

            if (stepOne.contains(card)) {
                const stepTwoDescirption = stepTwo.querySelector(".step__description");
                const cardsDataToRender = JSON.parse(card.getAttribute("data-render"));
                const stepTwoCards = stepTwo.querySelectorAll(".step__cards-item");

                if (card.classList.contains("step__cards-item--active")) {
                    card.classList.remove(`${mainClass}--active`);
                    card.classList.remove("step__cards-item--active");

                    stepTwoCards.forEach((element) => {
                        element.classList.remove("step__cards-item--hidden");
                    });
                } else {
                    stepOne.querySelectorAll(".step__cards-item").forEach((element) => {
                        element.classList.remove(`${mainClass}--active`);
                        element.classList.remove("step__cards-item--active");
                    });

                    card.classList.add(`${mainClass}--active`);
                    card.classList.add("step__cards-item--active");

                    stepTwoCards.forEach((element) => element.classList.add("step__cards-item--hidden"));

                    stepTwoCards.forEach((element) => {
                        const cardInfo = JSON.parse(element.getAttribute("data-card-info"));

                        stepTwoDescirption.innerHTML = cardsDataToRender.title;

                        if (cardsDataToRender.cards.indexOf(cardInfo.name) !== -1) {
                            element.classList.remove("step__cards-item--hidden");
                        }
                    });
                }

                stepOne.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepTwo.contains(card)) {
                const seoPrice = stepFive
                    .querySelector('[data-card-name="seo"]')
                    .querySelector(".promotion-card__price-title");
                const promoPrice = stepFive
                    .querySelector('[data-card-name="promo"]')
                    .querySelector(".promotion-card__price-title");

                stepTwo.querySelectorAll(".step__cards-item").forEach((element) => {
                    element.classList.remove(`${mainClass}--active`);
                    element.classList.remove(`step__cards-item--active`);
                });

                card.classList.add(`${mainClass}--active`);
                card.classList.add(`step__cards-item--active`);

                currentProductType = JSON.parse(card.getAttribute("data-card-info")).name;

                switch (currentProductType) {
                    case "landing":
                        seoPrice.innerHTML = `от 10 000 ₽`;
                        promoPrice.innerHTML = `от 20 000 ₽`;
                        break;
                    case "visit":
                        seoPrice.innerHTML = `от 10 000 ₽`;
                        promoPrice.innerHTML = `от 20 000 ₽`;
                        break;
                    case "corporate":
                        seoPrice.innerHTML = `от 20 000 ₽`;
                        promoPrice.innerHTML = `от 25 000 ₽`;
                        break;
                    case "catalog":
                        seoPrice.innerHTML = `от 35 000 ₽`;
                        promoPrice.innerHTML = `от 30 000 ₽`;
                        break;
                    case "market":
                        seoPrice.innerHTML = `от 35 000 ₽`;
                        promoPrice.innerHTML = `от 35 000 ₽`;
                        break;
                    default:
                        break;
                }

                stepTwo.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepThree.contains(card)) {
                stepThree.querySelectorAll(".step__cards-item").forEach((element) => {
                    element.classList.remove(`${mainClass}--active`);
                    element.classList.remove(`step__cards-item--active`);
                });

                card.classList.add(`${mainClass}--active`);
                card.classList.add(`step__cards-item--active`);

                stepThree.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepFour.contains(card)) {
                card.classList.toggle(`${mainClass}--active`);
                card.classList.toggle("step__cards-item--active");
                
                stepFour.querySelector(".step__note").classList.add("step__note--hidden");
            }

            if (stepFive.contains(card)) {
                card.classList.toggle(`${mainClass}--active`);
                card.classList.toggle("step__cards-item--active");

                stepFive.querySelector(".step__note").classList.add("step__note--hidden");
                promotionPrice = 0;
            }
            
            document.querySelectorAll(".step__cards-item--active").forEach((element) => {
                price = 0;
                
                try {
                    if (element.getAttribute("data-card-name") === "seo") {
                        if (currentProductType === "landing") {
                            promotionPrice += 10_000;
                        }
                        if (currentProductType === "visit") {
                            promotionPrice += 10_000;
                        }
                        if (currentProductType === "corporate") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "catalog") {
                            promotionPrice += 35_000;
                        }
                        if (currentProductType === "market") {
                            promotionPrice += 35_000;
                        }
                    }
                    if (element.getAttribute("data-card-name") === "promo") {
                        if (currentProductType === "landing") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "visit") {
                            promotionPrice += 20_000;
                        }
                        if (currentProductType === "corporate") {
                            promotionPrice += 25_000;
                        }
                        if (currentProductType === "catalog") {
                            promotionPrice += 30_000;
                        }
                        if (currentProductType === "market") {
                            promotionPrice += 35_000;
                        }
                    }
                } catch (err) {}

                try {
                    cardInfo = JSON.parse(element.getAttribute("data-card-info"));
                    price += cardInfo.hours * 1500;
                } catch (error) {
                    console.log(error);
                }

                popupPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(price)} ₽`;
                calculationPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(price)} ₽`;
                calculationPromotionPrice.innerHTML = `≈ ${Intl.NumberFormat("ru-RU").format(promotionPrice)} ₽`;
            });
        })
    );
})();
