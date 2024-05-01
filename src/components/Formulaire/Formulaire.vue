<template>
  <h2>Me contacter</h2>

  <form @submit.prevent="submitForm">
    <p>
      Envie de me contacter ? N'hésitez pas à utiliser ce formulaire pour
      prendre contact avec moi !
    </p>

    <!--Alert message-->
    <div v-if="showErrorMessage">
        <div id="error-message">
            <div>
                <p>x</p>
                <h5>Tous les champs doivent être remplis.</h5>
            </div>
        </div>

    </div>

    <table>
      <tr>
        <td>
          <label for="last-name">Nom</label>
        </td>
        <td>
          <input
            v-model="lastName"
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Doe"
          />
        </td>
        <td>
          <label for="first-name">Prénom</label>
        </td>
        <td>
          <input
            v-model="firstName"
            type="text"
            id="first-name"
            name="first-name"
            placeholder="John"
          />
        </td>
      </tr>

      <tr>
        <td>
          <label for="email">Email</label>
        </td>
        <td colspan="3">
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="adresse@email.com"
          />
        </td>
      </tr>

      <tr>
        <td>
          <label for="object">Objet</label>
        </td>
        <td colspan="3">
          <input
            v-model="object"
            type="text"
            id="object"
            name="object"
            placeholder="ex: Renseignements"
          />
        </td>
      </tr>

      <tr>
        <td>
          <label for="message">Message</label>
        </td>
        <td colspan="3">
          <textarea
            v-model="message"
            name="message"
            id="message"
            placeholder="Bonjour, je vous contacte ..."
          ></textarea>
        </td>
      </tr>
    </table>

    <!--information message-->
    <div v-if="showSuccessMessage">
        <div id="information-message">
            <div>
                <p>!</p>
                <h5>Le mail a bien été envoyé.</h5>
            </div>
        </div>

    </div>

    <input type="hidden" name="recipient" value="valentin.hauspie@gmail.com" />
    <button type="submit">Envoyer</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      lastName: '',
      firstName: '',
      email: '',
      object: '',
      message: '',
      showErrorMessage: false,
      showSuccessMessage: false
    };
  },

  methods: {
    submitForm() {
      // Vérification que tous les champs sont remplis
      if (!this.lastName || !this.firstName || !this.email || !this.object || !this.message) {
        // Affichage du message d'erreur
        this.showErrorMessage = true;
        this.showSuccessMessage = false;
      } else {
        // Affichage du message d'information
        this.showErrorMessage = false;
        this.showSuccessMessage = true;

        // Réinitialisation des champs du formulaire
        this.resetForm();
      }
    },
    resetForm() {
      this.lastName = '';
      this.firstName = '';
      this.email = '';
      this.object = '';
      this.message = '';
    }
  }
};




</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
    @font-face {
    font-family: "braders";
    src: url(.../assets/police/braders/Braders.woff);
    src: url(.../assets/police/braders/Braders.otf) format("opentype");
    }
    @font-face {
    font-family: "Canva";
    src: url(.../assets/police/made_canvas/MADE-Canvas-Regular-PERSONAL-USE.woff);
    src: url(.../assets/police/made_canvas/MADE\ Canvas\ Regular\ PERSONAL\ USE.otf)
        format("opentype");
    }

    h2 {
        font-family: "Fjalla One", sans-serif;
        padding-top: 150px;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    /*ajout pointer sur les boutons*/
    button {
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    form{
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

    form p {
        font-weight: 300;
        text-align: center;
        padding: 10px;
    }

    /*style alert message*/

    #error-message div{
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
    #information-message div {
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


</style>
