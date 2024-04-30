<template>
        <header>
      <!--balise div ajouter pour faciliter la mise en page css-->
      <div>
        <a href="#"> <!--lien pour retour en haut de page-->
          <img
            src="./assets/images/Developpement.png"
            alt="Dessin d'un écran d'ordinateur avec un navigateur ouvert. Derrière l'écran il y a des engranges bleu." 
          >
        </a>
        
        <h1>Portfolio <br> HAUSPIE Valentin</h1>  
      </div>
      
      <nav>
        <a href="#presentation">Présentation</a>
        <a href="#créations">Mes créations</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="presentation">
        <h2>HAUSPIE Valentin</h2>

        <p>
          Je m'appelle Hauspie Valentin et j'ai 29 ans. Je suis originaire du Nord et je suis actuellement 
          en formation de Développeur Web. Avant de commencer cette formation, je travaillais dans 
          l'animation auprès des jeunes de 3 à 12 ans en tant qu'animateur des temps périscolaires 
          (cantine, garderie, etc.) et directeur de centre de loisirs. Je suis également musicien, 
          ayant suivi une formation professionnelle aux métiers de la musique. Je donnais également 
          des cours de batterie dans une école de musique. Je suis également le batteur du groupe 
          BlackDog qui joue des reprises de musiques rock/blues des années 70 à 90.
          J'ai décidé de me lancer dans une carrière de développeur web car cela m'intéresse depuis 
          le lycée et que j'avais toujours hésité entre la musique et le développement web, 
          ce qui va me permettre de pouvoir combiner les deux.
        </p>
      </section>

      <section id="créations">
        <h2>Mes créations</h2>
        <div> <!--Balise ajouté pour faciliter la mise en page css-->
          <article>
            <h3>Mon CV</h3>
  
          <img 
            src="./assets/images/CV.png" 
            alt="CV rouge et blanc"
          >
          <button class="modal-btn modal-trigger">Informations</button>
          </article>
  
          <article>
            <h3>Mon premier cahier des charges</h3>
  
          <img 
            src="./assets/images/Cahier-des-charges.png" 
            alt="Page de couverture vert et blanc d'un cahier des charges de site web pour l'entreprise la Socketerie"
          >
          <button class="modal-btn modal-trigger">Informations</button>
          </article>
  
          <article>
            <h3>Espace commentaire dynamisé</h3>
  
          <img 
            src="./assets/images/espace-commentaires.png" 
            alt="image d'un espace commentaire avec plusieurs commentaire afficher et un formulaire d'envoi"
          >
          <button class="modal-btn modal-trigger">Informations</button>
          </article>
        </div>
      </section>

      <section id="contact">
        <h2>Me contacter</h2>

        <form action="#" method="post" id="Form" onsubmit="displayMessages();">
          <p>
            Envie de me contacter ? N'hésitez pas à utiliser ce formulaire pour prendre contact avec moi !
          </p>

          <!--Alert message-->
          <div id="error-message">
            <div>
              <p>x</p>
              <h5>Tous les champs doivent être remplis.</h5>
            </div>
          </div>

          <table>
            <tr>
              <td>
                <label for="last-name">Nom</label>
              </td>
              <td>
                <input type="text" id="last-name" name="last-name" placeholder="Doe">
              </td>
              <td>
                <label for="first-name">Prénom</label>
              </td>
              <td>
                <input type="text" id="first-name" name="first-name" placeholder="John">
              </td>
            </tr>

            <tr>
              <td>
                <label for="email">Email</label>
              </td>
              <td colspan="3">
                <input type="email" id="email" name="email" placeholder="adresse@email.com">
              </td>
            </tr>

            <tr>
              <td>
                <label for="object">Objet</label>
              </td>
              <td colspan="3">
                <input type="text" id="object" name="object" placeholder="ex: Renseignements">
              </td>
            </tr>
            
            <tr>
              <td>
                <label for="message">Message</label>
              </td>
              <td colspan="3">
                <textarea name="message" id="message" placeholder="Bonjour, je vous contacte ..."></textarea>
              </td>
            </tr>
          </table>
          
          <!--information message-->
          <div id="information-message">
            <div>
              <p>!</p>
              <h5>Le mail a bien été envoyé.</h5>
            </div>
          </div>

          <input type="hidden" name="recipient" value="valentin.hauspie@gmail.com">
          <button type="submit">Envoyer</button>
        
        </form>
      </section>
    </main>

    <footer>
      <div>

        <!--Pour les réseau sociaux, j'ai mis exprès les liens des pages d'acceuil (sauf pour GitHub)-->
        <a href="https://fr.linkedin.com/" target="_blank">
          <img 
            src="./assets/images/linkedin.png" 
            alt="Logo de Linkedin"
          >
        </a>

        <a href="https://twitter.com/?lang=fr" target="_blank">
          <img
            src="./assets/images/twitter.png"
            alt="Logo de twitter"
          >
        </a>

        <a href="https://github.com/HauVal" target="_blank">
          <img 
            src="./assets/images/github.png" 
            alt="Logo GiitHub"
          >
        </a>

        <a href="https://www.facebook.com" target="_blank">
          <img 
            src="./assets/images/facebook.png" 
            alt="Logo Facebook"
          >
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <img 
            src="./assets/images/instagram.png" 
            alt="Logo instagram"
          >
        </a>
      </div>

      <p>
        <small>
          Dernière mise à jour le
          <time datetime="2024-04-24">24 avril 2024</time><!--Date à changer à la fin du projet-->
        </small>
      </p>

    </footer>

    <!--modal dynamique CV-->
    <div class="modal-container">

      <div class="overlay modal-trigger"></div>

      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
        <button aria-label="close modal" class="close-modal modal-trigger">X</button>
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
          
    <!--modal dynamique Cahier-->
    <!--<div class="modal-container">
      <div class="overlay modal-trigger"></div>
  
      <div class="modal">
        <button class="close-modal modal-trigger">X</button>
        <h4>Cahier des charges : La Socketterie</h4>
        <p>
          Date de création : 
          <time datetime="2024-03-20">20 mars 2024</time>
        </p>
        <p>Technologie utilisée : Microsoft Word et Canvas</p>
        <p>
          <a href="./assets/projets/Cahier des charges La socketterie.pdf" target="_blank">
            Voir le cahier des charges
          </a>
        </p>
      </div>
    </div>-->
          
    <!--modal dynamique espace commentaire-->
    <!--<div class="modal-container"></div>
      <div class="overlay modal-trigger"></div>
  
      <div class="modal">
        <button class="close-modal modal-trigger">X</button>
        <h4>Dynamiser un espace commentaire avec JavaScript</h4>
        <p>
          Date de création : 
          <time datetime="2024-04-15">15 avril 2024</time>
        </p>
        <p>Technologie utilisée : HTML5 et JavaScript</p>
        <p>
          <a href="https://github.com/HauVal/DynamiserUnEspaceCommentaire" target="_blank">
            Lien repository
          </a>
        </p>
      </div>-->
</template>

<script setup>
</script>

<style scoped>
/*import police*/
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@font-face {
    font-family: "braders" ;
    src: url(./assets/police/braders/Braders.woff);
    src: url(./assets/police/braders/Braders.otf) format('opentype');
}
@font-face {
    font-family: "Canva";
    src: url(./assets/police/made_canvas/MADE-Canvas-Regular-PERSONAL-USE.woff);
    src: url(./assets/police/made_canvas/MADE\ Canvas\ Regular\ PERSONAL\ USE.otf) format('opentype');
}

/*Mise en place du header */
header {
    border-bottom-style: solid;
    position: fixed; /*Fixe le header pour le scrolling*/
    top: 0; /*fait en sorte que le header prenne bien tout le haut de la page*/
    left: 0;
    width: 100%;
    background-image: url(./assets/images/backgroud-header.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

header img {
    box-sizing: content-box;
    padding-right: 20px;
    padding-left: 20px;
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: 16px;
}

header h1 {
    font-family: "braders", serif;
    box-sizing: content-box;
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
}

header div {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

nav {
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

nav a{
    text-decoration: none;
    color: #f8f8f8;
    font-family: "M PLUS Rounded 1c", sans-serif;
}

nav a:hover {
    text-decoration: underline;
}

nav a:focus {
    color: #9c8a8a;
    text-decoration: underline;
}

/*police des h2 et p*/
h2 {
    font-family: "Fjalla One", sans-serif;
}

p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

/*style présentation*/
#presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#presentation h2 {
    padding-top: 150px;
}

#presentation p {
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
}

/*style mes créations*/
#créations {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#créations h2 {
    padding-top: 150px;
}

h3 {
    font-family: "Canva", serif;
    font-weight: 700;
}

#créations img {
    height: 300px;
    border-style: solid;
    border-color: #75949e;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
}

#créations img:hover {
    box-shadow: 15px 15px 40px rgba(150, 146, 146, 0.932);
}

#créations div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

#créations article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/*ajout pointer sur les boutons*/
button {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

/*style  contact*/
#contact {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}

#contact form{
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    border: 1px solid;
    border-radius: 8px;
    padding: 0 50px 0 50px;
}

#contact h2 {
    padding-top: 150px;
}

form p {
    font-weight: 300;
    text-align: center;
    padding: 10px;
}

/*style alert message*/

#error-message{
    display: none;
}

#error-message div{
    display: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#error-message div p {
    background-color: #f02d2d;
    border-radius: 50%;
    height: 2px;
    width: 2px;
    margin-right: 10px;
    font-size: 0.8em;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

#error-message h5 {
    color: #f85b5b;
    font-weight: 700;
}

/*style champ formulaire*/
form tr label {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}

form tr input, form tr textarea {
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
}

#email, #object {
    width: 580px;
    height: 30px;
}

#last-name, #first-name {
    margin: 10px;
    width: 241.5px;
    height: 30px;
}

form tr textarea {
    margin: 10px;
    width: 580px;
    height: 100px;
}

form tr input {
    height: 20px;
    margin: 10px;

}

form button {
    margin-bottom: 50px;
    width: 450px;
    max-width: 500px;
    height: 60px;
    font-weight: 700;
    font-size: 28px;
    background: white;
    border: black solid 1px;
    border-radius: 5px;
    color: #303030;
    margin-top: 25px;
    }

/*Style message information*/
#information-message {
    display: none;
}

#information-message div {
    display: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#information-message div p {
    background-color: #3df02d;
    color: #303030;
    border-radius: 50%;
    height: 2px;
    width: 2px;
    margin-right: 10px;
    font-size: 0.8em;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

#information-message h5 {
    color: #7df85b;
    font-weight: 700;
}

/*Style footer*/
footer {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer img {
    height: 30px;
    box-sizing: content-box;
    padding-right: 5px;
    padding-left: 5px;
}

footer a {
    text-decoration: none;
}
</style>
