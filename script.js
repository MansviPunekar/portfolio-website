let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove(-bx-x);
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: [
      '<span style="color: #e74c3c;">Frontend Developer</span>',
      '<span style="color: #3498db;">Backend Developer</span>',
      '<span style="color: #2ecc71;">Web Designer</span>',
      '<span style="color: #9b59b6;">Graphic Designer</span>'
    ],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
  });

  function toggleAbout() {
  const moreText = document.getElementById("more-text");
  const btn = event.target;

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}
function toggleReadMore(id, btn) {
  const content = document.getElementById(id);
  if (content.style.display === "none") {
    content.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    content.style.display = "none";
    btn.textContent = "Read More";
  }
}

  