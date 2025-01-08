<template>
    <div class="qr-code-generator">
      <input v-model="inputData" />
      <QRCodeVue3 
          :value="inputData" 
          :key="inputData"
          :width="300" 
          :height="300" 
          :qrOptions="{ typeNumber: 7, mode: 'Byte', errorCorrectionLevel: 'H' }"
          :imageOptions="{hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
          image="favicon.svg"
          :dotsOptions="{
            type: 'square',
            color: '#FFA500',
            gradient: {
              type: 'linear',
              rotation: 0,
              colorStops: [
                { offset: 0, color: '#ff7f27' },
                { offset: 1, color: '#ff7f27' },
              ],
            },
          }"
          :backgroundOptions="{ color: '#ffffff' }"
          :cornersSquareOptions="{ type: 'square', color: '#ff7f27' }"
          :cornersDotOptions="{ type: undefined, color: '#ff7f27' }"
          fileExt="png"
      />
    </div>
  </template>

<script>
import { ref } from 'vue';
import QRCodeVue3 from "qrcode-vue3";


export default {
  name: 'QRCodeVue3Example',
  components: {
    QRCodeVue3
  },    
  data() {
    return {
      inputData: 'test'
    };
  },
}
</script>

<style scoped>
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