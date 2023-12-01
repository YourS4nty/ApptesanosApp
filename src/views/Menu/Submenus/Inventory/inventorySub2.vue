<template>
  <ion-content>
    <!-- Contenedor principal -->
    <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">

      <!-- Menú de navegación -->
      <div class="menu">
        <div class="menu-top">
          <div class="expr">
            <img src="@/media/icon.svg" alt="Apptesanos">
            <p>Apptesanos</p>
          </div>
          <div class="infoPersonxd">
            <img id="userImageMenu" src="@/media/noPP.svg" alt="">
            <div class="textsPerson">
              <span id="userNm">UserName</span>
              <span id="userEm">UserEmail</span>
            </div>
          </div>
        </div>

        <div class="menu-bottom">
          <div class="listOpts">
            <span><font-awesome-icon :icon="['fas', 'home']" class="faicon" /><a href="/home">Home</a></span>
            <span><font-awesome-icon :icon="['far', 'user']" class="faicon" /><a href="/my">Mi Perfil</a></span>
            <span><font-awesome-icon :icon="['far', 'star']" class="faicon" /><a href="/thanks">Creditos</a></span>
            <span><font-awesome-icon :icon="['fas', 'question-circle']" class="faicon" /><a
                href="https://wa.me/573108103500?text=Hola%2C%20Busco%20Soporte%20Acerca%20De%20Apptesanos%21%21"
                target="_blank">Ayuda</a></span>
          </div>
        </div>

      </div>

      <!-- Botón para mostrar/ocultar el menú -->
      <div class="menu__toggler" @click="handleClick"><span></span></div>

      <!-- Cabecera -->
      <div class="head">
        <img src="@/media/icon.svg" alt="ApptesanosIcon">
        <p>Apptesanos</p>
      </div>

      <!-- Información de la persona -->
      <div class="person">
        <div id="img"> <img id="userImageP" src="@/media/noPP.svg"></div>
        <div class="infoperson">
          <p id="company">Empresa/Razon Social</p>
          <b>
            <p id="nameUser"></p>
          </b>
        </div>
      </div>

      <!-- Título de la sección y su icono -->
      <div class="finishedProduct">
        <p>Producto Terminado</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M32.471 3.78352C32.4591 3.72582 32.4309 3.67273 32.3898 3.6305C32.3487 3.58828 32.2964 3.55867 32.239 3.54516C28.4154 2.61 19.5828 5.94211 14.7924 10.729C13.9386 11.5757 13.1601 12.4951 12.4657 13.4768C10.9892 13.3432 9.51261 13.4557 8.25542 14.0041C4.70535 15.5651 3.67245 19.6418 3.38417 21.3919C3.36855 21.4878 3.37523 21.586 3.40367 21.6789C3.43211 21.7718 3.48157 21.8569 3.5482 21.9276C3.61483 21.9983 3.69685 22.0527 3.7879 22.0866C3.87895 22.1205 3.97658 22.133 4.07324 22.1231L9.77347 21.4973C9.77741 21.9273 9.80323 22.3568 9.85081 22.7841C9.88056 23.0794 10.0123 23.3552 10.2235 23.5638L12.4306 25.7709C12.6394 25.9822 12.9154 26.114 13.211 26.1436C13.6358 26.191 14.0627 26.2168 14.49 26.2209L13.865 31.9163C13.8552 32.0128 13.8678 32.1103 13.9017 32.2012C13.9356 32.2921 13.99 32.3739 14.0606 32.4405C14.1312 32.507 14.2162 32.5564 14.3089 32.5849C14.4017 32.6133 14.4997 32.6201 14.5955 32.6046C16.3463 32.3234 20.4314 31.2905 21.9832 27.7411C22.5317 26.4825 22.6442 25.0137 22.5176 23.5441C23.5022 22.8504 24.4242 22.0719 25.2732 21.2175C30.0811 16.4363 33.3921 7.79766 32.471 3.78352ZM20.9996 15.0237C20.5796 14.6038 20.2936 14.0689 20.1777 13.4864C20.0618 12.904 20.1212 12.3003 20.3484 11.7517C20.5756 11.203 20.9605 10.7341 21.4542 10.4041C21.948 10.0742 22.5285 9.89811 23.1223 9.89811C23.7161 9.89811 24.2966 10.0742 24.7904 10.4041C25.2841 10.7341 25.6689 11.203 25.8962 11.7517C26.1234 12.3003 26.1828 12.904 26.0669 13.4864C25.951 14.0689 25.665 14.6038 25.245 15.0237C24.9665 15.3028 24.6356 15.5243 24.2714 15.6754C23.9071 15.8265 23.5166 15.9043 23.1223 15.9043C22.728 15.9043 22.3375 15.8265 21.9732 15.6754C21.609 15.5243 21.2781 15.3028 20.9996 15.0237Z"
            stroke="#E1AB61" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M7.70906 24.75C7.00813 24.836 6.35603 25.1538 5.85633 25.6528C4.61742 26.8959 4.5 31.5 4.5 31.5C4.5 31.5 9.10687 31.3826 10.3465 30.1423C10.8475 29.6434 11.1658 28.9902 11.25 28.2881"
            stroke="#E1AB61" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <!-- Imagen -->
      <img id="img2" src="@/media/icon.svg" alt="Icon">

      <!-- Opciones de entrada de datos -->
      <div class="options">
        <div class="itemGrid">
          <!-- Etiqueta y campo de referencia -->
          <label for="reference">Referencia</label>
          <input id="reference" type="text" placeholder="Reference">
        </div>

        <div class="itemGrid">
          <!-- Etiqueta y selección de unidad -->
          <label for="opciones1">Unidad:</label> <br>
          <select id="opciones1">
            <option value="opcion3">Onz</option>
            <option value="opcion1">Lb</option>
            <option value="opcion2">Kg</option>
            <option value="opcion4">@</option>
          </select>
        </div>

        <div class="itemGrid">
          <!-- Etiqueta y campo de nombre del producto -->
          <label for="productName">Nombre Del Producto</label>
          <input id="productName" type="text" placeholder="Product Name">
        </div>

        <div class="itemGrid">
          <!-- Etiqueta y selección de cantidad -->
          <label for="quantity">Cantidad:</label> <br>
          <select id="quantity">
            <option value="opcion3">1</option>
            <option value="opcion1">2</option>
            <option value="opcion2">3</option>
            <option value="opcion4">4</option>
          </select>
        </div>
      </div>

      <!-- Opciones en la parte inferior -->
      <div class="optBottom">
        <p class="existences">Total De Existencias <br> 7</p>
        <div class="btn" @click="redirect">Editar</div>
        <div class="btn1" @click="redirect2">Guardar</div>
      </div>

    </div>
  </ion-content>
</template>
  

<script>
import { IonContent } from "@ionic/vue";
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, onMounted } from 'vue'
import { getDownloadURL, ref as refXD } from 'firebase/storage'
import { storage } from '@/firebase'

export default {
  setup() {
    const userCompany = ref('');

    onMounted(() => {
      const auth = getAuth();
      const imageUserElement = document.querySelector('#userImageP');

      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {

          const fileNameToUser = currentUser.uid;

          // Define la referencia al archivo que deseas descargar
          const storageRef = refXD(storage, 'usersIMg/' + fileNameToUser);

          // Obtiene la URL de descarga del archivo
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              // console.log('URL de descarga del archivo:', downloadURL);

              // Obtén la referencia al elemento <img> por su id
              const imgElement = document.getElementById('userImageP');
              const imgElementMenu = document.getElementById('userImageMenu');

              // Establece la URL de descarga como fuente de la imagen
              imgElement.src = downloadURL;
              imgElementMenu.src = downloadURL;
            })
            .catch((error) => {
              console.error('Error al obtener la URL de descarga:', error);
            });


          userCompany.value = currentUser.displayName;

          // Actualizar el elemento p con el id 'nameUser'
          const nameUserElement = document.querySelector('#nameUser');
          const userNmComplement = document.querySelector('#userNm');
          const userEmComplement = document.querySelector('#userEm');

          if (nameUserElement) {
            nameUserElement.textContent = `User: ${userCompany.value}`;
            userNmComplement.textContent = `${userCompany.value}`;
            userEmComplement.textContent = `${currentUser.email}`;
          } else {
            userCompany.value = 'None';
          }


        } else {
          userCompany.value = 'None';
        }
      });
    });


    // watchEffect(() => {
    //     console.log(userCompany.value);
    // });

    return { userCompany };
  },
  data() {
    return {
      documentVisible: false,
      isHidden: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.documentVisible = true;
    }, 100);
  },
  components: {
    IonContent
  },
  methods: {
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    },
    redirect() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/inv3"
      }, 100);
    },
    redirect2() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = "/invFinal"
      }, 100);
    }
  }
}
</script>

<style scoped>
/* Estilo para el texto "Total De Existencias" */
.existences {
  margin-left: 10%;
}

/* Estilo para el contenedor en la parte inferior */
.optBottom {
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
}

/* Estilo para el botón "Editar" */
.btn {
  width: 30%;
  height: 40px;
  position: absolute;
  bottom: 15%;
  right: 40%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9EBE8F;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

/* Estilo para el botón "Guardar" */
.btn1 {
  width: 30%;
  height: 40px;
  position: absolute;
  bottom: 15%;
  right: 6%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E1AB61;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

/* Estilo para el título de la sección */
.finishedProduct {
  width: 70%;
  height: 69px;
  margin: auto;
  color: #E1AB61;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #F3F3F3;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

/* Estilo para la imagen */
#img2 {
  width: 30%;
  margin: 10% auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* Estilo para el contenedor "options" */
.options {
  width: 100%;
  height: 20%;
  padding-left: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%;
}

/* Estilo para los elementos "input" */
input {
  border: none;
  border-bottom: 1px solid #CAC7C7;
}
</style>
