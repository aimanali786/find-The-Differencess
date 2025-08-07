const totalSpots = 5;
let found = [];
let timeLeft = 120; // 2 minutes
let hintCount = 2;
let currentLevel = 1;


const levels = {
  1: {
    img1: "level1.png",
    img2: "level1b.png",
    spots: [
      { top: 23.2, left: 161.7 },
      { top: -11.5, left: 533.6 },
      { top: 121.4, left: 459.4 },
      { top: 189.7, left: 267 },
      { top:334, left: 405.9}
    ]
  },
 2: { 
    img1: "level2.png",
    img2: "level2b.png",
    spots: [
      { top: 68.3, left: 106.5 },
      { top: 146.1, left: 147.2 },
      { top: 141.3, left: 299.8 },
      { top: 261.1, left: 192 },
      { top:122.2, left: 336.9}
    ]
  },
  3: { 
    img1: "level3.png",
    img2: "level3b.png",
    spots: [
      { top: 91, left: 31.6 },
      { top: 209.6, left: 349 },
      { top: 1.3, left: 169.3 },
      { top: 0, left: 534 },
      { top:327, left: 534}
    ]
  },
  4: { 
    img1: "level4.png",
    img2: "level4b.png",
    spots: [
      { top: 238.5, left: 215.1 },
      { top: 189.1, left: 433.4 },
      { top: 56.2, left: 415.4 },
      { top: 51.7, left: 537.3 },
      { top:326.3, left: 387.6}
    ]
  },
  5: { 
    img1: "level5.png",
    img2: "level5b.png",
    spots: [
      { top: 335.7, left: 455 },
      { top: 200, left: 411.7 },
      { top: 163.1, left: 324.2 },
      { top: 163, left: 25.9 },
      { top:243.2, left: 263.2}
    ]
  },
   6: { 
    img1: "level6.png",
    img2: "level6b.png",
    spots: [
      { top: 254.1, left: 263.1 },
      { top: 264.9, left: 25.9 },
      { top: 90, left: 338.5 },
      { top: 73.2, left: 441.5 },
      { top:276.8, left: 537.3}
    ]
  },
   7: { 
    img1: "level7.png",
    img2: "level7b.png",
    spots: [
      { top: 101.5, left: 459.5 },
      { top: 136.2, left: 417.5 },
      { top: 326.1, left: 263.1 },
      { top: 55.4, left: 131.3 },
      { top:151.8, left: 184}
    ]
  },
   8: { 
    img1: "level8.png",
    img2: "level8b.png",
    spots: [
      { top: 217.1, left: 300 },
      { top: 250.7, left: 495.4 },
      { top: 65, left: 395.8 },
      { top: 286.1, left: 20.7 },
      { top:-15.2, left: 248.5}
    ]
  },
   9: { 
    img1: "level9.png",
    img2: "level9b.png",
    spots: [
      { top: 47.9, left: 239.1 },
      { top: 135.3, left: 178 },
      { top: 247.9, left: 0 },
      { top: 208.4, left: 414.4 },
      { top:136.5, left: 416.8}
    ]
  },
   10: { 
    img1: "level10.png",
    img2: "level10b.png",
    spots: [
      { top: 71.9, left: 428.7 },
      { top: 216.8, left: 510.2 },
      { top: 200, left: 271.9 },
      { top: 100.5, left:0 },
      { top:216.8, left: 10.8}
    ]
  },
   11: { 
    img1: "level11.png",
    img2: "level11b.png",
    spots: [
      { top: 178.4, left: 28.7 },
      { top: 199.9, left: 189.2 },
      { top: 81.4, left: 79 },
      { top: 68.2, left: 358.1 },
      { top:300.5, left:246.7}
    ]
  },
   12: { 
    img1: "level12.png",
    img2: "level12b.png",
    spots: [
      { top: 113.8, left: 40 },
      { top: 279.1, left: 465.1 },
      { top: 21.6, left: 157.4 },
      { top: 174.9, left: 196.9 },
      { top:294, left: 382.5}
    ]
  },
   13: { 
    img1: "level13.png",
    img2: "level13b.png",
    spots: [
      { top: 84.4, left: 159.8 },
      { top: 15, left: 58 },
      { top: 180.2, left: 14.9 },
      { top:312, left: 352.6 },
      { top:145.5, left: 248.4}
    ]
  },
   14: { 
    img1: "level14.png",
    img2: "level14b.png",
    spots: [
      { top: 101.2, left: 357.4 },
      { top: 151.5, left: 253.2 },
      { top: 200.3, left: 114.3},
      { top: 85.3, left: 90.3 },
      { top:134, left:534 }
    ]
  },
   15: { 
    img1: "level15.png",
    img2: "level15b.png",
    spots: [
      { top: 294, left: 332.8},
      { top: 200, left: 288.5 },
      { top: 49.1, left: 474.1 },
      { top: 216.8, left: 447.3 },
      { top:180.8, left: 112}
    ]
  },
   16: { 
    img1: "level16.png",
    img2: "level16b.png",
    spots: [
      { top: 167, left: 29.3 },
      { top: 279.6, left: 286.8 },
      { top: 208.9, left: 417.4 },
      { top: 256.8, left: 507.2},
      { top:0, left: 7}
    ]
  },
   17: { 
    img1: "level17.png",
    img2: "level17b.png",
    spots: [
      { top: 149.7, left: 252.5 },
      { top: 252.7, left:361.5  },
      { top: 294, left: 78.9 },
      { top: 176.6, left: 148.3 },
      { top:21, left: 179.5}
    ]
  },
   18: { 
    img1: "level18.png",
    img2: "level18b.png",
    spots: [
      { top: 268.1, left: 435.9 },
      { top: 167, left: 196.4 },
      { top: 116.7, left: 425.1 },
      { top: 244.9, left: 130.5 },
      { top:294, left: 285}
    ]
  },
   19: { 
    img1: "level19.png",
    img2: "level19b.png",
    spots: [
      { top: 175.4, left: 512.6 },
      { top: 188.6, left: 91 },
      { top: 232.9, left: 329.3 },
      { top: 268.9, left: 215.6 },
      { top:109.6, left: 275.4}
    ]
  },
   20: { 
    img1: "level20.png",
    img2: "level20b.png",
    spots: [
      { top: 40, left: 267 },
      { top: 167, left: 198.7 },
      { top: 176.6, left: 106.5 },
      { top: 258, left: 69.4 },
      { top:-10.2, left: 80.2}
    ]
  },
   21: { 
    img1: "level21.png",
    img2: "level21b.png",
    spots: [
      { top: 80.8, left: 106.5},
      { top: 248.4, left: 411.9 },
      { top: 166.8, left: 510.1 },
      { top: 294, left: 204.7 },
      { top:40, left: 352}
    ]
  },
   22: { 
    img1: "level22.png",
    img2: "level22b.png",
    spots: [
      { top: 134, left: 53.8 },
      { top: 266.9, left: 342.5 },
      { top: 134, left: 140.1 },
      { top: 134.1, left: 307.7 },
      { top:327, left: 161.6}
    ]
  },
   23: { 
    img1: "level23.png",
    img2: "level23b.png",
    spots: [
      { top: 19.2, left: 166.4 },
      { top: 182.1, left: 251.4 },
      { top: 124.6, left: 518.5 },
      { top: 251.6, left: 390.4 },
      { top:142.6, left: 134.1}
    ]
  },
};



const img2Container = document.getElementById("img2-container");
const clickSound = document.getElementById("click-sound");
const winSound = document.getElementById("win-sound");
const timerEl = document.getElementById("timer");
const foundEl = document.getElementById("found");
const hintBtn = document.getElementById("hint-btn");
loadLevel(currentLevel);
function loadLevel(level) {
  currentLevel = level;
  document.getElementById("level-display").textContent = "Level " + currentLevel;
  found = [];
  hintCount = 2;
  timeLeft = 120;
  document.getElementById("found").textContent = "0";
  document.getElementById("hint-btn").textContent = "🔍 Hint";
  document.querySelectorAll(".spot").forEach(el => el.remove());

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  img1.src = levels[level].img1;
  img2.src = levels[level].img2;

  clearInterval(timer);
  timerEl.textContent = "2:00";
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      if (timeLeft <= 30) {
        timerEl.classList.add("red-warning");
      } else {
        timerEl.classList.remove("red-warning");
      }
    } else {
      clearInterval(timer);
      document.getElementById("lose-screen").style.display = "flex";
    }
  }, 1000);
}

function addSpot(container, top, left, style = {}) {
  const spotEl = document.createElement("div");
  spotEl.className = "spot";
  spotEl.style.top = top + "px";
  spotEl.style.left = left + "px";
  Object.assign(spotEl.style, style);
  container.appendChild(spotEl);
}

  levels[currentLevel].spots.forEach((spot, index) => {
    if (!found.includes(index)) {
      const dx = x - spot.left;
      const dy = y - spot.top;
      if (Math.sqrt(dx * dx + dy * dy) < 30) {
        found.push(index);
        foundEl.textContent = found.length;
        addSpot(document.getElementById("img1-container"), spot.top, spot.left);
        addSpot(document.getElementById("img2-container"), spot.top, spot.left);
        clickSound.play();

        if (found.length === totalSpots) {
          winSound.play();
          clearInterval(timer);
          document.getElementById("win-screen").style.display = "flex";

          const nextBtn = document.getElementById("next-level-btn");
          if (levels[currentLevel + 1]) {
            nextBtn.style.display = "inline-block";
          } else {
            nextBtn.style.display = "none";
          }
        }
      }
    }
  });
document.getElementById("next-level-btn").addEventListener("click", () => {
  document.getElementById("win-screen").style.display = "none";
  loadLevel(currentLevel + 1);
});


document.getElementById("play-again-btn").addEventListener("click", () => {
  document.getElementById("lose-screen").style.display = "none";
  loadLevel(currentLevel); // restart same level
});


// Hint Button
hintBtn.addEventListener("click", () => {
  if (hintCount > 0) {
    const next = levels[currentLevel].spots.findIndex((_, i) => !found.includes(i));
    if (next !== -1) {
      const spot = levels[currentLevel].spots[next];
      addSpot(img2Container, spot.top, spot.left, {
        border: "3px dashed orange"
      });
      hintCount--;
      hintBtn.textContent = `🔍 Hint (${hintCount} left)`;
      setTimeout(() => {
        const hints = document.querySelectorAll(".spot[style*='dashed']");
        hints.forEach((hint) => hint.remove());
      }, 1500);
    }
  } else {
    alert("No hints left!");
  }
});