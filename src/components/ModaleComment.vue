<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <button v-on:click="toggleModale" class="btn-modale btn btn-danger">
        x
      </button>
      <h4>Dynamiser un espace commentaire avec JavaScript</h4>
      <p>
        <strong>Date de création : </strong>
        <time datetime="2024-04-15">15 avril 2024</time>
      </p>
      <p><strong>Technologie utilisée :</strong> HTML5 et JavaScript</p>
      <p>
        <a
          href="https://github.com/HauVal/DynamiserUnEspaceCommentaire"
          target="_blank"
        >
          Lien repository
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modaleCom",
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: 900;
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
  display: flex;
  margin-bottom: 10px;
  font-family: "Canva", serif;
  font-weight: 700;
  font-size: 1.6em;
  text-decoration: underline;
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
