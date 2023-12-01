<template>
    <ion-content>
        <!-- Hide-Animation -->
        <div class="allContent" :class="{ 'showMain': documentVisible, 'epic-hide': isHidden }">
            <!-- Cabecera -->
            <div class="head">
                <img src="@/media/icon.svg" alt="ApptesanosIcon">
                <p>Apptesanos</p>
            </div>
            <div class="master">
                <span @click="redirect1">Nueva Materia Prima <img src="@/media/gota.svg" alt="gota"> </span>
                <span @click="redirect2">Producto Terminado <img src="@/media/box.svg" alt="box"> </span>
            </div>
        </div>
    </ion-content>
</template>

<style scoped>
.master {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

span {
    color: #9EBE8F;
    font-family: DM Sans;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
import { IonContent } from '@ionic/vue';

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
    components: {
        IonContent
    },
    methods: {
        redirect1() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = '/inv1'
            }, 500);
        },
        redirect2() {
            this.isHidden = true;
            setTimeout(() => {
                window.location.href = '/inv3'
            }, 500);
        }
    }
}
</script>