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
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
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

p {
  font-family: "PKMN";
  padding: 20px;
}

a {
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
