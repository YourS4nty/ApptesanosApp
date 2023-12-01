<template>
  <ion-content>
    <!-- Hide-Animation -->
    <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">

      <!-- Cabecera -->
      <div class="head">
        <img src="@/media/icon.svg" alt="ApptesanosIcon">
        <p>Apptesanos</p>
      </div>
      <p class="InitS">Nueva Venta</p>
      <form @submit.prevent="submitForm" class="mainForm">

        <label for="dateF">¬ Fecha:</label>
        <input id="dateF" type="date" v-model="dateF" required>

        <label for="referenceF">¬ Referencia:</label>
        <input id="referenceF" type="text" v-model="referenceF" placeholder="Ingrese La Referencia">

        <label for="nameF">¬ Nombre Del Producto:</label>
        <input id="nameF" type="text" v-model="nameF" placeholder="Ingrese Un Nombre" required>

        <label for="priceF">¬ Precio Por Unidad:</label>
        <input id="priceF" type="text" v-model="priceF" placeholder="Precio Unitario" required>

        <label for="">¬ Cantidad:</label>
        <input type="number" v-model="quantityF" placeholder="Ingrese Una Cantidad">

        <label for="">¬ Canal De Venta:</label>
        <input type="text" v-model="methodF" placeholder="Metodo De Venta (Redes, Comercio, Etc)">

        <label for="">¬ Precio Final</label>
        <input type="text" placeholder="Este Campo Es Automatico">

      </form>
      <div class="buttonsF">
        <button style="background-color: #ff5050;" @click="cancel">Cancelar</button>
        <button type="submit" @click="submitForm">Guardar</button>
      </div>
    </div>
  </ion-content>
</template>
  
<script>
import { IonContent } from '@ionic/vue'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
      dateF: '',
      referenceF: '',
      nameF: '',
      priceF: '',
      quantityF: '',
      methodF: ''
    }
  },
  components: {
    IonContent
  },
  methods: {
    cancel() {
      this.isHidden = true;
      setTimeout(() => {
        window.location.href = '/ventas'
      }, 500);
    },
    async submitForm() {
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          try {
            const userID = user.uid;
            const mainCollectionRef = collection(db, 'newBase');
            const usersCollectionRef = collection(mainCollectionRef, 'User-Item', userID);

            const data = {
              date: this.dateF || 0,
              reference: this.referenceF || "Vacio",
              name: this.nameF || "Vacio",
              price: this.priceF || 0,
              quantity: this.quantityF || 0,
              method: this.methodF || "Vacio"
            };

            const newDocRef = await addDoc(usersCollectionRef, data);

            console.log('Documento subido con éxito');
            this.isHidden = true;

            setTimeout(() => {
              window.location.href = '/VFinal';
            }, 500);
          } catch (error) {
            console.error('Error al subir el documento: ', error);
          }
        }
      });
    }
  }
}
</script>
  
<style scoped>
.InitS {
  position: absolute;
  top: 12%;
  left: 50%;
  padding: 2px;
  transform: translateX(-50%);
  color: #9EBE8F;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.mainForm {
  position: absolute;
  bottom: 10%;
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input,
label {
  width: 80%;
  margin: 7px;
}

label {
  color: black;
}

input {
  border: 0;
  border-bottom: 1px solid #CAC7C7;
}

input:focus {
  border-bottom: 1px solid #CAC7C7;
}

.buttonsF {
  position: absolute;
  bottom: 2%;
  display: flex;
  justify-content: center;
  height: 10%;
  width: 100%;
}

button {
  width: 40%;
  margin: 10px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #9EBE8F;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
  