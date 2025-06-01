import "./input.css";


const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closedBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-right-s-line";
const arrowRightClass = "ri-arrow-left-s-line";

closeBtn.addEventListener("click", () =>{
    if (mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);

        closedBtnIcn.classList.toggle(arrowLeftClass);
        closedBtnIcn.classList.toggle(arrowRightClass);
    }
    });