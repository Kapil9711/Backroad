const aboutH2 = document.querySelector(".about h2");
const imgWrapper = document.querySelector(".about-img-wrapper");
const contentWrapper = document.querySelector(".about-content-wrapper");
const contentImgWrapper = document.querySelector(
  ".about__img-and-content-wrapper"
);

const firstContainer = document.querySelector(
  ".common-container:nth-of-type(1)"
);
const thirdContainer = document.querySelector(
  ".common-container:nth-of-type(3)"
);

// accessing distance from top

const { top: topDistanceH2 } = aboutH2.getBoundingClientRect();
const { top: topDistanceImgContent } =
  contentImgWrapper.getBoundingClientRect();

const { top: firstContainerTopDistance } =
  firstContainer.getBoundingClientRect();
const { top: thirdContainerTopDistance } =
  thirdContainer.getBoundingClientRect();

//   listning to scroll

window.addEventListener("scroll", () => {
  // getting distance from top
  const { top: topDistanceH2 } = aboutH2.getBoundingClientRect();
  const { top: topDistanceImgContent } =
    contentImgWrapper.getBoundingClientRect();

  const { top: firstContainerTopDistance } =
    firstContainer.getBoundingClientRect();
  const { top: thirdContainerTopDistance } =
    thirdContainer.getBoundingClientRect();

  // getting the height of the client on scrolling
  let boxHeight = parseFloat(contentImgWrapper.clientHeight);
  let firstContainerHeight = parseFloat(firstContainer.clientHeight);
  let windowHeight = parseFloat(window.innerHeight);
  console.log(windowHeight, boxHeight);

  if (parseInt(topDistanceH2) < 10000) aboutH2.classList.add("originate");
  else aboutH2.classList.remove("originate");

  console.log(topDistanceImgContent);
  if (
    windowHeight - topDistanceImgContent >= parseFloat(boxHeight / 2 - 50) &&
    topDistanceImgContent > -parseFloat(boxHeight)
  ) {
    imgWrapper.classList.add("originate");
    contentWrapper.classList.add("originate");
  } else {
    imgWrapper.classList.remove("originate");
    contentWrapper.classList.remove("originate");
  }
  if (
    windowHeight - firstContainerTopDistance >=
    parseFloat(firstContainerHeight / 2 - 50)
  ) {
    firstContainer.classList.add("originate");
    thirdContainer.classList.add("originate");
  } else {
    firstContainer.classList.remove("originate");
    thirdContainer.classList.remove("originate");
  }
});

// const galleryImgWrapper = document.querySelector("gallery ");

// applying smooth scrolling

const anchorBtn = document.querySelectorAll("body a");

for (let link of anchorBtn) {
  link.addEventListener("click", smoothScroling);
}

function smoothScroling(event) {
  event.preventDefault();
  console.log(event, this);
  const href = this.getAttribute("href");
  const offSetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offSetTop,
    behavior: "smooth",
  });

  // document.querySelector(href).scrollIntoView({
  //   bahavior: "smooth",
  // });
}
