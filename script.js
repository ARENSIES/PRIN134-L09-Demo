document.addEventListener("DOMContentLoaded", () => {
    const ingredients = document.querySelectorAll("#recipe-ingredients li");
    const instructions = document.querySelectorAll("#recipe-instructions li");
    const ingredientsHeader = document.querySelector(".headers:nth-of-type(1)");
    const instructionsHeader = document.querySelector(".headers:nth-of-type(2)");
    const cakeImage = document.querySelector("#cake");

    const highlightIngredients = () => {
        ingredients.forEach((item, index) => {
            if (index % 2 === 0) {
                item.classList.toggle("highlight");
            } else {
                item.style.backgroundColor = "";
            }
        });
    };

    const checkInstructions = () => {
        instructions.forEach((item, index) => {
            setTimeout(()=> {
                item.style.textDecoration = "line-through";
            }, index * 3000);
        });
    };

    const resetInstructions = () => {
        instructions.forEach(item => {
            item.style.textDecoration = "none";
        });
    };

    ingredientsHeader.addEventListener("click", () => {
        ingredientsHeader.classList.add("animate__animated", "animate__rubberBand");
        setTimeout(() => {
            ingredientsHeader.classList.remove("animate__animated", "animate__rubberBand");
        }, 1000);
    });

    instructionsHeader.addEventListener("click", () => {
        instructionsHeader.classList.add("animate__animated", "animate__rubberBand");
        setTimeout(() => {
            instructionsHeader.classList.remove("animate__animated", "animate__rubberBand");
        }, 1000);
    });

    cakeImage.addEventListener("click", () => {
        cakeImage.classList.add("animate__animated", "animate__bounce");
        setTimeout(() => {
            cakeImage.classList.remove("animate__animated", "animate__bounce");
        }, 1000);
    });

    const container = document.querySelector("#recipe-container");
    
    const btnHighlight = document.createElement("button");
    btnHighlight.textContent = "Highlight Ingredients";
    btnHighlight.addEventListener("click", highlightIngredients);
    
    const btnCheck = document.createElement("button");
    btnCheck.textContent = "Check Instructions";
    btnCheck.addEventListener("click", checkInstructions);
    
    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset Instructions";
    btnReset.addEventListener("click", resetInstructions);
    
    container.appendChild(btnHighlight);
    container.appendChild(btnCheck);
    container.appendChild(btnReset);
});

    