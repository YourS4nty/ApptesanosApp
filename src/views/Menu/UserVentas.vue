<template>
  <ion-content>
    <!-- Hide-Animation -->
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

      <!-- Componentes -->
      <div class="components">
        <p id="gxc">Gestiona</p>
        <div class="icons">
          <!-- Icono #1 -->
          <a href="/inv"><img class="itemS" id="ic2" src="@/media/icon1.svg" alt="inv"></a>

          <!-- Icono #2 -->
          <img class="itemS" id="ic1" src="@/media/icon2.svg" alt="venta">

          <!-- Icono #3 -->
          <a href="/costs"><img class="itemS" id="ic3" src="@/media/icon3.svg" alt="costo"></a>

          <!-- Icono #4 -->
          <a href="/report"><img class="itemS" id="ic4" src="@/media/icon4.svg" alt="report"></a>
        </div>
      </div>

      <!-- Contenido principal (aquí puedes agregar tu contenido) -->
      <main>
        <section>
          <div class="historyContent">
            <p id="history">Historial</p>
            <div class="xfgv">
              <ul>
                <li class="tarea" v-for="tarea in tareas" :key="tarea.id">
                  <div class="info-tarea">
                    <div class="info-izquierda">
                      <span class="nombre">{{ tarea.nombre }}</span>
                      <span class="precio">{{ tarea.precio }}</span>
                      <span class="fecha">{{ tarea.fecha }}</span>
                    </div>
                    <div class="info-derecha">
                      <div class="acciones">
                        <img src="@/media/icon10.svg" alt="Edit" @click="editarTarea(tarea.id)">
                        <img src="@/media/icon11.svg" alt="Delete" @click="tareaAEliminarId = tarea.id; preguntaa()">
                        <p class="detailsV" @click="detailsView(tarea.id)">Detalles</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <p v-if="tareas.length === 0">No Se Han Registrado Ventas.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div class="moreBut" @click="redirect">
        <img src="@/media/icon12.svg" alt="More :D">
      </div>

      <div class="SureDelete">
        <p>Eliminar Elemento?</p>
        <div class="contentButtons">
          <button style="background-color: #ff5050;" @click="cancelP">Cancelar</button>
          <button @click="eliminarT">Aceptar</button>
        </div>
      </div>

    </div>
  </ion-content>
</template>
  
<script>
import { IonContent } from "@ionic/vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, onMounted } from 'vue'
import { getDownloadURL, ref as refXD } from 'firebase/storage';
import { storage, db } from '@/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const auth = getAuth()

export default {
  mounted() {
    setTimeout(() => {
      this.documentVisible = true;
    }, 100);
  },
  data() {
    return {
      documentVisible: false,
      isHidden: false,
      tareas: []
    };
  },
  setup() {
    const auth = getAuth();
    const userCompany = ref('');
    const tareas = ref([]);

    const cargarTareas = async (userID) => {
      try {
        const tareasCollection = collection(db, `/newBase/User-Item/${userID}/`);
        const querySnapshot = await getDocs(tareasCollection);

        const tareasArray = [];
        querySnapshot.forEach((doc) => {
          tareasArray.push({
            id: doc.id,
            nombre: doc.data().name,
            precio: "$" + doc.data().price,
            fecha: doc.data().date,
          });
        });

        tareas.value = tareasArray;
        console.log(tareasArray);
      } catch (error) {
        console.error('Error al cargar las tareas:', error);
      }
    };

    onMounted(() => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          const fileNameToUser = currentUser.uid;
          const storageRef = refXD(storage, 'usersIMg/' + fileNameToUser);

          getDownloadURL(storageRef)
            .then((downloadURL) => {
              const imgElement = document.getElementById('userImageP');
              const imgElementMenu = document.getElementById('userImageMenu');
              imgElement.src = downloadURL;
              imgElementMenu.src = downloadURL;
            })
            .catch((error) => {
              console.error('Error al obtener la URL de descarga:', error);
            });

          userCompany.value = currentUser.displayName;
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

          cargarTareas(currentUser.uid);
        } else {
          userCompany.value = 'None';
        }
      });
    })

    return {
      userCompany,
      tareas,
    };
  },
  components: {
    IonContent
  },
  methods: {
    editarTarea(tareaId) {
      // this.$router.push({ name: "Ventas-Editar", params: { tareaId: tareaId } });  OBSOLETO PERO ES CORRECTO
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = `/EditV/${tareaId}`;
      }, 500);
    },
    detailsView(tareaId){
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = `/VDetail/${tareaId}`
      }, 500);
    },
    preguntaa() {
      const confirmx = document.getElementsByClassName('SureDelete')[0];
      confirmx.classList.toggle('active');
    },
    eliminarT() {
      const confirmx = document.querySelector('.SureDelete');
      confirmx.classList.toggle('active');
      this.eliminarTarea(this.tareaAEliminarId); // Llama a eliminarTarea con el ID correcto
    },
    cancelP() {
      const confirmx = document.getElementsByClassName('SureDelete')[0];
      confirmx.classList.toggle('active');
    },
    eliminarTarea(id) {
      const auth = getAuth(); // Obtener la instancia de autenticación de Firebase

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userID = user.uid;
          const tareasCollection = collection(db, `/newBase/User-Item/${userID}/`);
          try {
            console.log(id);
            deleteDoc(doc(tareasCollection, id));

            // Eliminar la tarea localmente en 'this.tareas'
            this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
          } catch (error) {
            console.error('Error al eliminar la tarea:', error);
          }
        }
      });
    },
    handleClick() {
      const toggler = document.querySelector('.menu__toggler');
      const menu = document.querySelector('.menu');
      toggler.classList.toggle('active');
      menu.classList.toggle('active');
    },
    redirect() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = '/Vadding'
      }, 500);
    }
  }
}
</script>
  
<style scoped>
.allContent{
  overflow: hidden;
}

.SureDelete {
  width: 80%;
  height: 250px;
  position: fixed;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #9EBE8F;
  background-color: #fff;
  border-radius: 10px;
  transform: translateY(5000px);
  animation: transform 1s ease-in;
}

.SureDelete.active {
  transform: translateY(0);
}

.SureDelete p {
  text-align: center;
  width: 100%;
}

.SureDelete .contentButtons {
  width: 100%;
  height: 50px;
  margin-top: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contentButtons button {
  width: 35%;
  height: 45px;
  margin: 15px;
  background-color: #9EBE8F;
  color: #fff;
  border-radius: 10px;
}

.moreBut {
  position: absolute;
  bottom: 2%;
  right: 4%;
  width: 65px;
  height: 65px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #E1AB61;
}

.moreBut img {
  width: 50px;
}

/* Estilos específicos del componente aquí */
.tarea {
  width: 80%;
  height: 100px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
}

.info-tarea {
  display: flex;
  justify-content: space-between;
}

.info-izquierda {
  display: flex;
  flex-direction: column;
}

.nombre,
.precio,
.fecha {
  margin-bottom: 5px;
}

.info-derecha {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.detailsV{
  height: 22px;
  background-color: #D9D9D9;
  text-align: center;
  border-radius: 5px;
}

.acciones img {
  margin: 5px;
}

/* Estilo para el elemento con el id "gxc" */
#gxc {
  text-align: left;
}

/* Estilo para el elemento con el id "history" */
#history {
  font-size: 2rem;
  position: inherit;
  top: 0;
  left: 10%;
  background-color: transparent;
}

/* Estilos para elementos con la clase "historyContent" */
.historyContent {
  width: 100%;
  height: 54%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.xfgv {
  width: 90%;
  height: 85%;
  position: inherit;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}

/* Estilos para listas dentro de elementos con la clase "historyContent" */
.historyContent ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
  