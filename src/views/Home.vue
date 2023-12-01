<template>
    <ion-content>
        <div class="allContent" :class="{ 'show': documentVisible }">

            <div class="hideTop" :class="{ 'hide__top': isTop }">
                <!-- Barra de menú -->
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
                            <span><font-awesome-icon :icon="['fas', 'home']" class="faicon" /><a
                                    href="/home">Home</a></span>
                            <span><font-awesome-icon :icon="['far', 'user']" class="faicon" /><a href="/my">Mi Perfil</a></span>
            <span><font-awesome-icon :icon="['far', 'star']" class="faicon" /><a href="/thanks">Creditos</a></span>
                            <span><font-awesome-icon :icon="['fas', 'question-circle']" class="faicon" /><a
                                    href="https://wa.me/573108103500?text=Hola%2C%20Busco%20Soporte%20Acerca%20De%20Apptesanos%21%21"
                                    target="_blank">Ayuda</a></span>
                        </div>
                    </div>

                </div>

                <!-- Botón de alternar menú -->
                <div class="menu__toggler" @click="handleClick"><span></span></div>

                <!-- Cabecera -->
                <div class="head">
                    <img src="@/media/icon.svg" alt="ApptesanosIcon">
                    <p>Apptesanos</p>
                </div>

                <!-- Información de la persona -->
                <section class="person">
                    <div id="img"> <img id="userImageP" src="@/media/noPP.svg"></div>
                    <div class="infoperson">
                        <p id="company">Empresa/Razon Social</p>
                        <b>
                            <p id="nameUser"></p>
                        </b>
                    </div>
                </section>
            </div>


            <!-- Opciones del usuario -->
            <section class="optuser" :class="{ 'hide__left': isLeft }">

                <!-- Opción de Inventario -->
                <div class="opt" @click="redirectI">
                    <div class="opttext">Inventario</div>
                    <div class="opticon">
                        <img src="@/media/icon1.svg" alt="Inventario">
                    </div>
                </div>

                <!-- Opción de Ventas -->
                <div class="opt" @click="redirectV">
                    <div class="opttext">Ventas</div>
                    <div class="opticon">
                        <img src="@/media/icon2.svg" alt="Ventas">
                    </div>
                </div>

                <!-- Opción de Calcular Costos -->
                <div class="opt" @click="redirectC">
                    <div class="opttext">Calcular Costos</div>
                    <div class="opticon">
                        <img src="@/media/icon3.svg" alt="Costos">
                    </div>
                </div>

                <!-- Opción de Reportes -->
                <div class="opt" @click="redirectR">
                    <div class="opttext">reportes</div>
                    <div class="opticon">
                        <img src="@/media/icon4.svg" alt="Reportes">
                    </div>
                </div>
            </section>
        </div>

    </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onMounted, watchEffect } from 'vue';
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
    components: {
        IonContent
    },
    data() {
        return {
            documentVisible: false,
            isTop: false,
            isLeft: false,
            userCompany: ''
        };
    },
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    methods: {
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        },
        redirectI() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/inv"
            }, 500);
        },
        redirectV() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/ventas"
            }, 500);
        },
        redirectC() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/costs"
            }, 500);
        },
        redirectR() {
            this.isTop = true;
            this.isLeft = true;
            setTimeout(() => {
                window.location.href = "/report"
            }, 500);
        },
    }
}
</script>

<style scoped>
/* Estilos para la sección de opciones de usuario */
.optuser {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Se centra verticalmente el contenido y se define el tamaño de la sección. */
    /* background: blue; */
}

/* Estilos para cada opción */
.opt {
    width: 85%;
    height: 21%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #F4F1F1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
    /* Estilos para cada opción de usuario, incluyendo bordes redondeados y sombras. */
}

/* Estilos para el texto de la opción */
.opttext {
    font-size: 25px;
    width: 50%;
}

/* Estilos al pasar el ratón sobre la opción */
.opt:hover {
    border-radius: 20px;
    background: #9EBE8F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform: translate(5px, 5px);
    /* Cambios visuales cuando se pasa el ratón sobre la opción. */
}
</style>