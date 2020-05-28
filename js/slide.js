var leftBtn = document.querySelector(".btn-left");
var rightBtn = document.querySelector(".btn-right");

var transform = document.querySelector(".transform");
var carousel = document.querySelectorAll(".carousel");
var TRANSLATE = 366 - 164 - 202;
var STEP = -1;
var CURRENT_TRANSLATE = TRANSLATE;
carousel[Math.abs(STEP)].classList.add("active");

leftBtn.addEventListener("click", () => {
  STEP = STEP - 1;
  CURRENT_TRANSLATE = TRANSLATE * STEP;

  transform.setAttribute(
    "style",
    `transform: translate(${CURRENT_TRANSLATE}px)`
  );
  carousel.forEach((c, index) => {
    c.classList.remove("active");
  });
  transform.children[2].classList.add("active");
  transform.appendChild(transform.children[0]);
});

rightBtn.addEventListener("click", () => {
  STEP = STEP + 1;
  CURRENT_TRANSLATE = TRANSLATE * STEP;
  transform.setAttribute(
    "style",
    `transform: translate(${CURRENT_TRANSLATE}px)`
  );
  carousel.forEach(c => {
    c.classList.remove("active");
  });
  transform.children[0].classList.add("active");
  transform.insertBefore(transform.children[2], transform.firstChild);
});