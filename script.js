// animated text home page
const welDiv = document.getElementById("wel-div");
const WelText = document.createElement("p");
WelText.textContent =
  "Interessert i å bringe ideer til livet ved å designe brukervennlige nettsider";
WelText.style.padding = "20px";
WelText.style.maxWidth = "400px";
WelText.style.fontFamily = "Satisfy";
WelText.style.fontSize = "26px";

// WelText.classList.add("wel-text");

var vara = new Vara(
  "#animated-text",
  "./fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Hei, Mitt navn er",
      // color: "white",
      color: "black",
      textAlign: "center",
      strokeWidth: 1,
      y: 60,
      duration: 200,
    },
    // {
    //   text: "My name is",
    //   color: "black",
    //   textAlign: "center",
    //   strokeWidth: 1.5,
    //   y: 5,
    //   x: 0,
    //   duration: 500,
    // },
    {
      text: "Sarah Hussein",
      width: 500,
      // color: "white",
      color: "rgb(41, 8, 41)",
      textAlign: "center",
      strokeWidth: 1.7,
      x: 0,
      duration: 700,
    },
    {
      text: "En front-end webutvikler",
      width: 500,
      // color: "white",
      color: " rgb(41, 8, 41)",
      textAlign: "center",
      strokeWidth: 2,
      y: 15,
      x: 0,
      duration: 1000,
    },
    // {
    //   text: "Interessert i å bringe ideer til livet ved å designe brukervennlige nettsider",
    //   strokeWidth: 1,
    //   textAlign: "center",
    //   color: "black",
    //   width: 500,

    //   y: 20,
    //   x: 0,
    //   duration: 1500,
    // },
  ],
  {
    fontSize: 36,
  }
);
welDiv.append(WelText);

// nav bar activ section link
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".link");

  function changeLinkState() {
    let index = 0;
    const scrollPosition = window.scrollY + 50;

    for (let i = 0; i < sections.length; i++) {
      if (scrollPosition >= sections[i].offsetTop) {
        index = i;
      }
    }

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
});

//  preview CV btn in empty tab
const cvBtn = document.getElementById("cv-btn");
cvBtn.addEventListener("click", function () {
  window.open("Sarah-Hussein.docx.pdf", "_blank");
});

// refresh to the top of the page
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
