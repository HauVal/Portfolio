<template>
  <div class="container">
    <modalecv
      v-bind:revele="revele"
      v-bind:toggleModale="toggleModale"
    ></modalecv>

    <button v-on:click="toggleModale" class="btn btn-succe">
      Informations
    </button>
  </div>
</template>

<script>
import ModaleCv from "./ModaleCv.vue";

export default {
  name: "ContenuCv",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modalecv: ModaleCv,
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
