const mobile_nav = document.querySelector(".toggle-menu");
const nav_header = document.querySelector("header");
const menu_icon = mobile_nav.querySelector("i");
const nav_links = document.querySelectorAll(".nav ul li a");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  menu_icon.classList.toggle("fa-times");
};


nav_links.forEach((i) => {
  i.addEventListener("click", () => toggleNavbar());
});
mobile_nav.addEventListener("click", () => toggleNavbar());


var app = document.getElementById('typingarea');

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .pauseFor(1500)
  .typeString("I'm a Web Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a Digital Marketer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a Freelancer")
  .pauseFor(1000)
  .start();


window.addEventListener('scroll', () => {
  nav_header.classList.toggle("sticky", window.scrollY > 60);
});


const readMore = () => {
  document.querySelector('#readmoreLink').classList.toggle("hide")
  document.querySelector('#readmore').classList.toggle("hide")

}

AOS.init();

/* document.querySelector("#themeSwitch").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
}) */


const counters = document.querySelectorAll('.count-value');
const speed = 100;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('data-count');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 150);
    } else {
      counter.innerText = value;
    }

  }

  animate();
});


const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.querySelector("#fc-generated-1-name").value,
    // mail = document.querySelector("#fc-generated-1-email").value,
    msg = document.querySelector("#fc-generated-1-message").value,
    subject = "Mail from " + name + " via Portfolio";

  // alert(name+'\n '+email+'\n '+msg)

  window.location.href = "mailto:itsamaan.warsi@gmail.com?subject=" + subject + "&body=" + msg;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper_skills = new Swiper(".mySwiper-skills", {
  slidesPerView: 3,
  rewind: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    navigationHide: "true"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});



