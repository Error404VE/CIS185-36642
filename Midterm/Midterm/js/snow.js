// Canvas-based snow generator (moved into js/)
(function () {
    const SNOW_COUNT = 60; // number of flakes
    const WIND = 0.15; // slow horizontal drift

    function rand(min, max) { return Math.random() * (max - min) + min; }

    let canvas, ctx, flakes = [], w, h, rafId;

    function createCanvas() {
        canvas = document.createElement('canvas');
        canvas.className = 'snow-canvas';
        canvas.style.zIndex = '1';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        resize();
    }

    function resize() {
        if (!canvas) return;
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function makeFlakes() {
        flakes = [];
        for (let i = 0; i < SNOW_COUNT; i++) {
            flakes.push({
                x: rand(0, w),
                y: rand(-h, h),
                r: rand(1, 4),
                vy: rand(8, 28) / 60, // px per frame roughly slow
                vx: rand(-WIND, WIND),
                alpha: rand(0.4, 0.95)
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        for (let f of flakes) {
            ctx.globalAlpha = f.alpha;
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function step() {
        for (let f of flakes) {
            f.x += f.vx;
            f.y += f.vy;
            // gentle sway
            f.vx += rand(-0.02, 0.02) * 0.2;
            // wrap or reset
            if (f.y > h + 10) {
                f.y = rand(-20, -5);
                f.x = rand(0, w);
            }
            if (f.x < -10) f.x = w + 10;
            if (f.x > w + 10) f.x = -10;
        }
        draw();
        rafId = window.requestAnimationFrame(step);
    }

    function init() {
        createCanvas();
        makeFlakes();
        step();
        window.addEventListener('resize', () => {
            resize();
            makeFlakes();
        });
        // ensure main content is above canvas
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(el => {
            if (el === canvas) return;
            if (!el.classList || el.classList.contains('snow-canvas')) return;
            el.classList.add('site-content');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
