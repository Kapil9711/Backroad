const aboutH2 = document.querySelector(".about h2");
const imgWrapper = document.querySelector(".about-img-wrapper");
const contentWrapper = document.querySelector(".about-content-wrapper");
const contentImgWrapper = document.querySelector(
  ".about__img-and-content-wrapper"
);

// accessing distance from top

const { top: topDistanceH2 } = aboutH2.getBoundingClientRect();
const { top: topDistanceImgContent } =
  contentImgWrapper.getBoundingClientRect();

//   listning to scroll

window.addEventListener("scroll", () => {
  // getting distance from top
  const { top: topDistanceH2 } = aboutH2.getBoundingClientRect();
  const { top: topDistanceImgContent } =
    contentImgWrapper.getBoundingClientRect();

  // getting the height of the client on scrolling
  let boxHeight = parseFloat(contentImgWrapper.clientHeight);
  let windowHeight = parseFloat(window.innerHeight);
  console.log(windowHeight, boxHeight);

  if (parseInt(topDistanceH2) < 10000) aboutH2.classList.add("originate");
  else aboutH2.classList.remove("originate");

  if (windowHeight - topDistanceImgContent >= parseFloat(boxHeight / 2 - 50)) {
    imgWrapper.classList.add("originate");
    contentWrapper.classList.add("originate");
  } else {
    imgWrapper.classList.remove("originate");
    contentWrapper.classList.remove("originate");
  }
});
