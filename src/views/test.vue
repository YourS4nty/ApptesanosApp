<!-- <template>
  <div>
    <img v-if="!selectedImage" src="@/media/regisIcon.svg" alt="AddImage">
    <img v-else :src="selectedImage" alt="Imagen seleccionada" class="image-preview">
    <input type="file" accept="image/*" ref="imageInput" style="display: none;" @change="handleImageUpload">
    <button @click="triggerImageUpload">Seleccionar Imagen</button>
    <button @click="recortarImagen">Recortar</button>
    <canvas id="canvasRecorte" width="150" height="150"></canvas>
    <img :src="imagenRecortada" alt="Imagen Recortada" />
    <a :href="imagenRecortada" download="recortada.jpg">Descargar Imagen Recortada</a>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedImage: '',
      imagenRecortada: '',
      canvasRecorte: null
    };
  },
  methods: {
    recortarImagen() {
      const imagen = new Image();
      imagen.src = this.selectedImage;

      // Obtener el elemento canvas por su id
      const canvas = document.getElementById('canvasRecorte');

      if (canvas) {
        const contexto = canvas.getContext('2d');
        imagen.onload = () => {
          const tamanioRecorte = Math.min(imagen.width, imagen.height);
          const x = (imagen.width - tamanioRecorte) / 2;
          const y = (imagen.height - tamanioRecorte) / 2;
          canvas.width = 150;
          canvas.height = 150;
          contexto.drawImage(imagen, x, y, tamanioRecorte, tamanioRecorte, 0, 0, 150, 150);
          this.guardarImagenRecortada(canvas);
        };
      } else {
        console.error('Elemento canvas no encontrado.');
      }
    },
    guardarImagenRecortada(canvas){
      this.imagenRecortada = canvas.toDataURL('image/jpeg');
    },
    handleImageUpload(event) {
      this.imageToUpload = event.target.files[0];
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = URL.createObjectURL(file);
      }
    },
    triggerImageUpload() {
      this.$refs.imageInput.click();
    }
  }
};
</script> -->

<!-- <template>
  <div>
    <ul>
      <li class="tarea" v-for="tarea in tareas" :key="tarea.id">
        <div class="info-tarea">
          <div class="info-izquierda">
            <span class="nombre">{{ tarea.nombre }}</span>
            <span class="precio">{{ tarea.precio }}</span>
            <span class="fecha">{{ tarea.fecha }}</span>
          </div>
          <div class="info-derecha">
            <div class="acciones">
              <button @click="editarTarea(tarea.id)">Editar</button>
              <button @click="eliminarTarea(tarea.id)">Borrar</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tareas: [
        { id: 1, nombre: 'Producto 1', precio: 10, fecha: '2023-11-04' },
        { id: 2, nombre: 'Producto 2', precio: 20, fecha: '2023-11-05' },
        { id: 3, nombre: 'Producto 3', precio: 30, fecha: '2023-11-06' },
      ],
    };
  },
  methods: {
    editarTarea(id) {
      // Implementa la lógica de edición aquí.
      console.log('Editar tarea:', id);
    },
    eliminarTarea(id) {
      // Implementa la lógica para eliminar la tarea de la lista.
      console.log('Borrar tarea:', id);
      this.tareas = this.tareas.filter((t) => t.id !== id);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente aquí */
.tarea {
  border: 1px solid #ccc;
  margin: 5px;
  padding: 10px;
}

.info-tarea {
  display: flex;
  justify-content: space-between;
}

.info-izquierda {
  display: flex;
  flex-direction: column;
}

.nombre, .precio, .fecha {
  margin-bottom: 5px;
}

.info-derecha {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.acciones {
  margin-top: 10px;
}

/* Estilos para los botones de opción */
button {
  margin-right: 5px;
}
</style> -->

<!-- <template>
  <div class="me">
    <button @click="submitForm">Enviar</button>
  </div>
</template>

<script>
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export default {
  methods: {
    async submitForm() {
      try {
        const data = {
          date: "test Date",
          name: "test name",
          price: "test price"
          // Agrega los otros campos del formulario aquí
        };

        const userName = 'User2';

        // Define el nombre de la colección y el ID del documento
        const collectionName = 'newBase';
        const documentId = userName;

        // Crea una referencia al documento en Firestore
        const userDocRef = doc(collection(db, collectionName), documentId);

        // Sube los datos al documento
        await setDoc(userDocRef, data);

        console.log('Documento subido con éxito');
      } catch (error) {
        console.error('Error al subir el documento: ', error);
      }
    },
  },
};

</script>

<style scoped>
.me{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
  padding: 50px;
}
</style> -->

<template>
  a
</template>