<template>
  <div class="project-detail">
    <button @click="goBack" class="back-button">Back</button>
    <h1 class="project-title">{{ project.title }}</h1>
    <div class="project-media">
      <img :src="project.media" :alt="project.title" class="project-media-content">
    </div>
    <div class="project-description">
      <p v-html="project.description"></p>
    </div>
    <div class="project-details">
      <h2>Details</h2>
      <p v-html="project.details"></p>
    </div>
    <div class="project-video">
      <h2>Video</h2>
      <iframe :src="project.video" frameborder="0" allowfullscreen class="project-video-content"></iframe>
    </div>
  </div>
</template>

<script>
import { projects } from '@/data/projects.js';

export default {
  data() {
    return {
      project: {}
    };
  },
  created() {
    const projectId = this.$route.params.id;
    this.project = projects.find(project => project.id === parseInt(projectId));
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style scoped>
.project-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #fefefe;
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

.project-title {
  font-family: 'Cascadia Code';
  font-size: 2em;
  text-align: center;
}

.project-media-content {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

.project-description, .project-details, .project-video {
  margin-top: 20px;
}

.project-video-content {
  width: 100%;
  height: 480px;
  border-radius: 5px;
}
</style>