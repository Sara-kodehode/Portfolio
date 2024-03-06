// animated text home page
var vara = new Vara(
  "#animated-text",
  "./fonts/Parisienne/Parisienne.json",
  [
    {
      text: "Hello ",
      textAlign: "center",
      strokeWidth: 1.5,
      y: 80,
      duration: 200,
    },
    {
      text: "My name is",
      color: "black",
      textAlign: "center",
      strokeWidth: 1.5,
      y: 5,
      x: 0,
      duration: 300,
    },
    {
      text: "Sarah Hussein",
      width: 500,
      color: "black",
      textAlign: "center",
      strokeWidth: 2,
      y: 10,
      x: 0,
      duration: 200,
    },
    {
      text: "I work on bringing ideas to life by designing user friendly website",
      strokeWidth: 1,
      textAlign: "center",
      color: "black",
      width: 400,
      y: 20,
      x: 0,
      duration: 2000,
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

//  preview the btn cv in empty tab
const cvBtn = document.getElementById("cv-btn");
cvBtn.addEventListener("click", function () {
  window.open("Sarah-Hussein.docx.pdf", "_blank");
});
