<template>
    <!--modal dynamique CV-->
    <div class="bloc-modal">

    <div class="overlay"></div>

    <div class="modal card">
        <button class="btn-modale btn btn-danger">X</button>
        <h4 id="modalTitle">CV Hauspie Valentin</h4>
        <p>
            <strong>Date de création :</strong> 
            <time datetime="2024-03-07">7 mars 2024</time>
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
    name: 'Modale'
}
</script>


<style>

</style>