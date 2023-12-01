<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
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

            <!-- Botón de alternar menú -->
            <div class="menu__toggler" @click="handleClick"><span></span></div>

            <div class="master">
                <div class="mainheader">
                    <img src="@/media/icon.svg" alt="Icon">
                    <h1>Mi Información :)</h1>
                </div>
                <div class="profileHead">
                    <img id="profileImage">
                    <p id="profileName"></p>
                </div>
                <div class="profileOptions">
                    <h2>Sobre Mi Cuenta:</h2>
                    <ul>
                        <li style="font-weight: bold;">¬ Nombre : </li>
                        <li id="setaNm">Nombre</li>
                        <li style="font-weight: bold;">¬ Email :</li>
                        <li id="setaEm">Email</li>
                        <li style="font-weight: bold;">¬ UserID :</li>
                        <li id="setaUi">Uuid</li>
                        <li>ㅤ</li>
                        <li style="font-weight: bold;" @click="ejecutarResetPassword" :disabled="desactivarClick"
                            id="jajaxd">
                            Recuperar Contraseña</li>
                        <li style="font-weight: bold;" @click="logOut" class="logoutB">Cerrar Sesión</li>
                    </ul>
                </div>
            </div>
        </div>
    </ion-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { getAuth, onAuthStateChanged, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { ref, onMounted, watchEffect } from 'vue';
import { getDownloadURL, ref as refXD } from 'firebase/storage'
import { storage } from '@/firebase'

export default {
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    setup() {
        const userEmailPassword = ref('');

        onMounted(() => {
            const auth = getAuth();
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
                            const imgElement = document.getElementById('profileImage');
                            const imgElementMenu = document.getElementById('userImageMenu');

                            // Establece la URL de descarga como fuente de la imagen
                            imgElement.src = downloadURL;
                            imgElementMenu.src = downloadURL;
                        })
                        .catch((error) => {
                            console.error('Error al obtener la URL de descarga:', error);
                        });

                    userEmailPassword.value = currentUser.displayName;

                    // Actualizar el elemento p con el id 'nameUser'
                    const nameUserElement = document.querySelector('#setaNm');
                    const mailUserElement = document.querySelector('#setaEm');
                    const uidUserElement = document.querySelector('#setaUi');
                    const userNmComplement = document.querySelector('#userNm');
                    const userEmComplement = document.querySelector('#userEm');

                    if (nameUserElement) {
                        nameUserElement.textContent = `${currentUser.displayName}`;
                        userNmComplement.textContent = `${currentUser.displayName}`;
                        userEmComplement.textContent = `${currentUser.email}`;
                        userEmailPassword.value = `${currentUser.email}`;
                        mailUserElement.textContent = `${currentUser.email}`
                        uidUserElement.textContent = `${currentUser.uid}`
                    } else {
                        userEmailPassword.value = 'None';
                    }

                } else {
                    userEmailPassword.value = 'None';
                }
            });
        });

        // watchEffect(() => {
        //     console.log(userEmailPassword.value);
        // });

        return { userEmailPassword };
    },
    data() {
        return {
            userEmailPassword: '',
            documentVisible: false,
            isHidden: false,
            desactivarClick: false
        }
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
        logOut() {
            signOut(getAuth())// Aquí también es necesario pasar getAuth()
                .then(() => {
                    window.location.href = '/login'
                    console.log('Sesión cerrada correctamente');
                })
                .catch((error) => {
                    console.log('Error al cerrar sesión:', error);
                });
        },
        ejecutarResetPassword() {
            if (!this.desactivarClick) {
                this.resetPassword();
            }
        },
        resetPassword() {
            const email = this.userEmailPassword
            const auth = getAuth()
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    console.log('Envio Exitoso')
                    this.desactivarClick = true;
                    const jajaxd = document.getElementById('jajaxd')
                    jajaxd.textContent = 'Enviado Correctamente'
                    jajaxd.style.border = '2px solid #90ee90'
                    jajaxd.style.background = '#90ee90'
                    jajaxd.style.color = 'darkblue'
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    },
}
</script>

<style scoped>
.master {
    width: 100%;
    height: 100%;
}

.master .mainheader {
    width: 70%;
    height: auto;
    position: absolute;
    top: 3%;
    left: 3%;
    display: flex;
    align-items: center;
}

.master .mainheader h1 {
    height: auto;
    color: black;
    padding: 8px;
}

.profileHead {
    position: absolute;
    top: 15%;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: brown; */
}

.profileHead img {
    height: 250px;
    width: 60%;
    border-radius: 20px;
}

.profileHead p {
    font-weight: bold;
    font-size: 20px;
}

.profileOptions {
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
}

.profileOptions h2 {
    color: black;
}

.profileOptions ul li {
    font-size: 18px;
}

#jajaxd {
    padding: 10px;
    border: cyan 2px solid;
    border-radius: 0.6em;
    text-align: center;
}

.logoutB {
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    color: #e74c3c;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 20px;
    padding: 1.2em 2.5em;
    text-align: center;
    text-transform: uppercase;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.logoutB:hover {
    box-shadow: 0 0 40px 40px #e74c3c inset;
    color: #fff;
}
</style>