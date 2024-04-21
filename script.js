// /////////////////////////// MENU OPTIMIZATIONS
let menuIcon = document.querySelector(".menu-icon");
navBar = document.querySelector(".nav-bar");
menu = document.querySelector(".menu");
hamburger = document.querySelector(".hamburger");
closeMenu = document.querySelector(".close-menu");
logo = document.querySelector(".logo");

// Opening the menu
menuIcon.onclick = () => {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
    closeMenu.classList.toggle("open");
    logo.classList.toggle("open");
};

// /////////////////////////// Actions on Scroll
let oldScroll = window.pageYOffset;

window.onscroll = () => {
    // Remove Menu on Scroll
    menu.classList.remove("open");
    hamburger.classList.remove("open");
    closeMenu.classList.remove("open");
    logo.classList.remove("open");

    // Navigation bar pop up on scroll
    let newScroll = window.pageYOffset;

    newScroll < oldScroll ?
        (navBar.style.top = "0") :
        (navBar.style.top = "-100%");

    oldScroll = newScroll;
};

// /////////////////////////////// FEATURES TAB

let traitTab = document.querySelectorAll(".trait-tab");
feature = document.querySelectorAll(".feature");
traitDecor = document.querySelectorAll(".trait-decor");

for (let j = 0; j < feature.length; j++) {
    traitDecor[j].style.display = "none";
    traitDecor[0].style.display = "block";
}

for (let i = 0; i < traitTab.length; i++) {
    traitTab[i].onclick = () => {
        for (let j = 0; j < feature.length; j++) {
            traitTab[j].classList.remove("active");
            feature[j].style.transform = `translateX(calc(${-100 * i}% - ${
        20 * i
      }rem))`;
            traitDecor[j].style.display = "none";
        }
        traitTab[i].classList.add("active");
        traitDecor[i].style.display = "block";
    };
}

// /////////////////////////////// FAQs ZONE

let expand = document.querySelectorAll(".expand");
faqAns = document.querySelectorAll(".faq-ans");
faqQue = document.querySelectorAll(".faq-que");

for (let i = 0; i < expand.length; i++) {
    faqQue[i].onclick = () => {
        expand[i].classList.toggle("view");
        faqAns[i].classList.toggle("view");
    };
}
// /////////////////////////////// FOOTER CONTACT

let contactBtn = document.querySelector(".contact-cta");
error = document.querySelector(".error");
alertSign = document.querySelector(".alert");
emailEntry = document.querySelector("#emailEntry");
emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

contactBtn.onclick = () => {
    if (emailRegex.test(emailEntry.value)) {
        alertSign.classList.remove("wrong");
        error.classList.remove("wrong");
        emailEntry.classList.remove("wrong");
    } else {
        alertSign.classList.add("wrong");
        error.classList.add("wrong");
        emailEntry.classList.add("wrong");
    }
};