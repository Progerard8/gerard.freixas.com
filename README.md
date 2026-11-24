# gerard.freixas.com

Portfolio personal de **Gerard Freixas Matas**, estudiant d'Informàtica (SMX) a La Salle Girona.
Xarxes, ciberseguretat i desenvolupament de videojocs amb C++ i Unreal Engine 5.

## Contingut

| Pàgina | Descripció |
|--------|------------|
| [`index.html`](index.html) | Portfolio: sobre mi, el camí fins aquí, projectes i contacte |
| [`void-strike/`](void-strike/index.html) | Pàgina del projecte **VOID STRIKE** (videojoc FPS amb Unreal Engine 5) |
| [`Descargas.html`](Descargas.html) | Redirecció a la descàrrega, perquè els enllaços antics continuïn funcionant |

## Disseny

El portfolio parteix d'una idea: el **greybox**, la graella gris amb què es bloquegen els nivells a Unreal Engine.

- **Colors:** formigó, llosa i tinta, amb un únic groc de senyal que només s'usa com a farciment (botons i marca), sempre amb text fosc a sobre.
- **Tipografia:** Barlow Condensed per als títols i el nom, i Barlow per al text. És la mateixa família en dues amplades, amb aire de senyalització d'infraestructura.
- **Moviment:** un sol moment en carregar (el nom puja dins la seva línia). No hi ha cap animació més.
- **La pàgina del joc** conserva el seu propi estil neó, amb Orbitron i Exo 2.

Els colors i la tipografia són variables al principi de `assets/css/style.css` (`:root`).

## Característiques

- **Web estàtica**: HTML i CSS. El portfolio **no té JavaScript propi**; només la pàgina del joc en fa servir, per als efectes visuals. Les dues pàgines carreguen l'script de Vercel Web Analytics (estadístiques de visites, sense cookies), servit des del mateix domini (`/_vercel/insights`). Sense frameworks, sense `npm` i sense procés de compilació.
- **Sense serveis de tercers**: totes les tipografies estan al repositori, de manera que el navegador no fa cap petició a Google ni a cap CDN.
- **Responsiva**: revisada des de 390 px d'amplada (mòbil) fins a escriptori.
- **Accessible**: HTML semàntic, enllaç «Salta al contingut», navegació amb teclat, contrast WCAG AA en tot el text i respecte a la preferència «reduir moviment».
- **Imprimible**: el portfolio té estils d'impressió per desar-lo com a PDF (Ctrl + P).

## Estructura

```text
gerard.freixas.com/
├── index.html              Portfolio
├── Descargas.html          Redirecció a void-strike/#descarrega
├── void-strike/
│   └── index.html          Pàgina del joc
├── assets/
│   ├── css/
│   │   ├── style.css       Estils del portfolio
│   │   └── void-strike.css Estils (neó) de la pàgina del joc
│   ├── js/
│   │   └── void-strike.js  Efectes de la pàgina del joc
│   ├── fonts/              Barlow, Barlow Condensed, Orbitron i Exo 2 (WOFF2, subconjunt llatí)
│   └── img/                Favicon i imatge de previsualització (Open Graph)
└── .nojekyll               Indica a GitHub Pages que no processi el lloc amb Jekyll
```

Tots els enllaços són **relatius**, així que la web funciona igual penjada en una subcarpeta que en un domini propi.

## Executar-la en local

Només cal obrir `index.html` al navegador. Si prefereixes un servidor local:

```bash
python -m http.server 8000
# i obre http://localhost:8000
```

## Publicació

És un lloc estàtic: es serveix tal qual, sense compilar. El repositori es desplega a **Vercel** i també a **GitHub Pages**.

## Per actualitzar el contingut

- **Sobre mi, camí, projectes i contacte**: `index.html`. Els textos són en primera persona; edita'ls directament.
- **Foto**: copia la imatge a `assets/img/` i descomenta el bloc `<figure class="portrait">` de la secció «Sobre mi» a `index.html`.
- **Previsualització en compartir l'enllaç** (LinkedIn, xarxes): les etiquetes `og:*` de la capçalera dels dos HTML. La imatge `og:image` fa servir l'URL absolut de la web; **si canvies de domini, actualitza'l**. La imatge és `assets/img/og-cover.png` (1200 × 630).

## Llicències

- Codi del repositori: © Gerard Freixas Matas.
- Tipografies **Barlow**, **Barlow Condensed**, **Orbitron** i **Exo 2**: [SIL Open Font License 1.1](https://openfontlicense.org/).
