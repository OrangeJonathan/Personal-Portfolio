<template>
  <div class="tool-list">
    <div v-for="(tool, index) in tools" :key="index" class="tool-item" @click="navigateTo(tool.route)">
      <h2 class="tool-title">{{ tool.title }}</h2>
      <div class="tool-media">
        <img :src="tool.image" :alt="tool.title" class="tool-media-content">
      </div>
      <div class="tool-description">
        <p>{{ tool.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data() {
    return {
      tools: [
        {
          title: 'QR Code Generator',
          image: '/images/QRCodeImage.png',
          description: 'Generate QR codes easily with this tool.',
          route: '/qr'
        },
        // Add more tools here
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.tool-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* space between items */
  justify-content: center; /* center the grid content */
  padding: 20px;
  margin: 0 40px; /* Add margin to the sides */
}

.tool-item {
  background-color: #333; /* Adjust as needed */
  padding: 20px;
  border-radius: 8px;
  color: #fefefe;
  text-align: center;
  cursor: pointer;
}

.tool-title {
  font-family: 'Cascadia Code';
  color: #fefefe;
  text-decoration: underline;
  font-size: 1.5em;
}

.tool-media-content {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 5px;
}

.tool-description {
  padding: 10px;
  color: #fefefe;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .tool-list {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    margin: 0 20px; /* Adjust margin for smaller screens */
  }
}
</style>