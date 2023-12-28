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

var app = document.getElementById("typingarea");

var typewriter = new Typewriter(app, {
  loop: true,
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

window.addEventListener("scroll", () => {
  nav_header.classList.toggle("sticky", window.scrollY > 40);
});

const readMore = () => {
  document.querySelector("#readmoreLink").classList.toggle("hide");
  document.querySelector("#readmore").classList.toggle("hide");
};

AOS.init();

/* document.querySelector("#themeSwitch").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
}) */

const counters = document.querySelectorAll(".count-value");
const speed = 100;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("data-count");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 150);
    } else {
      counter.innerText = value;
    }
  };

  animate();
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
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
    disableOnInteraction: false,
  },
  navigation: {
    navigationHide: "true",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  $(".formcarryForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    // REQUIRED FOR LOADER
    var form = $(this);
    var href = form.attr("action");
    var button = form.find('button[type="submit"]');

    // REQUIRED FOR LOADER
    // Save original button text so we can use it after successful request.
    var buttonText = button.text();
    // Create a new element with the SVG loader
    // Reference: https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/90-ring-with-bg.svg
    var loader = $(
      '<svg fill="#fff" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .75s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"/></svg>'
    );

    // REQUIRED FOR LOADER
    // Change button text with loader
    button.html(loader);
    button.prop("disabled", true);

    var myToast = $.toast({
      text: "Sending your form message.",
      hideAfter: false,
      bgColor: "#000",
    });

    $.ajax({
      type: "POST",
      url: href,
      data: new FormData(this),
      dataType: "json",
      processData: false,
      contentType: false,
      complete: function () {
        // REQUIRED FOR LOADER
        // Remove loader svg and revert old button text.
        button.html(buttonText);
        button.prop("disabled", false);
      },
      success: function (response) {
        if (response.status == "success") {
          button.html("Submitted");
          myToast.update({
            text: "Your Message has been Recieved!",
            bgColor: "#202020",
          });
        } else if (response.code === 422) {
          myToast.update({
            text: "Field Validation Failed: Please fill all the fields in right format",
            bgColor: "#DF1C41",
          });
          $.each(response.errors, function (key) {
            $('[name="' + key + '"]').addClass("formcarry-field-error");
          });
        } else {
          var name = document.querySelector("#fc-generated-1-name").value,
            msg = document.querySelector("#fc-generated-1-message").value,
            subject = "Mail from " + name + " via Portfolio";
          window.location.href =
            "mailto:itsamaan.warsi@gmail.com?subject=" +
            subject +
            "&body=" +
            msg;
        }
      },
      error: function (jqXHR, textStatus) {
        const errorObject = jqXHR.responseJSON;
        myToast.update({
          text: errorObject.title + ": " + errorObject.message,
          bgColor: "#DF1C41",
        });
      },
    });
  });
});
