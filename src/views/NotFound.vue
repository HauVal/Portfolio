<template>
  <section>
    <h2>Erreur 404</h2>

    <img
      src="../assets/images/Ordinateur.avif"
      alt="dessin d'un ordinateur avec un clavier et une souris.
          sur l'écran il y a l'iage d'un dossier intitulé no data avec 
          une bulle de discution où se trouve trois point d'intérogation."
    />

    <p>Il semble que la page demandée n'existe pas.</p>

    <div>
      <a href="/"> Revenir à la page d'acceuil </a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
  @font-face {
    font-family: "braders";
    src: url(../assets/police/braders/Braders.woff);
    src: url(../assets/police/braders/Braders.otf) format("opentype");
  }
  @font-face {
    font-family: "SuperMario";
    src: url(../assets/police/super_mario_bros_3/Super-Mario-Bros-3.woff);
    src: url(../assets/police/super_mario_bros_3/Super-Mario-Bros--3.ttf)
      format("opentype");
  }
  @font-face {
    font-family: "PKMN";
    src: url(../assets/police/pkmn_rbygsc/PKMN-RBYGSC.woff);
    src: url(../assets/police/pkmn_rbygsc/PKMN\ RBYGSC.ttf) format("opentype");
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px
  }

  h2 {
    font-family: "SuperMario";
  }

  section img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
  }

  section p {
    font-family: "PKMN";
    padding: 20px;
  }

  main section div a {
    padding: 10px;
    text-decoration: none;
    color: white;
    border-style: solid;
    border-width: 3px;
    border-color: white;
    background-color: black;
    border-radius: 5px;
    font-weight: 600;
  }
</style>
