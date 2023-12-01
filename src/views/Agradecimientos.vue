<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
            <div class="mainContent">
                <!-- Menú -->
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
                                <span id="userEm">Porfavor Registrate :)</span>
                            </div>
                        </div>
                    </div>

                    <div class="menu-bottom">
                        <div class="listOpts">
                            <span @click="goBack"><font-awesome-icon :icon="['fas', 'arrow-rotate-back']"
                                    class="faicon" />Volver</span>
                            <span><font-awesome-icon :icon="['far', 'star']" class="faicon" /><a
                                    href="/thanks">Creditos</a></span>
                            <span><font-awesome-icon :icon="['fas', 'question-circle']" class="faicon" /><a
                                    href="https://wa.me/573108103500?text=Hola%2C%20Busco%20Soporte%20Acerca%20De%20Apptesanos%21%21"
                                    target="_blank">Ayuda</a></span>
                        </div>
                    </div>

                </div>

                <!-- Toggler del menú -->
                <div class="menu__toggler" @click="handleClick"><span></span></div>

                <!-- Sección Udec -->
                <section class="Udec">
                    <div class="head">
                        <img src="@/media/icon.svg" alt="ApptesanosIcon">
                        <p>Apptesanos</p>
                    </div>
                    <div class="images">
                        <img src="@/media/udecLogo.svg" alt="UdecLogo">
                        <img src="@/media/MexicanTec.svg" alt="MexULogo">
                        <p>Instituto tecnológico<br> de lázaro cardenas</p>
                    </div>
                    <div class="endtxt">
                        <p>Esta aplicación es producto de la alianza en investigación de la Universidad de Cundinamarca y el
                            Instituto Tecnológico de Lázaro Cárdenas.</p>
                    </div>
                    <div class="down-arrow"></div>
                </section>

                <!-- Sección Agradecimientos -->
                <section class="thx">
                    <div class="menuView">
                    </div>
                    <div class="thanks">
                        <h1>Agradecimientos</h1>
                    </div>
                    <div class="main">
                        <img src="@/media/check.svg" alt="check">
                        <h2>Equipo de desarrollo</h2>
                        <ul>
                            <li style="color: cornflowerblue;">[Dev] Santiago González :)</li>
                            <li>Ing. Cristian Cano</li>
                            <li>Est. Jose Rojas</li>
                            <li>Est. Juliana</li>
                        </ul>
                    </div>
                    <div class="main otmain">
                        <img src="@/media/eye.svg" alt="eye">
                        <h2>Investigadores</h2>
                        <ul>
                            <li style="color: cornflowerblue">[Dev] Santiago González :)</li>
                            <li class="xcf">Mg. Myriam Rocio Paez</li>
                            <li class="xcf">Ing. Karina Lopez</li>
                            <li class="xcf">Ing. Cristian Cano</li>
                        </ul>
                    </div>
                    <div class="main2">
                        <img src="@/media/cash.svg" alt="Cash">
                        <h2>Entidad Financiadora</h2>
                        <p>Universidad De Cundinamarca</p>
                    </div>
                </section>

                <!-- Sección Redes Sociales -->
                <section class="socialMedia">
                    <div class="imageUdec1">
                        <img src="@/media/icon.svg" alt="ApptesanosLogo"> <br>
                        <p>Apptesanos 2023</p>
                    </div>
                    <div class="udecSocial">
                        <img class="aimg" src="@/media/UdecDark.svg" alt="DarkUdec">
                        <ul>
                            <li class="USocial">
                                <img src="@/media/twt.svg" alt="Twt">
                                <a style="color: #000;" href="https://twitter.com/ucundinamarca">@UCundinamarca</a>
                            </li>
                            <li class="USocial">
                                <img src="@/media/in.svg" alt="IG">
                                <a style="color: #000;" href="https://instagram.com/UCundinamarcaoficial">
                                    UCundinamarcaoficial</a>
                            </li>
                            <li class="USocial">
                                <img src="@/media/fb.svg" alt="FB">
                                <a style="color: #000;" href="https://facebook.com/UCundinamarcaoficial">
                                    UCundinamarcaoficial</a>
                            </li>
                            <li class="USocial">
                                <img src="@/media/in1.svg" alt="in">
                                <a style="color: #000;" href="https://linkedin.com/school/UCundinamarcaoficial">
                                    UCundinamarcaoficial</a>
                            </li>
                        </ul>
                    </div>
                    <img src="@/media/MexicanTec.svg" alt="MexicanTecx" class="imgxd">
                </section>
            </div>
        </div>
    </ion-content>
</template>

<script >
import { IonContent } from '@ionic/vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onMounted, watchEffect } from 'vue';
import { getDownloadURL, ref as refXD } from 'firebase/storage'
import { storage } from '@/firebase'

export default {
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    data() {
        return {
            documentVisible: false,
            isHidden: false
        }
    },
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
                            const imgElementMenu = document.getElementById('userImageMenu');

                            // Establece la URL de descarga como fuente de la imagen
                            imgElementMenu.src = downloadURL;
                        })
                        .catch((error) => {
                            console.error('Error al obtener la URL de descarga:', error);
                        });

                    userCompany.value = currentUser.displayName;

                    // Actualizar el elemento p con el id 'nameUser'
                    const userNmComplement = document.querySelector('#userNm');
                    const userEmComplement = document.querySelector('#userEm');

                    if (userNmComplement) {
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
    methods: {
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        },
        goBack() {
            const auth = getAuth()
            auth.onAuthStateChanged((user) => {
                if (user) {
                    window.location = '/home'
                } else {
                    window.location = '/login'
                }
            });
        }
    },
};
</script>

<style>
a {
    text-decoration: none;
}

/* Estilos para la imagen */
.imgxd {
    width: 80%;
    margin: auto;
    /* background-color: aliceblue;
    box-shadow: 0px 0px 15px 8px whitesmoke; */
}

/* Estilos para la sección de redes sociales */
.udecSocial {
    height: 35%;
    width: 100%;
    /* background-color: #837777; */
    /* Comentado temporalmente */
    display: flex;
    justify-content: center;
    align-items: center;
}

.udecSocial img {
    padding: 5px;
    width: 45px;
}

.udecSocial .aimg {
    width: 135px;
}

.USocial a {
    font-size: 15px;
}

/* Estilos generales para elementos de lista */
ul {
    list-style: none;
    padding: 0;
}

.USocial {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    /* Agrega margen inferior para separar elementos */
}

.xcf {
    margin-top: 5px;
}

/* Estilos para la imagen y texto de la universidad */
.imageUdec1 {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageUdec1 img {
    width: 100px;
}

.imageUdec1 p {
    font-size: 25px;
}

/* Estilos para la sección de redes sociales */
.socialMedia {
    background-color: #9EBE8F;
}

/* Estilos para la sección de imágenes y texto */
.images {
    height: 54vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.images p {
    text-align: center;
    font-size: 20px;
    margin: 4%;
}

.images img {
    margin: 6%;
    width: 69%;
    height: auto;
}

.endtxt {
    color: #837777;
    text-align: center;
    font-family: DM Sans;
    font-size: 22px;
    line-height: 22px;
    width: 80%;
    margin: auto;
}

/* Estilos para el botón de menú */
.menuView {
    position: absolute;
    top: 20px;
    right: 30px;
    background-color: #b1ffec42;
    width: 48px;
    height: 46px;
    border-radius: 5px;
}

/* Estilos para la sección de agradecimientos */
.thx {
    background-color: #201E1C;
}

.thx li {
    list-style: none;
}

/* Estilos para la animación de flecha hacia abajo */
.down-arrow {
    position: absolute;
    bottom: 15px;
    left: calc(50% - 14px);
    width: 0;
    height: 30px;
    border: 2px solid;
    border-radius: 2px;
    animation: jumpInfinite 1.5s infinite;
}

.down-arrow:after {
    content: " ";
    position: absolute;
    top: 12px;
    left: -9px;
    width: 16px;
    height: 16px;
    border-bottom: 4px solid;
    border-right: 4px solid;
    transform: rotateZ(45deg);
}

@keyframes jumpInfinite {
    0% {
        margin-bottom: 0;
    }

    50% {
        margin-bottom: 20px;
    }

    100% {
        margin-bottom: 0;
    }
}

/* Estilos para el contenido principal */
.mainContent {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    background-color: #fff;
}

.mainContent section {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Estilos para la sección de agradecimientos */
.thanks {
    text-align: center;
}

h1,
h2 {
    color: #fff;
}

.main {
    background: #282623;
    color: #808080;
    margin: auto;
    padding: 10px;
    padding: 10px;
    height: 28%;
    width: 80%;
    border-radius: 6px;
}

.otmain {
    height: 30%;
}

.main2 {
    margin: auto;
    background: #282623;
    color: #808080;
    padding: 10px;
    height: 20%;
    width: 80%;
    border-radius: 6px;
}

.iconx {
    width: 20px;
    height: 20px;
    color: lightblue;
    margin-left: 10px;
    margin-top: 10px;
}
</style>