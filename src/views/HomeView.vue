<template>
      <section id="presentation">
        <h2>HAUSPIE Valentin</h2>
  
        <p>
          Je m'appelle Hauspie Valentin et j'ai 29 ans. Je suis originaire du Nord
          et je suis actuellement en formation de Développeur Web. Avant de
          commencer cette formation, je travaillais dans l'animation auprès des
          jeunes de 3 à 12 ans en tant qu'animateur des temps périscolaires
          (cantine, garderie, etc.) et directeur de centre de loisirs. Je suis
          également musicien, ayant suivi une formation professionnelle aux
          métiers de la musique. Je donnais également des cours de batterie dans
          une école de musique. Je suis également le batteur du groupe BlackDog
          qui joue des reprises de musiques rock/blues des années 70 à 90. J'ai
          décidé de me lancer dans une carrière de développeur web car cela
          m'intéresse depuis le lycée et que j'avais toujours hésité entre la
          musique et le développement web, ce qui va me permettre de pouvoir
          combiner les deux.
        </p>
      </section>
  
      <section id="créations">
        <h2>Mes créations</h2>
        <div>
          <!--Balise ajouté pour faciliter la mise en page css-->
          <article>
            <h3>Mon CV</h3>
  
            <img src="@/assets/images/CV.png" alt="CV rouge et blanc" />
  
            <!--Bouton information du modal CV-->
            <contenuCv></contenuCv>
          </article>
  
          <article>
            <h3>Mon premier cahier des charges</h3>
  
            <img
              src="@/assets/images/Cahier-des-charges.png"
              alt="Page de couverture vert et blanc d'un cahier des charges de site web pour l'entreprise la Socketerie"
            />
            <!--Bouton information du modal Cahier-->
            <contenuCahier></contenuCahier>
          </article>
  
          <article>
            <h3>Espace commentaire dynamisé</h3>
  
            <img
              src="@/assets/images/espace-commentaires.png"
              alt="image d'un espace commentaire avec plusieurs commentaire afficher et un formulaire d'envoi"
            />
            <!--Bouton information du modal espace de commentaire-->
            <contenuCom></contenuCom>
          </article>
        </div>
      </section>
  
      <section id="contact">
        <formulaire></formulaire>
      </section>
 
  </template>
  
  <script setup>
  
  import Formulaire from "@/components/Formulaire/Formulaire.vue";
  import ContenuCv from "@/components/ContenuCv.vue";
  import ContenuCahier from "@/components/ContenuCahier.vue";
  import ContenuCom from "@/components/ContenuComment.vue";
  
  
  </script>
  
  <style scoped>
  /*import police*/
  @import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
  @font-face {
    font-family: "braders";
    src: url(@/assets/police/braders/Braders.woff);
    src: url(@/assets/police/braders/Braders.otf) format("opentype");
  }
  @font-face {
    font-family: "Canva";
    src: url(@/assets/police/made_canvas/MADE-Canvas-Regular-PERSONAL-USE.woff);
    src: url(@/assets/police/made_canvas/MADE\ Canvas\ Regular\ PERSONAL\ USE.otf)
      format("opentype");
  }
  
  /*police des h2 et p*/
  h2 {
    font-family: "Fjalla One", sans-serif;
  }
  
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  /*style présentation*/
  #presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #presentation h2 {
    padding-top: 150px;
  }
  
  #presentation p {
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  /*style mes créations*/
  #créations {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #créations h2 {
    padding-top: 150px;
  }
  
  h3 {
    font-family: "Canva", serif;
    font-weight: 700;
  }
  
  #créations img {
    height: 300px;
    border-style: solid;
    border-color: #75949e;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
  }
  
  #créations img:hover {
    box-shadow: 15px 15px 40px rgba(150, 146, 146, 0.932);
  }
  
  #créations div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  #créations article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /*ajout pointer sur les boutons*/
  button {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  /*style  contact*/
  #contact {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  </style>