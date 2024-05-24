// text in home page

// library vara.js to animate text in home page
let vara = new Vara(
  "#animated-text",
  "./fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Hei, Mitt navn er",
      color: "black",
      textAlign: "center",
      strokeWidth: 1,
      y: 60,
      duration: 200,
    },
    {
      text: "Sarah Hussein",
      width: 500,
      color: "rgb(41, 8, 41)",
      textAlign: "center",
      strokeWidth: 1.7,
      x: 0,
      duration: 700,
    },
    {
      text: "En front-end webutvikler, UI/UX Designer og Tester ",
      width: 600,
      color: " rgb(41, 8, 41)",
      textAlign: "center",
      strokeWidth: 2,
      y: 15,
      x: 0,
      duration: 1000,
    },
  ],
  {
    fontSize: 36,
  }
);
// adding fixed text under animated text in home-page

const homeDiv = document.getElementById("home-div");
const fixedText = document.createElement("p");
fixedText.textContent =
  "Interessert i å bringe ideer til livet ved å designe brukervennlige nettsider";
fixedText.style.padding = "20px";
fixedText.style.maxWidth = "400px";
fixedText.style.fontFamily = "Satisfy";
fixedText.style.fontSize = "26px";
homeDiv.append(fixedText);

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

// refresh protfolio when loading to the top of the page
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
