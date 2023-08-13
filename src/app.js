const rating = document.querySelectorAll(".main__numbers span");
const button = document.querySelector(".main__btn");
const thankSection = document.querySelector(".main__thanks");
const ratingSection = document.querySelector(".main__survey");
const ratedNumber = document.getElementById("main__rated");
let selected = null;

rating.forEach((ratingNumbers) => {
  ratingNumbers.addEventListener("click", (e) => {
    const colorFocus = document.querySelector(".main__focus");
    if (colorFocus) {
      colorFocus.classList.remove("main__focus");
    }
    const card = e.target;
    card.classList.add("main__focus");
    selected = e.target.innerText;
    console.log(selected);
  });
});

button.addEventListener("click", () => {
  if (selected) {
    ratedNumber.innerText = selected;
    ratingSection.classList.add("main__hidden");
    thankSection.classList.remove("main__hidden");
  }
});
