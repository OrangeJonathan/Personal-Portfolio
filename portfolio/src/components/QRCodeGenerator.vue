<template>
  <div class="qr-code-generator">
    <button @click="goBack" class="back-button">Back</button>
    <input v-model="inputData" placeholder="Enter text to generate QR Code" />
    <button @click="generateQRCode" class="generate-button">Generate QR Code</button>
    
    <QRCodeVue3 
        v-if="qrCodeValue"
        ref="qrCode"
        :value="qrCodeValue" 
        :key="qrCodeValue"
        :width="400" 
        :height="400" 
        :qrOptions="{errorCorrectionLevel: 'H' }"
        :dotsOptions="{
          type: 'square',
          color: '#ff7f27',
        }"
        :backgroundOptions="{ color: '#ffffff' }"
        :cornersSquareOptions="{ type: 'square', color: '#ff7f27' }"
        :cornersDotOptions="{ type: undefined, color: '#ff7f27' }"
        fileExt="png"
    />
    <button class="download-btn" @click="downloadQRCode">Download QR Code</button>
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
      inputData: 'https://www.jonathankat.nl',
      qrCodeValue: '', // To hold the generated QR code value
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
    },
    generateQRCode() {
      this.qrCodeValue = this.inputData; // Set QR code value to the input data
    },
    downloadQRCode() {
      const qrCodeElement = this.$refs.qrCode?.$el?.querySelector('img'); // Target the <img> element
      console.log('QR Code Element:', qrCodeElement); // Debugging log

      if (qrCodeElement) {
        const link = document.createElement('a');
        link.href = qrCodeElement.src; // Use the src attribute of the <img> element
        link.download = 'QRCode.png'; // Set the file name for download
        link.click(); // Programmatically trigger the download
        console.log('Download triggered'); // Debugging log
      } else {
        console.error('QR code element not found');
      }
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
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.back-button:hover {
  background-color: #333;
}

.download-btn {
  background-color: #ff7f27;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #e66b1f;
}

.generate-button {
  background: #ff7f27;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Cascadia Code';
  font-size: 1em;
  margin-bottom: 20px;
  border-radius: 5px;
}

.generate-button:hover {
  background-color: #e56721;
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
