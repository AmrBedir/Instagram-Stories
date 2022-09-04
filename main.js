const allStories = [
  {
    thumbUrl: "images/1-thumb.png",
    imageUrl: "images/1.png",
    title: "Title No. 1",
  },

  {
    thumbUrl: "images/2-thumb.png",
    imageUrl: "images/2.png",
    title: "Title No. 2",
  },

  {
    thumbUrl: "images/3-thumb.png",
    imageUrl: "images/3.png",
    title: "Title No. 3",
  },

  {
    thumbUrl: "images/4-thumb.png",
    imageUrl: "images/4.png",
    title: "Title No. 4",
  },

  {
    thumbUrl: "images/5-thumb.png",
    imageUrl: "images/5.png",
    title: "Title No. 5",
  },

  {
    thumbUrl: "images/6-thumb.png",
    imageUrl: "images/6.png",
    title: "Title No. 6",
  },

  {
    thumbUrl: "images/7-thumb.png",
    imageUrl: "images/7.png",
    title: "Title No. 7",
  },

  {
    thumbUrl: "images/8-thumb.png",
    imageUrl: "images/8.png",
    title: "Title No. 8",
  },
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");

let currentIndex = 0;
let timer;

allStories.forEach((s, i) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const img = document.createElement("img");
  img.setAttribute("src", s.thumbUrl);

  storiesContainer.appendChild(content);
  content.appendChild(img);

  content.addEventListener("click", () => {
    currentIndex = i;
    storyFull.classList.add("active");
    storyFullImage.setAttribute("src", s.imageUrl);

    if (!s.title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = s.title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });
});

closeBtn.addEventListener("click", () => {
  storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  }
});

const nextStory = () => {
  if (currentIndex < allStories.length - 1) {
    currentIndex += 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }
  }
};

rightArrow.addEventListener("click", () => {
  nextStory();
  clearInterval(timer);
  timer = setInterval(nextStory, 5000);
});
