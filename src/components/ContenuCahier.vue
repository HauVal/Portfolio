<template>

    <div class="container">

        <modalecahier v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modalecahier>

        <button v-on:click="toggleModale" class="btn btn-succe">Informations</button>
    </div>

</template>

<script>

    import ModaleCahier from './ModaleCahier.vue';

    export default {
        name: 'ContenuCahier',
        data() {
            return {
                revele: false
            }
        },
        components: {
            'modalecahier': ModaleCahier
        },
        methods: {
            toggleModale: function() {
                this.revele = !this.revele
            }
        }
    }
</script>

<style scoped>
    .btn {
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>