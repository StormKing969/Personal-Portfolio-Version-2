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
let swiperPortfolio = new Swiper(".portfolio_container", {
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

// Testimonial slider from SwiperJS
let swiperTestimonial = new Swiper(".testimonial_container", {
  effect: "cube",
  loop: true,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.9,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// Color the menu 
$(document).scroll(function () {
  $('section').each(function () {
      if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()-50) > $(document).scrollTop()) {
        $(".nav_" + $(this).attr('id')).addClass("active_link");
      } else {
        $(".nav_" + $(this).attr('id')).removeClass("active_link");
      }
  });
});

// const sections = document.querySelectorAll('section[id]')


// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         console.log(current)
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

// Add some shadow to the top of the navbar
const nav = $("header");
const scrollIcon = $("#scroll-up");

$(window).scroll(e =>  {
  if(this.scrollY >= 90) {
    nav.addClass("scroll_header");
  } else {
    nav.removeClass("scroll_header");
  }
});

// Show up arrow after scroll a bit
$(window).scroll(e =>  {
  if(this.scrollY >= 560) {
    scrollIcon.addClass("show_scrollUp");
  } else {
    scrollIcon.removeClass("show_scrollUp");
  }
});