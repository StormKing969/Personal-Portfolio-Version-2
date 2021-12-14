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