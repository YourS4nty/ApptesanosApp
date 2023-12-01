<template>
  <ion-content>
    <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
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
            <span><font-awesome-icon :icon="['far', 'user']" class="faicon" /><a href="/thanks">Creditos</a></span>
            <span><font-awesome-icon :icon="['fas', 'question-circle']" class="faicon" /><a
                href="https://wa.me/573108103500?text=Hola%2C%20Busco%20Soporte%20Acerca%20De%20Apptesanos%21%21"
                target="_blank">Ayuda</a></span>
          </div>
        </div>

      </div>
      <div class="menu__toggler" @click="handleClick"><span></span></div>

      <!-- Encabezado de la aplicación -->
      <header class="head">
        <img src="@/media/icon.svg" alt="ApptesanosIcon">
        <p class="title">Apptesanos</p>
      </header>

      <div class="imagess">
        <div class="green">
          <img src="@/media/foto1.png" alt="IconUdec"><!-- En orden descendente -->
        </div>

        <div class="blue">
          <img src="@/media/foto2.png" alt="IconUdec">
        </div>

        <div class="yellow">
          <img src="@/media/foto3.png" alt="IconUdec">
        </div>

        <p class="parrafo">Gestiona la contabilidad de tu empresa de artesanias</p>

      </div>

      <div class="buttonsDown" @click="redirect">
        <button class="vboton">Vamos</button><!-- Aqui -->
        <img class="iconarrow" src="@/media/arrow.svg" alt="IconUdec">
      </div>
    </div>
  </ion-content>
</template>
    
<script>
import { IonContent } from '@ionic/vue';
export default {
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
        window.location.href = "/login"
      }, 100);
    },
  },
  components: {
    IonContent
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  /* Establece los márgenes y el relleno predeterminado en 0 para todos los elementos */
}

.title {
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  font-size: 180%;
  padding-left: 2%;
}

.parrafo {
  top: 95%;
  /* establece la distancia del parrafo, se puede quitar */
}

.head {
  padding-left: 3%;
  padding-top: 4%;
}

.iconarrow {
  margin: 0%;
  padding-left: 30px;
}

.vboton {
  background-color: transparent;
  color: #fff;
  font-size: 130%;
  font-weight: bold;
}

.buttonsDown {
  width: 60%;
  height: 60px;
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.00);
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: right;
  position: absolute;
  bottom: 8%;
  left: 22%;
  /* Estilos para un botón con fondo negro, sombra y posición absoluta en la parte inferior izquierda */
}

.buttonsDown svg {
  background-color: aliceblue;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: -12px;
  /* Estilos para el contenido SVG dentro del botón, con fondo azul claro y márgenes ajustados */
}

.imagess {
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px;
  /* Estilos para un contenedor de imágenes que ocupa toda la altura de la ventana y tiene contenido centrado verticalmente */
}

.imagess p {
  width: 70%;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
  /* Estilos para un párrafo en la parte inferior del contenedor de imágenes */
}

.green {
  background: url('@/media/green.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 54%;
  height: 36%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10%;
  right: 10%;
  /* Estilos para un elemento con fondo verde y una imagen */
}

.green img {
  width: 80%;
  /* Estilos para la imagen dentro del elemento verde */
}

.blue {
  background: url('@/media/blue.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 47%;
  height: 36%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 10%;
  /* Estilos para un elemento con fondo azul y una imagen */
}

.blue img {
  width: 82%;
  /* Estilos para la imagen dentro del elemento azul */
}

.yellow {
  background: url('@/media/yellow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 40%;
  height: 26%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  position: absolute;
  bottom: 10%;
  right: 12%;
  /* Estilos para un elemento con fondo amarillo y una imagen */
}

.yellow img {
  width: 80%;
  /* Estilos para la imagen dentro del elemento amarillo */
}</style>
