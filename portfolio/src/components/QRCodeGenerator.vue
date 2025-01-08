<template>
  <div class="qr-code-generator">
    <button @click="goBack" class="back-button">Back</button>
    <input v-model="inputData" />
    <label class="show-image-label">
      Show Image
    </label>
    <input type="checkbox" v-model="showImage" />
    <QRCodeVue3 
        :value="inputData" 
        :key="inputData"
        :width="300" 
        :height="300" 
        :qrOptions="{ typeNumber: 7, mode: 'Byte', errorCorrectionLevel: 'H' }"
        :imageOptions="{hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
        :image="computedQrImage"
        :dotsOptions="{
          type: 'square',
          color: '#ff7f27',
        }"
        :backgroundOptions="{ color: '#ffffff' }"
        :cornersSquareOptions="{ type: 'square', color: '#ff7f27' }"
        :cornersDotOptions="{ type: undefined, color: '#ff7f27' }"
        fileExt="png"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import QRCodeVue3 from "qrcode-vue3";

export default {
name: 'QRCodeVue3Example',
components: {
  QRCodeVue3
},    
data() {
  return {
    inputData: 'test',
    qrImage: 'favicon.svg',
    showImage: true
  };
},
computed: {
  computedQrImage() {
    return this.showImage ? this.qrImage : '';
  }
},
methods: {
  goBack() {
      this.$router.push({ name: 'Home' });
    }
  }

};
</script>

<style scoped>
.show-image-label {
  display: flex;
  align-items: center;
  color: #fefefe;
  margin-bottom: -15px;
}

.back-button {
  background: none;
  color: #fefefe;
  border: 1px solid #fefefe;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Cascadia Code';
  font-size: 1em;
  margin-bottom: 20px;
  border-radius: 5px;
}

.back-button:hover {
  background-color: #333;
}

.qr-code-generator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>