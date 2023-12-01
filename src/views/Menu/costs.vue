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
                        <span><font-awesome-icon :icon="['far', 'star']" class="faicon" /><a
                                href="/thanks">Creditos</a></span>
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
                    <a href="/inv"><img class="itemS" id="ic3" src="@/media/icon1.svg" alt="inv"></a>

                    <!-- Icono #2 -->
                   <a href="/ventas"> <img class="itemS" id="ic2" src="@/media/icon2.svg" alt="venta"></a>

                    <!-- Icono #3 -->
                    <img class="itemS" id="ic1" src="@/media/icon3.svg" alt="costo">

                    <!-- Icono #4 -->
                    <a href="/report"><img class="itemS" id="ic4" src="@/media/icon4.svg" alt="report"></a>
                </div>
            </div>

           <br><br><br> <br> <div class="next" @click="redirect">Siguiente Seccion</div>

        </div>
    </ion-content>
</template>

<script>
import { IonContent } from "@ionic/vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
                window.location.href = "/cost1"
            }, 100);
        },
    }
}
</script>