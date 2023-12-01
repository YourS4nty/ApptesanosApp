<template>
    <!-- Contenido del componente -->
    <ion-content>
      <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHide }">
  
        <!-- Cabecera del contenido -->
        <div class="headVa">
          <svg @click="redirect" width="30" height="30" fill="none">
            <path d="M16.0156 5.46875L8.98438 12.5L16.0156 19.5312" stroke="black" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="infoVA">
            <p>Producto De Inventarios</p>
            <p style="color: #BCBCBC;">108 Productos</p>
          </div>
        </div>
  
      </div>
    </ion-content>
  </template>
  
  <script>
  import { IonContent } from '@ionic/vue';
  
  export default {
    components: {
      IonContent
    },
    data() {
      return {
        documentVisible: false,
        isHide: false
      };
    },
    mounted() {
      // Cambia documentVisible a true después de un retraso de 100 ms
      setTimeout(() => {
        this.documentVisible = true;
      }, 100);
    },
    methods: {
      // Redirige después de ocultar el componente
      redirect() {
        this.isHide = true;
        setTimeout(() => {
          window.location.href = "/inv";
        }, 500);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos CSS específicos para este componente */
  .allContent {
    background: #EEEEEE;
  }
  
  .headVa {
    width: 100%;
    height: 5%;
    padding-top: 5%;
    display: flex;
    align-items: center;
  }
  
  .headVa svg {
    margin-left: 3%;
    margin-right: 2%;
    transform: scale(2);
  }
  </style>
  