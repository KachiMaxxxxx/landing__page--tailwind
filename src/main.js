import "./input.css";
document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mnav");
  const closeBtn = document.querySelector(".mnav__close-btn");
  const closedBtnIcn = document.querySelector(".mnav__close-btn-icon");
  const selectItem = document.querySelectorAll(".select");
  const faqItems = document.querySelectorAll(".faq__item");

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

  selectItem.forEach((item) => {
    item.addEventListener("click", () => {
      const iconBtn = item.querySelector(".icon__btn i");
      const selectIsClicked = item.classList.contains("clicked");

      if (selectIsClicked) {
        item.classList.remove("clicked");
        iconBtn.classList.remove(arrowDownClass);
        iconBtn.classList.add(arrowUpClass);
      } else {
        item.classList.add("clicked");
        iconBtn.classList.remove(arrowUpClass);
        iconBtn.classList.add(arrowDownClass);
      }
    });
  });

  

  faqItems.forEach((item) => {
    const faqBtn = item.querySelector(".faq__btn");
    item.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";
      const iconElement = faqBtn.querySelector("i");
      iconElement.className = `${iconClass} text-2xl`;
    });
  });
});
