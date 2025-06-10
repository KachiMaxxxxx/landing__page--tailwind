import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  //reset: true, //this resets the animation on scroll
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 300,
  
});

//hero
sr.reveal(".hero__text", {
  origin: "top",
});
sr.reveal(".hero__img");

//stats
sr.reveal(".stats__item", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "top",
});

//services
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "bottom",
});

//appointment
sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

//testimonials
sr.reveal(".testimonials");
sr.reveal(".testimonials__container");

//team
sr.reveal(".team__title");
sr.reveal(".team__slider");

//faqs
sr.reveal(".faq__title");
sr.reveal(".faq__item", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "bottom",
});

//departments
sr.reveal(".departments__bg");
sr.reveal(".departments__container");

//blog
sr.reveal(".blog__title");
sr.reveal(".blog__post", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "bottom",
});

//brands
sr.reveal(".brands__logo", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "bottom",
});

//newsletter
sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

//footer

sr.reveal(".footer__item", {
  delay: 300,
  distance: "50px",
  interval: 100,
  origin: "bottom",
});
