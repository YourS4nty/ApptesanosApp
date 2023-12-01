<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
            <!-- Cabecera -->
            <div class="head">
                <img src="@/media/icon.svg" alt="ApptesanosIcon">
                <p>Apptesanos</p>
            </div>
            <div class="Editing">
                <h2>Editar Venta</h2>
                <!-- Mostrar el contenido actual de la tarea -->
                <input v-model="tareaEditada.fecha" placeholder="Fecha" type="date" />
                <input v-model="tareaEditada.referencia" placeholder="Referencia" type="text">
                <input v-model="tareaEditada.nombre" placeholder="Nombre" type="text" />
                <input v-model="tareaEditada.precio" placeholder="Precio" type="number" />
                <input v-model="tareaEditada.cantidad" placeholder="Cantidad" type="number">
                <input v-model="tareaEditada.metodo" placeholder="Metodo" type="text">

                <div class="buttonsS">
                    <!-- Botón para cancelar la edición -->
                    <button @click="cancelar" style="background-color: #ff5050;">Cancelar Edición</button>
                    <!-- Botón para guardar la edición -->
                    <button @click="guardarEdicion">Guardar Edición</button>
                </div>
            </div>
        </div>
    </ion-content>
</template>
  
<script>
import { IonContent } from '@ionic/vue';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
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
            tareaEditada: {
                fecha: "",
                referencia: "",
                nombre: "",
                precio: null,
                cantidad: "",
                metodo: ""
            },
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
            // Utiliza el tareaId para cargar los detalles de la tarea desde Firebase
            const tareaRef = doc(db, `/newBase/User-Item/${userID}/${this.tareaId}`);
            const tareaDoc = await getDoc(tareaRef);
            if (tareaDoc.exists()) {
                // Si la tarea existe, asigna sus detalles a tareaEditada
                this.tareaEditada.fecha = tareaDoc.data().date;
                this.tareaEditada.referencia = tareaDoc.data().reference;
                this.tareaEditada.nombre = tareaDoc.data().name;
                this.tareaEditada.precio = tareaDoc.data().price || null; // Usa null si el campo está vacío
                this.tareaEditada.cantidad = tareaDoc.data().quantity;
                this.tareaEditada.metodo = tareaDoc.data().method;
            } else {
                // Tratar el caso en que la tarea no se encuentra
                console.error('La tarea no se encuentra.');
            }
        },
        async guardarEdicion() {
            // Guarda los cambios en Firebase
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userID = user.uid;
                    const tareaRef = doc(db, `/newBase/User-Item/${userID}/${this.tareaId}`);
                    await updateDoc(tareaRef, {
                        date: this.tareaEditada.fecha,
                        reference: this.tareaEditada.referencia,
                        name: this.tareaEditada.nombre,
                        price: this.tareaEditada.precio || 0, // Usa 0 si el campo está vacío
                        quantity: this.tareaEditada.quantity,
                        method: this.tareaEditada.metodo
                    });
                    this.isHidden = true;
                    setTimeout(() => {
                        window.location.href = '/ventas'
                    }, 500);
                }
            });
        },
        cancelar() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = '/ventas'
            }, 500);
        }
    },
};
</script>
  
<style scoped>
.Editing {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.Editing h2 {
    position: absolute;
    top: 0;
    color: black;
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

.buttonsS {
    position: absolute;
    bottom: 4%;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    /* background-color: red; */
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
  