<template>
  <header>
    <!--balise div ajouter pour faciliter la mise en page css-->
    <div>
      <a href="#">
        <!--lien pour retour en haut de page-->
        <img
          src="./assets/images/Developpement.png"
          alt="Dessin d'un écran d'ordinateur avec un navigateur ouvert. Derrière l'écran il y a des engranges bleu."
        />
      </a>

      <h1>
        Portfolio <br />
        HAUSPIE Valentin
      </h1>
    </div>

    <nav>
      <a href="/#presentation">Présentation</a>
      <a href="/#créations">Mes créations</a>
      <a href="/#contact">Contact</a>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <div>
      <!--Pour les réseau sociaux, j'ai mis exprès les liens des pages d'acceuil (sauf pour GitHub)-->
      <a href="https://fr.linkedin.com/" target="_blank">
        <img src="@/assets/images/linkedin.png" alt="Logo de Linkedin" />
      </a>

      <a href="https://twitter.com/?lang=fr" target="_blank">
        <img src="@/assets/images/twitter.png" alt="Logo de twitter" />
      </a>

      <a href="https://github.com/HauVal" target="_blank">
        <img src="@/assets/images/github.png" alt="Logo GiitHub" />
      </a>

      <a href="https://www.facebook.com" target="_blank">
        <img src="@/assets/images/facebook.png" alt="Logo Facebook" />
      </a>

      <a href="https://www.instagram.com/" target="_blank">
        <img src="@/assets/images/instagram.png" alt="Logo instagram" />
      </a>
    </div>

    <p>
      <small>
        Dernière mise à jour le
        <time datetime="2024-05-06">6 mai 2024</time
        >
      </small>
    </p>
  </footer>
</template>

<script setup>


</script>

<style scoped>
/*import police*/
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@font-face {
  font-family: "braders";
  src: url(./assets/police/braders/Braders.woff);
  src: url(./assets/police/braders/Braders.otf) format("opentype");
}
@font-face {
  font-family: "Canva";
  src: url(./assets/police/made_canvas/MADE-Canvas-Regular-PERSONAL-USE.woff);
  src: url(./assets/police/made_canvas/MADE\ Canvas\ Regular\ PERSONAL\ USE.otf)
    format("opentype");
}
  @font-face {
    font-family: "SuperMario";
    src: url(./assets/police/super_mario_bros_3/Super-Mario-Bros-3.woff);
    src: url(./assets/police/super_mario_bros_3/Super-Mario-Bros--3.ttf)
      format("opentype");
  }
  @font-face {
    font-family: "PKMN";
    src: url(./assets/police/pkmn_rbygsc/PKMN-RBYGSC.woff);
    src: url(./assets/police/pkmn_rbygsc/PKMN-RBYGSC.ttf) format("opentype");
  }

/*Mise en place du header */
header {
  border-bottom-style: solid;
  position: fixed; /*Fixe le header pour le scrolling*/
  top: 0; /*fait en sorte que le header prenne bien tout le haut de la page*/
  left: 0;
  width: 100%;
  background-image: url(./assets/images/backgroud-header.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header img {
  box-sizing: content-box;
  padding-right: 20px;
  padding-left: 20px;
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 16px;
}

header h1 {
  font-family: "braders", serif;
  box-sizing: content-box;
  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
}

header div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

nav {
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

nav a {
  text-decoration: none;
  color: #f8f8f8;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

nav a:hover {
  text-decoration: underline;
}

nav a:active {
  color: #9c8a8a;
  text-decoration: underline;
}

/*police des h2 et p*/
h2 {
  font-family: "Fjalla One", sans-serif;
}

/*Style footer*/
footer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer img {
  height: 30px;
  box-sizing: content-box;
  padding-right: 5px;
  padding-left: 5px;
}

footer a {
  text-decoration: none;
}
</style>
