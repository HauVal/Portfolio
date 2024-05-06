<template>
  <section id="presentation">
    <presentation></presentation>
  </section>

  <section id="créations">
    <creation></creation>
  </section>

  <section id="contact">
    <formulaire></formulaire>
  </section>
</template>

<script setup>
import Presentation from "@/components/componentsHome/Presentation.vue";
import Creation from "@/components/componentsHome/Creation.vue";
import Formulaire from "@/components/componentsHome/Formulaire.vue";
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

#presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#créations {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*ajout pointer sur les boutons*/
button {
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

#contact {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
</style>
