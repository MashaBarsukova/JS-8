const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

const activeBtn = {
  node: null
};

const switcher = document.querySelector("#slideThree");

const keyDown = (event) => {
  if (activeBtn.node !== null) {
      activeBtn.node.classList.remove("keyboard__btn--active");
    }
  if (event.key === " ") {
      const spaceBtn = document.querySelector(".keyboard__btn--space");
      spaceBtn.classList.add("keyboard__btn--active");
      activeBtn.node = spaceBtn;
      if (switcher.checked) {
          playSound(spaceBtn.getAttribute("data-note"));
        }
      }
  else {
    for (let item in buttons) {
      if (event.key === buttons[item].textContent) {
        buttons[item].classList.add("keyboard__btn--active");
        activeBtn.node = buttons[item];
        if (switcher.checked) {
          playSound(buttons[item].getAttribute("data-note"));
        }
      }
    }
  }
}

window.addEventListener("keydown", keyDown);
