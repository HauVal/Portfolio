<template>
    <header>
      <!--balise div ajouter pour faciliter la mise en page css-->
      <div>
        <a href=".../index.html"> <!--lien pour retour en haut de page-->
          <img
            src="../assets/images/Developpement.png"
            alt="Dessin d'un écran d'ordinateur avec un navigateur ouvert. Derrière l'écran il y a des engranges bleu." 
          >
        </a>
        
        <h1>Portfolio <br> HAUSPIE Valentin</h1>  
      </div>
      
      <nav>
        <a href=".../index.html#presentation">Présentation</a>
        <a href=".../index.html#créations">Mes créations</a>
        <a href="./index.html#contact">Contact</a>
      </nav>
    </header>
    <main>
      <section>
        <h2>Erreur 404</h2>

        <img 
          src="../assets/images/Ordinateur.avif" 
          alt="dessin d'un ordinateur avec un clavier et une souris.
          sur l'écran il y a l'iage d'un dossier intitulé no data avec 
          une bulle de discution où se trouve trois point d'intérogation."
        >

        <p>
          Il semble que la page demandée n'existe pas.
        </p>

        <div>
          <a href=".../index.html">
            Revenir à la page d'acceuil
          </a>
        </div>
      </section>
        
    </main>

    <footer>
      <div>

        <!--Pour les réseau sociaux, j'ai mis exprès les liens des pages d'acceuil (sauf pour GitHub)-->
        <a href="https://fr.linkedin.com/" target="_blank">
          <img 
            src="../assets/images/linkedin.png" 
            alt="Logo de Linkedin"
          >
        </a>

        <a href="https://twitter.com/?lang=fr" target="_blank">
          <img
            src="../assets/images/twitter.png"
            alt="Logo de twitter"
          >
        </a>

        <a href="https://github.com/HauVal" target="_blank">
          <img 
            src="../assets/images/github.png" 
            alt="Logo GiitHub"
          >
        </a>

        <a href="https://www.facebook.com" target="_blank">
          <img 
            src="../assets/images/facebook.png" 
            alt="Logo Facebook"
          >
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <img 
            src="../assets/images/instagram.png" 
            alt="Logo instagram"
          >
        </a>
      </div>

      <p>
        <small>
          Dernière mise à jour le
          <time datetime="2024-04-24">24 avril 2024</time><!--Date à changer à la fin du projet-->
        </small>
      </p>

    </footer>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@font-face {
    font-family: "braders" ;
    src: url(../assets/police/braders/Braders.woff);
    src: url(../assets/police/braders/Braders.otf) format('opentype');
}
@font-face {
    font-family: "SuperMario";
    src: url(../assets/police/super_mario_bros_3/Super-Mario-Bros-3.woff);
    src: url(../assets/police/super_mario_bros_3/Super-Mario-Bros--3.ttf) format('opentype');
}
@font-face {
    font-family: "PKMN";
    src: url(../assets/police/pkmn_rbygsc/PKMN-RBYGSC.woff);
    src: url(../assets/police/pkmn_rbygsc/PKMN\ RBYGSC.ttf) format('opentype');
}

header {
    border-bottom-style: solid;
    position: fixed; /*Fixe le header pour le scrolling*/
    top: 0; /*fait en sorte que le header prenne bien tout le haut de la page*/
    left: 0;
    width: 100%;
    background-image: url(../assets/images/backgroud-header.jpg);
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

nav a{
    text-decoration: none;
    color: #f8f8f8;
    font-family: "M PLUS Rounded 1c", sans-serif;
}

nav a:hover {
    text-decoration: underline;
}

nav a:focus {
    color: #9c8a8a;
    text-decoration: underline;
}

main section{
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    margin-top: 130px;
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

footer p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

footer a {
    text-decoration: none;
}
</style>