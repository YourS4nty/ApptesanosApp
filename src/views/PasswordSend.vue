<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
            <h1 class="fText">Bienvenido</h1>
            <div class="firstChild">
                <img src="@/media/icon.svg" alt="Icon">
                <p>Apptesanos</p>
            </div>
            <div class="centralC">
                <p>Te hemos enviado el código de verificación a tu correo ingresado</p>
                <img src="@/media/icon8.svg" alt="mail">
                <p>Verifícalo e ingresa</p>
                <img src="@/media/icon9.svg" alt="check">
                <p>Por favor, da clic en el botón "Ir al inicio" para iniciar sesión</p>
            </div>
            <a href="/login"><button>Ir Al Inicio</button></a>
        </div>
    </ion-content>
</template>
  
<style scoped>
/* Estilos CSS específicos para este componente */
.fText {
    color: #000;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: DM Sans;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    margin: 60px 0px;
}

.firstChild {
    width: 100%;
    height: 10%;
    margin: 60px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.firstChild img {
    width: 80px;
}

.firstChild p {
    color: #000;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: DM Sans;
    font-size: 30.128px;
    font-style: normal;
    font-weight: 700;
}

.centralC {
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.centralC p {
    color: #CCC3C3;
    text-align: center;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    margin: 20px;
}

button {
    background: #9EBE8F;
    color: #000;
    font-weight: bold;
    width: 45%;
    height: 45px;
    border-radius: 10px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
  
<script>
import { IonContent } from '@ionic/vue';

export default {
    data() {
        return {
            documentVisible: false,
            isHidden: false,
        }
    },
    components: {
        IonContent
    },
    mounted() {
        setTimeout(() => {
            this.documentVisible = true;
        }, 100);
    }
}
</script>
  