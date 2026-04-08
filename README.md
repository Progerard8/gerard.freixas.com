<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>VOID STRIKE</title>
    <link rel="stylesheet" href="CssWeb.css">
</head>
<body>

    <header>
        <h1>VOID STRIKE</h1>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="#features">Características</a>
            <a href="Descargas.html">Descargas</a>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h2 id="title">Sobrevive al Chaos</h2>
            <p>Un FPS intens amb mode de nivells.</p>
            <button onclick="downloadGame()">Descarga Ya</button>
        </div>
    </section>

    <section class="features" id="features">
        <h2>Características</h2>
        <div class="cards">
            <div class="card">
                <h3>Combate FPS</h3>
                <p>Acción rápida en primera persona.</p>
            </div>

            <div class="card">
                <h3>Enemigos inteligentes</h3>
                <p>IA que te pondrá al límite.</p>
            </div>

            <div class="card">
                <h3>Arsenal variado</h3>
                <p>Armas futuristas y explosivas.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>© 2026 VOID STRIKE</p>
    </footer>

    <script>// Botón descarga
    function downloadGame(){
        alert("Descarga próximamente disponible");
    }

    // Animación título tipo glitch
    const title = document.getElementById("title");
    setInterval(()=>{
        title.style.textShadow = "0 0 10px #1e90ff, 0 0 20px #1e90ff";
        setTimeout(()=>{
            title.style.textShadow = "none";
        },150);
    },2000);

    // Efecto aparición cards
    const cards = document.querySelectorAll(".card");
    window.addEventListener("scroll",()=>{
        cards.forEach(card=>{
            const rect = card.getBoundingClientRect();
            if(rect.top < window.innerHeight - 50){
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    });

    cards.forEach(card=>{
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s";
    });</script>

</body>
</html>
