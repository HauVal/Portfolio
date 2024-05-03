<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <button v-on:click="toggleModale" class="btn-modale btn btn-danger">
        x
      </button>
      <h4>Cahier des charges : La Socketterie</h4>
      <p>
        Date de création :
        <time datetime="2024-03-20">20 mars 2024</time>
      </p>
      <p>Technologie utilisée : Microsoft Word et Canvas</p>
      <p>
        <a
          href="https://www.dropbox.com/scl/fi/xlqc2pw4kft99k0kqqzug/Cahier-des-charges-La-socketterie.pdf?rlkey=ja7pyyovaso3lez1fqprzn57j&st=5enbj0lq&dl=0"
          target="_blank"
        >
          Voir le cahier des charges
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "modaleCahier",
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
