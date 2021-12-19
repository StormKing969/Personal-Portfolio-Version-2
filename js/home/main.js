const navMenu = $("#nav-menu");
const navToggle = $("#nav-toggle");
const navClose = $("#nav-close");

// Show menu 
if(navToggle) {
    navToggle.click(e => {
        navMenu.addClass("show_menu");
    })
}

// Hid menu
if(navClose) {
    navClose.click(e => {
        navMenu.removeClass("show_menu");
    })
}

// Remove menu when a selection is made
const navLink = $(".nav_link");

navLink.click(e => {
    navMenu.removeClass("show_menu");
});


// Open & close skill tabs
function toggleSkills(chosen) {
    var choseClassID = chosen.id;
    var choseClassName = chosen.className;
    
    // console.log(choseClassID)
    // console.log(choseClassName)
    if(choseClassName === "skills_content skills_close") {
        $("#" + choseClassID).removeClass("skills_close");
        $("#" + choseClassID).addClass("skills_open");
    }

    if(choseClassName === "skills_content skills_open") {
        $("#" + choseClassID).removeClass("skills_open");
        $("#" + choseClassID).addClass("skills_close");
    }
}

// TO DO
// const tabs = $("[data-target]");
// const tabContents = $("[data-content]");

// // console.log(tabContents[0].dataset)
// // console.log(tabs[0].dataset)

// $.each(tabs , e => {  
//     // console.log((tabs[e].dataset.target));
//     $("" + tabs[e].className).click(e => {
//         console.log("hi")
//     });
//   });  

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})


// Portfolio slider from SwiperJS
let swiper = new Swiper(".portfolio_container", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});