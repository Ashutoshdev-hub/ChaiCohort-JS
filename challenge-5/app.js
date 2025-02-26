const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const captionElement = document.getElementById("caption");
const prevButtonElement = document.getElementById("prevButton");
const nextButtonElement = document.getElementById("nextButton");
const carouselNavElement = document.getElementById("carouselNav");
const autoplayElement = document.getElementById("autoPlayButton");
const timerElement = document.getElementById("timerDisplay");
const image = document.createElement("img");

let i = 0;
function carouselTracker(index) {
  image.src = images[index].url;
  image.classList.add("carouselTrack");
  captionElement.innerText = images[index].caption;
  carouselTrack.appendChild(image);
}
images.forEach((items, index) => {
  const carouselNavs = document.createElement("div");
  carouselNavs.classList.add("tracker")
  carouselNavs.classList.add("carousel-indicator");
  carouselNavElement.append(carouselNavs);
  if (index === i) {
    carouselNavs.classList.add("active");
  }
});
carouselTracker(i);

nextButtonElement.addEventListener("click", function () {
  if (i < images.length - 1) {
    i++;
    carouselTracker(i);
    const indTracker = document.querySelectorAll(".tracker");
    indTracker.forEach((item, index) => {
      if (index === i) item.classList.add("active");
      else item.classList.remove("active");
    });
    console.log(indTracker);
  } else {
    i = images.length - 1 - i;

    carouselTracker(i);
    const indTracker = document.querySelectorAll(".tracker");

    indTracker.forEach((item, index) => {
      if (index === i) item.classList.add(".tracker");
      else item.classList.remove("active");
    });
    console.log(indTracker);
  }
});

prevButtonElement.addEventListener("click", function () {
  if (i > 0) {
    i--;
    carouselTracker(i);
    const indTracker = document.querySelectorAll(".tracker");

    indTracker.forEach((item, index) => {
      if (index === i) item.classList.add("active");
      else item.classList.remove("active");
    });
    console.log(indTracker);
  } else {
    i = images.length - 1 + i;

    carouselTracker(i);
    const indTracker = document.querySelectorAll(".tracker");

    indTracker.forEach((item, index) => {
      if (index === i) item.classList.add("active");
      else item.classList.remove("active");
    });
    console.log(indTracker);
  }
});
let interval;

function callTimer(time) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (time > 0) {
      timerElement.innerText = `Next slide in ${time}s`;
      time--;
    } else {
      clearInterval(interval);

      if (i < images.length - 1) {
        nextButtonElement.click();
      } else {
        prevButtonElement.click();
      }
      callTimer(5);
    }
  }, 1000);
}
autoplayElement.addEventListener("click", () => {
  if (autoplayElement.innerText === "Start Auto Play") {
    autoplayElement.innerText = "Stop Auto Play";
    callTimer(5);
  } else {
    autoplayElement.innerText = "Start Auto Play";
    clearInterval(interval);
    timerElement.innerText = "";
  }
});
