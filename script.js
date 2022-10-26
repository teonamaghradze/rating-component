const firstPage = document.querySelector(".container");
const secondPage = document.querySelector(".thanku-container");

const submitBtn = document.querySelector(".submit-btn");
const ratingBtns = Array.from(document.querySelectorAll(".btn"));

const score = document.querySelector(".score");

secondPage.style.display = "none";

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    ratingBtns.forEach((btn) => {
      btn.classList.remove("active-btn");
      e.target.classList.add("active-btn");
    });
  });

  submitBtn.addEventListener("click", function () {
    firstPage.style.display = "none";

    if (btn.classList.contains("active-btn")) {
      secondPage.style.display = "block";
      score.innerHTML = btn.textContent;
    }
  });
});
