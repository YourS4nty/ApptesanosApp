<template>
  <ion-content>
    <!-- Hide-Animation -->
    <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
      <!-- Menu elements -->
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

      <!-- Basic elements -->
      <main class="starter">
        <p id="Title">Bienvenido</p>
        <div class="texts">
          <img src="@/media/icon.svg" alt="Icon">
          <p>Apptesanos</p>
        </div>
      </main>

      <!-- Login Form -->
      <section class="login fixItem">
        <form>
          <div class="input-section ">
            <font-awesome-icon :icon="['far', 'envelope']" class="faicon" />
            <input v-model="email" autocomplete="Username" type="text" placeholder="Correo Electrónico" required>
          </div>
          <br>
          <div class="input-section">
            <font-awesome-icon :icon="['fa', 'key']" class="faicon" />
            <input v-model="password" type="password" placeholder="Contraseña" required>
          </div>
          <p v-if="error">{{ error }}</p>
          <br>
          <p class="forgot" @click="goPasswordLost">¿Olvidó Su Contraseña?</p>
        </form>

        <div class="question-box fixItem">
          <button type="submit" class="btn" id="login-btn" @click="ejecutarLogin" :disabled="desactivarClick">Iniciar
            Sesión</button>
          <p class="reg-btn" @click="redirect">Crear Cuenta</p>
        </div>
      </section>
    </div>
    <!-- Hide-Animation -->
  </ion-content>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

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
      isHidden: false,
      desactivarClick: false,
      email: '',
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
    logOut() {
      signOut(getAuth())// Aquí también es necesario pasar getAuth()
        .then(() => {
          console.log('Sesión cerrada correctamente');
        })
        .catch((error) => {
          console.log('Error al cerrar sesión:', error);
        });
    },
    ejecutarLogin() {
      if (!this.desactivarClick) {
        this.loginUser();
      }
    },
    async loginUser() {
      if (!this.email || !this.password) {
        this.error = '¬ Completa Tus Credenciales!!.';
        return;
      }

      try {
        await signInWithEmailAndPassword(getAuth(), this.email, this.password);
        this.desactivarClick = true;
        console.log('Usuario Logeado Exitosamente');
        window.location.href = '/home'
      } catch (error) {
        if (error.message === "auth/invalid-email") {
          this.error = 'Error al Logear el usuario: Email';
        } else {
          this.error = 'Error al Logear el usuario: ' + error.message;
          // console.error('Error al Logear el usuario:', error);
        }

      }
    },
    hideElement() {
      this.isHidden = true;
    },
    redirect() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/reg"
      }, 100);
    },
    goPasswordLost() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/fPass"
      }, 100);
    },
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    }
  },
  components: {
    IonContent
  }
})
</script>

<style scoped>
/* Font Awesome icon */
.faicon {
  margin-left: 10px;
}

/* Título */
#Title {
  font-size: 35px;
  font-weight: bold;
  /* Sombra del texto */
  text-shadow:
    0 0 5px rgba(0, 0, 0, .05),
    0 1px 3px rgba(0, 0, 0, .2),
    0 2px 3px rgba(0, 0, 0, .2),
    0 2px 5px rgba(0, 0, 0, .2),
    0 5px 5px rgba(0, 0, 0, .2);
}

/* Texto de "Olvidó su contraseña" */
.forgot {
  text-align: center;
  color: #6b6b6b;
}

/* Estilo de las secciones de entrada */
.input-section {
  border: 1px solid darkslategray;
  border-radius: 7px;
  padding: 4px;
}

/* Estilo de los campos de entrada */
.login form input {
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 8px;
}

/* Formulario de inicio de sesión */
.login form {
  margin-top: 5%;
}

/* Datos del usuario */
.userData {
  position: absolute;
  margin-top: 15%;
}

.reg-btn {
  width: 35%;
  color: orangered;
  font-weight: bold;
  text-decoration: none;
}

/* Botón de inicio de sesión */
.btn {
  background: #9EBE8F;
  width: 45%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 6px 8px 8px 0px rgba(0, 0, 0, 0.3);
}

/* Contenedor de preguntas */
.question-box {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  height: 30%;
  width: 100%;
  bottom: 10px;
}

/* Contenedor principal de inicio de sesión */
.login {
  width: 100%;
  height: 60%;
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Contenedor de preguntas (otra instancia) */
.question-box {
  position: absolute;
  font-size: 15px;
  text-align: center;
  width: 100%;
  bottom: 10px;
}

/* Contenedor inicial */
.starter {
  /* Fondo del contenedor (Only For Test) */
  /* background: #005c9c; */
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Imagen de ícono */
.starter img {
  width: 85px;
}

/* Contenedor de textos */
.texts {
  margin-bottom: -15%;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
}

/* Texto dentro del contenedor */
.texts p {
  font-size: 40px;
  /* Sombra del texto */
  text-shadow:
    0 0 5px rgba(0, 0, 0, .05),
    0 1px 3px rgba(0, 0, 0, .2),
    0 2px 3px rgba(0, 0, 0, .2),
    0 2px 5px rgba(0, 0, 0, .2),
    0 5px 5px rgba(0, 0, 0, .2);
}
</style>