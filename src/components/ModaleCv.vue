<template>
  <!--modale dynamique CV-->

  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <button v-on:click="toggleModale" class="btn-modale btn btn-danger">
        x
      </button>
      <h4>CV Hauspie Valentin</h4>
      <p>
        <strong>Date de création :</strong>
        <time datetime="2024-03-07"> 7 mars 2024</time>
      </p>
      <p>
        <strong>Technologie utilisée :</strong>
        HTML5 et CSS3
      </p>
      <p>
        <a href="https://github.com/HauVal/mon-cv" target="_blank">
          Lien repository
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modaleCv",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #3d3434;
  padding: 50px;
  position: fixed;
  top: 25%;
}

p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.modale p a {
  text-decoration: none;
  color: #f8f8f8;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;
}

.modale p a:hover {
  text-decoration: underline;
}

.modal p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 5px;
}

h4 {
  margin-bottom: 10px;
  font-family: "Canva", serif;
  font-weight: 700;
}

.btn-modale {
  cursor: pointer;
  background-color: red;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
