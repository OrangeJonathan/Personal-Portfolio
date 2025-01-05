<template>
  <div class="project-list">
    <div v-for="(project, index) in projects" :key="index" class="project-item" @click="goToProjectDetail(project.id)">
      <h2 class="project-title">{{ project.title }}</h2>
      <div class="project-media">
        <img :src="project.media" :alt="project.title" class="project-media-content">
      </div>
      <div class="project-description">
        <p v-html="project.description"></p>
      </div>
    </div>
  </div>
</template>
  
<script>
import { projects } from '@/data/projects.js';

export default {
  data() {
    return {
      projects
    };
  },
  methods: {
    goToProjectDetail(id) {
      this.$router.push({ name: 'ProjectDetail', params: { id } });
    }
  }
};
</script>
  
<style scoped>
.project-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* space between items */
  justify-content: center; /* center the grid content */
  padding: 20px;
  margin: 0 40px; /* Add margin to the sides */
}

.project-item {
  background-color: #333; /* Adjust as needed */
  padding: 20px;
  border-radius: 8px;
  color: #fefefe;
  text-align: center;
  cursor: pointer;
}

.project-title {
  font-family: 'Cascadia Code';
  color: #fefefe;
  text-decoration: underline;
  font-size: 1.5em;
}

.project-media-content {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 5px;
}

.project-description {
  padding: 10px;
  color: #fefefe;
}

.master-title {
  color: #fefefe;
  font-size: 3rem;
  font-family: 'Cascadia Code';
  white-space: nowrap;
}

.cursor {
  animation: blink 1.2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .project-list {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    margin: 0 20px; /* Adjust margin for smaller screens */
  }
}
</style>