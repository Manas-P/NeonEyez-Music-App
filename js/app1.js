const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");

  //Sound
  const sounds = document.querySelectorAll(".sound-picker button");

  //Time Display
  const timeDisplay = document.querySelector(".time-display");

  //Get Length of Outline
  const outlineLenght = outline.getTotalLength();

  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLenght;
  outline.style.strokeDashoffset = outlineLenght;

  //Play Sound
  play.addEventListener("click", () => {
    song.play();
  });
};

app();
