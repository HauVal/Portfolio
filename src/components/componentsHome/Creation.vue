<template>
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
</template>

<script setup>

import ContenuCv from "@/components/ContenuCv.vue";
import ContenuCahier from "@/components/ContenuCahier.vue";
import ContenuCom from "@/components/ContenuComment.vue";

</script>

<style scoped>
h2 {
  font-family: "Fjalla One", sans-serif;
  padding-top: 150px;
}

h3 {
  font-family: "Canva", serif;
  font-weight: 700;
}

img {
  height: 300px;
  border-style: solid;
  border-color: #75949e;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
}

img:hover {
  box-shadow: 15px 15px 40px rgba(150, 146, 146, 0.932);
}

div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
