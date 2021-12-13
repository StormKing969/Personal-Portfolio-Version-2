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


function toggleSkills(clicked) {
    
    var classes = clicked.className;
    var classID = clicked[0];

    console.log(clicked)
    console.log(classes)
    console.log(classID)
    if("skills_content skills_close" === classes) {

        clicked.removeClass("skills_close");
        clicked.addClass("skills_open");
    }
}