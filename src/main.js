import "./input.css";
document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mnav");
  const closeBtn = document.querySelector(".mnav__close-btn");
  const closedBtnIcn = document.querySelector(".mnav__close-btn-icon");
  const selectIcons = document.querySelectorAll(".ri-arrow-down-s-line");
  const selectInputs = document.querySelectorAll(".select__input");

  const navOpenedClass = "left-0";
  const navClosedClass = "-left-[300px]";
  const arrowLeftClass = "ri-close-line";
  const arrowRightClass = "ri-menu-2-line";
  const arrowDownClass = "ri-arrow-down-s-line";
  const arrowUpClass = "ri-arrow-up-s-line";

  closeBtn.addEventListener("click", () => {
    const navIsClosed = mobileNav.classList.contains(navClosedClass);
    if (navIsClosed) {
      mobileNav.classList.remove(navClosedClass);
      mobileNav.classList.add(navOpenedClass);

      closedBtnIcn.classList.remove(arrowRightClass);
      closedBtnIcn.classList.add(arrowLeftClass);
    } else {
      mobileNav.classList.remove(navOpenedClass);
      mobileNav.classList.add(navClosedClass);

      closedBtnIcn.classList.remove(arrowLeftClass);
      closedBtnIcn.classList.add(arrowRightClass);
    }
  });
  document.addEventListener("click", (e) => {
    const navIsOpen = mobileNav.classList.contains(navOpenedClass);
    const clickedOutsideNav =
      !mobileNav.contains(e.target) && !closedBtnIcn.contains(e.target);

    if (clickedOutsideNav && navIsOpen) {
      mobileNav.classList.remove(navOpenedClass);
      mobileNav.classList.add(navClosedClass);

      closedBtnIcn.classList.remove(arrowLeftClass);
      closedBtnIcn.classList.add(arrowRightClass);
    }
  });

  selectInputs.forEach((selectInput) => {
    selectInput.addEventListener("focus", () => {
      const selectIconIsOpen = selectIcon.classList.contains(arrowDownClass);
      if (selectIconIsOpen) {
        selectIcon.classList.remove(arrowDownClass);
        selectIcon.classList.add(arrowUpClass);
      }
    });
  });
  selectInputs.forEach((selectInput) => {
    selectInput.addEventListener("blur", () => {
      const selectIconIsClosed = selectIcon.classList.contains(arrowUpClass);
      if (selectIconIsClosed) {
        selectIcon.classList.remove(arrowUpClass);
        selectIcon.classList.add(arrowDownClass);
      }
    });
  });
});
