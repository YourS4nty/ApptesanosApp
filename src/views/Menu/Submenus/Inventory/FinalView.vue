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

            <div class="mainmain">
                <div class="centralbox">
                    <img src="@/media/icon7.svg" alt="success">
                    <p>¡Se creó un nuevo
                        item en el inventario!</p>
                    <button @click="redirect" class="hovereffect">Entendido</button>
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
                window.location.href = "/home";
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

.mainmain {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.centralbox {
    background: white;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.centralbox img {
    width: 40%;
    margin: 10px;
}

.centralbox p {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px;
}

.centralbox button {
    height: 40px;
    width: 50%;
    position: absolute;
    bottom: 7%;
    border-radius: 8px;
    background: #F4F1F1;
    color: #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.hovereffect:hover{
    border-radius: 8px;
    background: #9EBE8F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
  