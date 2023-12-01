<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'show': documentVisible, 'epic-hide': isHidden }">
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
                <p id="Title">Recuperar Contraseña</p>
                <br> <br>
                <div class="texts">
                    <img src="@/media/icon.svg" alt="Icon">
                    <p>Apptesanos</p>
                </div>
            </main>

            <!-- Olvidar Contraseña Form -->
            <section class="forgot-password">
                <p class="forgot">Escribe el correo electronico</p>
                <form>
                    <div class="input-section">
                        <font-awesome-icon :icon="['far', 'envelope']" class="faicon" />
                        <input v-model="email" autocomplete="email" type="text" placeholder="Correo Electrónico" required>
                    </div>
                </form>
                <p id="Succesed"></p>
                <div class="question-box">
                    <button @click="ejecutarResetPassword" :disabled="desactivarClick" class="btn">Enviar</button>
                    <p class="back-btn" @click="goBack">Recuerdo Mi Contraseña!</p>
                </div>
            </section>
        </div>
        <!-- Hide-Animation -->
    </ion-content>
</template>
  
<script>
import { IonContent } from '@ionic/vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default {
    data() {
        return {
            documentVisible: false,
            isHidden: false,
            desactivarClick: false,
            email: ''
        };
    },
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    },
    methods: {
        ejecutarResetPassword() {
            if (!this.desactivarClick) {
                this.resetPassword();
            }
        },
        async resetPassword() {

            if (this.email == '' || !this.email.includes('@')) {
                document.querySelector('#Succesed').textContent = 'Ingresa Un Correo Valido!!'
            } else {
                // this.isHidden = true;
                const email = this.email;
                const auth = getAuth()
                sendPasswordResetEmail(auth, email)
                    .then(() => {
                        console.log('Envio Exitoso')
                        this.desactivarClick = true;
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                setTimeout(() => {
                    window.location.href = "/passSend";
                }, 2000);
            }
        },
        hideElement() {
            this.isHidden = true;
        },
        redirect() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = "/reg";
            }, 100);
        },
        handleClick() {
            const toggler = document.querySelector('.menu__toggler');
            const menu = document.querySelector('.menu');
            toggler.classList.toggle('active');
            menu.classList.toggle('active');
        },
        goBack() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = "/login";
            }, 100);

        }
    },
    components: {
        IonContent
    }
}
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
    margin: 50px 0px;
    /* Sombra del texto */
    text-shadow:
        0 0 5px rgba(0, 0, 0, .05),
        0 1px 3px rgba(0, 0, 0, .2),
        0 2px 3px rgba(0, 0, 0, .2),
        0 2px 5px rgba(0, 0, 0, .2),
        0 5px 5px rgba(0, 0, 0, .2);
}

/* Texto de "Olvidó su contraseña" (estilos personalizados) */
.forgot {
    text-align: center;
    color: #6b6b6b;
    margin: 10px;
}

/* Estilos para la sección "Olvidar Contraseña" */
.forgot-password {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.forgot-password form input {
    border-radius: 20px;
    outline: none;
    border: 0;
    padding: 8px;
}

/* Botón de "Volver al Inicio de Sesión" */
.back-btn {
    width: 48%;
    color: orangered;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
}

/* Eventos para volver al inicio de sesión al hacer clic */
.back-btn:hover {
    text-decoration: underline;
}

/* Botón de inicio de sesión */
.btn {
    background: #9EBE8F;
    color: black;
    width: 45%;
    height: 45px;
    font-weight: bold;
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

.input-section {
    border: 1px solid darkslategray;
    border-radius: 7px;
    padding: 4px;
}
</style>