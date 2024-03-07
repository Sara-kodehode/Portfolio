// animated text home page
var vara = new Vara(
  "#animated-text",
  "./fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Hello, My name is",
      textAlign: "center",
      strokeWidth: 0.9,
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
    //   duration: 300,
    // },
    {
      text: "Sarah Hussein",
      width: 500,
      color: "black",
      textAlign: "center",
      strokeWidth: 1.3,
      y: 10,
      x: 0,
      duration: 200,
    },
    {
      text: "A Front-End Web Developer",
      width: 500,
      color: "black",
      textAlign: "center",
      strokeWidth: 1.5,
      y: 10,
      x: 0,
      duration: 200,
    },
    {
      text: "Passionate about bringing ideas to life by designing user friendly website",
      strokeWidth: 1,
      textAlign: "center",
      color: "black",
      width: 500,

      y: 20,
      x: 0,
      duration: 1500,
    },
  ],
  {
    fontSize: 36,
  }
);

// nav bar activ section link
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".link");

  function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
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
