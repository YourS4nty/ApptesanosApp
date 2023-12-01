<template>
  <ion-content>
    <div class="allContent" :class="{ 'show': documentVisible, 'epic-hide': isHidden }">
      <div class="menu">
        <div class="menu-top">
          <div class="expr">
            <img src="@/media/icon.svg" alt="Apptesanos">
            <p>Apptesanos</p>
          </div>
          <div class="infoPersonxd">
            <img id="userImageMenu" src="@/media/noPP.svg" alt="">
            <div class="textsPerson">
              <span id="userNm">Apptesanos</span>
              <span id="userEm">Porfavor Ingresa :)</span>
            </div>
          </div>
        </div>

        <div class="menu-bottom">
          <div class="listOpts">
            <span><font-awesome-icon :icon="['far', 'star']" class="faicon" /><a href="/thanks">Creditos</a></span>
            <span><font-awesome-icon :icon="['fas', 'question-circle']" class="faicon" /><a
                href="https://wa.me/573108103500?text=Hola%2C%20Busco%20Soporte%20Acerca%20De%20Apptesanos%21%21"
                target="_blank">Ayuda</a></span>
          </div>
        </div>

      </div>
      <div class="menu__toggler" @click="handleClick"><span></span></div>

      <!-- Encabezado de la aplicación -->
      <header class="head">
        <img src="@/media/icon.svg" alt="ApptesanosIcon">
        <p>Apptesanos</p>
      </header>

      <!-- Sección principal (main) -->
      <main>
        <!-- Carga de imagen -->
        <div class="UpImage">
          <div class="image-upload-container" @click="triggerImageUpload">
            <img v-if="!selectedImage" src="@/media/regisIcon.svg" alt="AddImage">
            <img v-else :src="FinalImage" alt="Imagen seleccionada" class="image-preview">
            <canvas id="canvasRecorte" width="150" height="150" style="display: none;"></canvas>
            <input type="file" accept="image/*" ref="imageInput" style="display: none;" @change="handleImageUpload">
          </div>
        </div>

        <!-- Formulario de registro -->
        <div class="signup">
          <form>
            <div class="input-section2">
              <font-awesome-icon :icon="['far', 'envelope']" class="faicon" />
              <input v-model="userName" autocomplete="Username" type="text" placeholder="Correo Electrónico" required>
            </div>
            <br>
            <br>
            <div class="input-section2">
              <font-awesome-icon :icon="['fa', 'person']" class="faicon" />
              <input v-model="companyName" type="text" placeholder="Empresa" required>
            </div>
            <br>
            <br>
            <div class="input-section2">
              <font-awesome-icon :icon="['fa', 'key']" class="faicon" />
              <input v-model="password" autocomplete="new-password" type="password" placeholder="Contraseña" required>
            </div>
          </form>

          <div class="question-box">
            <button type="submit" class="btn" id="login-btn" @click="ejecutarSignup"
              :disabled="desactivarClick">Registrar</button>
            <p v-if="error" id="badUser">{{ error }}</p>
            <p id="goodUser" style="display: none;">Usuario Registrado Exitosamente</p>
            <p class="reg-btn" @click="redirect">Ya Tengo Cuenta</p>
          </div>


          <div class="pop-up">
            <div class="box">
              <h3>Usuario Registrado</h3>
              <p>Has Sido Registrado Correctamente, Para Empezar A Usar La Aplicación,<br>Inicia Sesion Usando El
                Siguiente
                Boton</p>
              <a href="/login" class="buttonL">Iniciar Sesion</a>
            </div>
          </div>



        </div>
      </main>
    </div>
  </ion-content>
</template>

<style scoped>
.pop-up {
  display: block;
  position: fixed;
  margin: -10% auto;
  left: 0;
  right: 0;
  z-index: 999;
  transform: translateX(-500px);
  transition: all 450ms ease-in-out;
}

.pop-up.active {
  transform: translateX(0);
}

.box {
  background-color: whitesmoke;
  width: 90%;
  height: 350px;
  text-align: center;
  margin: auto;
  position: relative;
  border: 1px solid cornflowerblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
}

.buttonL {
  padding: 10px;
  border-radius: 5px;
  margin: 10% auto;
  background-color: #9EBE8F;
  color: aliceblue;
  margin-bottom: 33px;
}

/* General Styles */

/* Button Styles */
.reg-btn {
  width: 40%;
  color: orangered;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  margin: o auto;
}

/* Button Styles */
.btn {
  background: #9EBE8F;
  width: 45%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.3);
}

/* Container Styles */
.question-box {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Background for Testing (OnlyTest) */
  /* background: #005c9c; */
  height: 30%;
  width: 100%;
  bottom: 10px;
}

/* Input Styles */
input {
  background: transparent;
}

/* Header Styles */
.head p {
  padding-top: 7px;
  font-size: 2.2rem;
}

.head img {
  width: 60px;
}

/* Image Upload Styles */
.UpImage {
  margin-top: 5%;
}

.image-upload-container {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Box Shadow Effect */
  box-shadow:
    rgba(50, 50, 93, 0.30) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.40) 0px -2px 6px 0px inset;
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.30) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.5) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.40) 0px -2px 6px 0px inset;
}

/* Signup Form Styles */
.signup form input {
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 8px;
}

.signup {
  width: 100%;
  height: 60%;
  /* Background for Testing (OnlyTest) */
  /* background: #005c9c; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
}

/* Additional Styles */
.input-section2 {
  border: 1px solid darkslategray;
  border-radius: 7px;
  padding: 4px;
}
</style>
  


<script>
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ref, uploadBytes, getDownloadURL, getBlob } from 'firebase/storage';
import { storage } from '@/firebase'

export default defineComponent({
  create() {
    this.logOut().then(() => {
      console.log('Correcto')
    }).catch((error) => {
      console.log(error)
    });
  },
  data() {
    return {
      documentVisible: false,
      selectedImage: null,
      imagenRecortada: '',
      FinalImage: '',
      desactivarClick: false,
      canvasRecorte: null,
      isHidden: false,
      userName: '',
      companyName: '',
      password: '',
      error: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.documentVisible = true;
    }, 100);
  },
  methods: {
    recortarImagen() {
      const imagen = new Image();
      imagen.src = this.selectedImage;

      // Obtener el elemento canvas por su id
      const canvas = document.getElementById('canvasRecorte');

      if (canvas) {
        const contexto = canvas.getContext('2d');
        imagen.onload = () => {
          const tamanioRecorte = Math.min(imagen.width, imagen.height);
          const x = (imagen.width - tamanioRecorte) / 2;
          const y = (imagen.height - tamanioRecorte) / 2;
          canvas.width = 150;
          canvas.height = 150;
          contexto.drawImage(imagen, x, y, tamanioRecorte, tamanioRecorte, 0, 0, 150, 150);
          this.guardarImagenRecortada(canvas);
        };
      } else {
        console.error('Elemento canvas no encontrado.');
      }
    },
    async guardarImagenRecortada(canvas) {
      // var imagenRecortadaUrl = canvas.toDataURL('image/jpeg');
      // const imagenBlob = await fetch(imagenRecortadaUrl).then((response) => response.blob());
      // const imagenUrl = URL.createObjectURL(imagenBlob); 
      // this.imagenRecortada = imagenUrl.target.files[0];

      var imagenRecortadaUrl = canvas.toDataURL('image/jpeg');
      const imagenBlob = await fetch(imagenRecortadaUrl).then((response) => response.blob());

      // Crear un objeto de archivo a partir del blob
      const imagenFile = new File([imagenBlob], 'Tesing.jpg', { type: 'image/jpeg' });
      // Mostrar Imagen Recortada
      const finalIMageView = URL.createObjectURL(imagenFile)

      this.FinalImage = finalIMageView
      this.imagenRecortada = imagenFile;
    },
    logOut() {
      signOut(getAuth())// Aquí también es necesario pasar getAuth()
        .then(() => {
          console.log('Sesión cerrada correctamente');
        })
        .catch((error) => {
          console.log('Error al cerrar sesión:', error);
        });
    },
    ejecutarSignup() {
      if (!this.desactivarClick) {
        this.registerUser();
      }
    },
    async registerUser() {
      if (!this.userName || !this.password) {
        this.error = 'Porfavor Verifica Todos Los Campos.';
        return;
      }

      try {
        const userCredentials = await createUserWithEmailAndPassword(getAuth(), this.userName, this.password);
        const userF = userCredentials.user;
        const showxxd = document.querySelector('.pop-up');
        showxxd.classList.toggle('active');
        // Verifica si el usuario se ha creado correctamente
        if (userF) {

          const fileNameToUser = userF.uid

          const storageRef = ref(storage, 'usersIMg/' + fileNameToUser); // Specify the path to your file in the storage
          const metadata = { contentType: 'image/jpeg' }; // All Image Types

          await uploadBytes(storageRef, this.imagenRecortada, metadata)
            .then((snapshot) => {
              // Handle successful upload here
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                // console.log('File available at', downloadURL);
              });
            })
            .catch((error) => {
              // Handle errors during upload
              console.error('Error uploading file', error);
            });

          await updateProfile(userF, { displayName: this.companyName, photoURL: this.selectedImage });
          console.log('Usuario registrado as:' + this.companyName);

        } else {
          console.error('No se pudo registrar al usuario');
        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }

    },
    hideElement() {
      this.isHidden = true;
    },
    redirect() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/login"
      }, 100);
    },
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
        this.recortarImagen()
      }
    },
    triggerImageUpload() {
      this.$refs.imageInput.click();
    }
  },
  components: {
    IonContent
  }
})
</script>