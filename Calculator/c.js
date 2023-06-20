document.querySelector(".del").style.color = "orange";
document.querySelector(".per").style.color = "orange";
document.querySelector(".div").style.color = "orange";
document.querySelector(".com").style.color = "orange";
document.querySelector(".mul").style.color = "orange";
document.querySelector(".sub").style.color = "orange";
document.querySelector(".add").style.color = "orange";
document.querySelector(".equal").style.color = "orange";
document.querySelector(".clear").style.color = "orange";

let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function (e) {
    if (button.textContent == "=") {
      try {
        string = eval(string);
        // console.log(string);
        document.querySelector(".input-holder").value = string;
      } catch (error) {
        document.querySelector(".input-holder").value = "Error";
      }
    } else if (button.textContent == "C") {
      string = "";
      document.querySelector(".input-holder").value = string;
    } else if (button.textContent == "Del") {
      string = string.toString().slice(0, -1);
      document.querySelector(".input-holder").value = string;
    } else if (button.textContent == "%") {
      string /= 100;
      document.querySelector(".input-holder").value = string;
    } else {
      string += button.textContent;
      document.querySelector(".input-holder").value = string;
    }
  });
});
