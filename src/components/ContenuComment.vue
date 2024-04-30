<template>

    <div class="container">

        <modalecom v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modalecom>

        <button v-on:click="toggleModale" class="btn btn-succe">Informations</button>
    </div>

</template>

<script>

    import ModaleCom from './ModaleComment.vue';

    export default {
        name: 'ContenuCom',
        data() {
            return {
                revele: false
            }
        },
        components: {
            'modalecom': ModaleCom
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