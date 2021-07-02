const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  })
);

/* Using For-Of Loop
for (const panel of panels) {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
} */

function removeActiveClasses() {
  /*Using For-Of Loop
  for (const panel of panels) {
    panel.classList.remove("active");
  }*/
  panels.forEach((panel) => panel.classList.remove("active"));
}
