// ==========================================================
// VOID STRIKE: efectes visuals de la pagina del joc.
// Tots son opcionals: la pagina funciona igual sense JavaScript
// i respecta la preferencia "reduir moviment" del sistema.
// ==========================================================
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Fons d'estrelles amb canvas ---
    var canvas = document.getElementById('stars');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var stars = [];

        var crearEstrelles = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (var i = 0; i < 160; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.2,
                    a: Math.random(),
                    speed: Math.random() * 0.4 + 0.1
                });
            }
        };

        var dibuixar = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(function (s) {
                if (!reduceMotion) {
                    s.a += s.speed * 0.01;
                    if (s.a > 1) s.a = 0;
                }
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100,180,255,' + s.a + ')';
                ctx.fill();
            });
            if (!reduceMotion) requestAnimationFrame(dibuixar);
        };

        crearEstrelles();
        dibuixar();

        window.addEventListener('resize', function () {
            crearEstrelles();
            if (reduceMotion) dibuixar();
        });
    }

    // --- Efecte glitch al titol ---
    var glitch = document.querySelector('.glitch');
    if (glitch && !reduceMotion) {
        setInterval(function () {
            glitch.classList.add('active-glitch');
            setTimeout(function () { glitch.classList.remove('active-glitch'); }, 200);
        }, 3000);
    }

    // --- Capcalera en fer scroll ---
    var header = document.querySelector('header');
    if (header) {
        var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 50); };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Aparicio progressiva de les targetes ---
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('visible'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach(function (el, i) {
        el.style.transitionDelay = (i % 4) * 0.12 + 's';
        observer.observe(el);
    });
})();
