window.addEventListener("load", function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", calc);
});

function calc(e) {
  e.preventDefault();
  side1 = parseInt(document.querySelector("#side1").value);
  side2 = parseInt(document.querySelector("#side2").value);
  side3 = parseInt(document.querySelector("#side3").value);

  if (side1 && side2 && side3) {
    if (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side2 + side3 < side1
    ) {
      document.querySelector("#display-triangle").innerText = "NOT a Triangle!";
    } else {
      if (side1 === side2 && side1 === side3) {
        document.querySelector("#display-triangle").innerText =
          "Equilateral: all sides are equal.";
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.querySelector("#display-triangle").innerText =
          "Isosceles: exactly 2 sides are equal.";
      } else if (side1 === side2 && side1 === side3) {
        document.querySelector("#display-triangle").innerText =
          "Equilateral: all sides are equal.";
      } else if (side1 != side2 && side1 != side3 && side2 != side3) {
        document.querySelector("#display-triangle").innerText =
          "Scalene: no sides are equal.";
      }
    }
  }
}
