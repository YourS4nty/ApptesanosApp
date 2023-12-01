<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
            <!-- Cabecera -->
            <div class="head">
                <img src="@/media/icon.svg" alt="ApptesanosIcon" />
                <p>Apptesanos</p>
            </div>
            <div class="vieWs">
                <h2>Detalles De La Venta</h2>
                <!-- Mostrar el contenido actual de la tarea -->
                <textarea v-model="tareaDetalles.fecha" placeholder="Fecha" type="date" readonly></textarea>
                <textarea v-model="tareaDetalles.referencia" placeholder="Referencia" type="text" readonly></textarea>
                <textarea v-model="tareaDetalles.nombre" placeholder="Nombre" type="text" readonly></textarea>
                <textarea v-model="tareaDetalles.precio" placeholder="Precio" type="number" readonly></textarea>
                <textarea v-model="tareaDetalles.cantidad" placeholder="Cantidad" type="number" readonly></textarea>
                <textarea v-model="tareaDetalles.metodo" placeholder="Metodo" type="text" readonly></textarea>

                <div class="buttonsS">
                    <!-- Botón para Regresar -->
                    <button @click="retornar">Regresar</button>
                </div>
            </div>
        </div>
    </ion-content>
</template>
  
<script>
import { IonContent } from '@ionic/vue';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const auth = getAuth();

export default {
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    components: {
        IonContent
    },
    props: ['tareaId'],
    data() {
        return {
            documentVisible: false,
            isHidden: false,
            tareaDetalles: {
                nombre: "",
                precio: null,
                fecha: "",
                referencia: "",
                cantidad: null,
                metodo: ""
            }
        };
    },
    async created() {
        // Cargar los detalles de la tarea basándose en el tareaId
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userID = user.uid;
                this.cargarDetallesTarea(userID);
            }
        });
    },
    methods: {
        async cargarDetallesTarea(userID) {
            const tareaRef = doc(db, `/newBase/User-Item/${userID}/${this.tareaId}`);
            const tareaDoc = await getDoc(tareaRef);
            if (tareaDoc.exists()) {
                this.tareaDetalles.fecha = "¬ Fecha: " + tareaDoc.data().date;
                this.tareaDetalles.referencia = "¬ Referencia: " + tareaDoc.data().reference || "hola";
                this.tareaDetalles.nombre = "¬ Nombre: " + tareaDoc.data().name;
                this.tareaDetalles.precio = "¬ Precio: $" + tareaDoc.data().price || null;
                this.tareaDetalles.cantidad = "¬ Cantidad: " + tareaDoc.data().quantity || null;
                this.tareaDetalles.metodo = "¬ Metodo: " + tareaDoc.data().method || "";
            } else {
                console.error('La tarea no se encuentra.');
            }
        },
        retornar() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = '/ventas';
            }, 500);
        }
    }
};
</script>
  
<style scoped>
.vieWs {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.vieWs h2 {
    position: absolute;
    top: 10%;
    color: black;
}

textarea {
  width: 80%;
  height: 35px;
  margin: 10px;
  text-align: left;
  font-weight: 555;
  line-height: 35px;
  border: none;
  background-color: transparent;
}

.buttonsS {
    position: absolute;
    bottom: 4%;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
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
  