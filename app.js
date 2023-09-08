const colorBar = document.querySelector(".color_bar");
const steps = document.querySelectorAll(".check");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let checkNumber = 1;

nextBtn.addEventListener("click", () => {
  checkNumber++;
  if (checkNumber > steps.length) {
    checkNumber = steps.length;
  }

  stepChecked();
});

previousBtn.addEventListener("click", () => {
  checkNumber--;
  if (checkNumber < 1) {
    checkNumber = 1;
  }

  stepChecked();
});

function stepChecked() {
  steps.forEach((step, index) => {
    if (index < checkNumber) {
      step.classList.add("checked");
      step.innerHTML = ` <i class="fa-solid fa-check"></i>
                    <span>${
                      index === 0
                        ? "Start"
                        : index === steps.length - 1
                        ? "Final"
                        : "step " + index
                    }
                          </span>`;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }

    const stepCheck = document.querySelectorAll(".checked");
    colorBar.style.width =
      ((stepCheck.length - 1) / (steps.length - 1)) * 100 + "%";

    console.log(checkNumber, steps.length);
    if (checkNumber === steps.length) {
      nextBtn.style.pointerEvents = "none";
    } else if (checkNumber === 1) {
      previousBtn.style.pointerEvents = "none";
    } else {
      nextBtn.style.pointerEvents = "visible";
      previousBtn.style.pointerEvents = "visible";
    }
  });
}
