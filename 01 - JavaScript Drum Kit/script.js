const keys = document.querySelectorAll(".key"); //All keys

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}" ]`);

  if (!audio) return; //Stop the function from running
  audio.currentTime = 0; //Rewind to the start
  audio.play();
  key.classList.add("playing");

  const removeTransform = function (e) {
    console.log(e);
    if (e.propertyName !== "transform") return;

    this.classList.remove("playing");
  };
  keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
});
