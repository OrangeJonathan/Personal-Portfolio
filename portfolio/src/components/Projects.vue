<template>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <router-link :to="'/project/' + project.id" class="project-title">{{ project.title }}</router-link>
        <div class="project-media">
          <!-- If it's an image -->
          <img v-if="project.type === 'image'" :src="project.media" :alt="project.title">
          
          <!-- If it's a YouTube video -->
          <iframe v-else :src="project.media" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="project-description">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Project 1',
            media: 'https://www.youtube.com/embed/VIDEO_ID_HERE', // YouTube video URL
            type: 'video', // 'image' or 'video'
            description: 'Description of Project 1' // Explanation of the project
          },
          {
            id: 2,
            title: 'Project 2',
            media: 'path/to/project2.jpg', // Path to image
            type: 'image', // 'image' or 'video'
            description: 'Description of Project 2' // Explanation of the project
          },
          // Add more projects as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .project-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .project-item {
  width: 300px;
  margin: 20px 150px; /* top/bottom margins are 20px, right/left margins are 40px */
}
  
  .project-title {
    font-weight: bold;
    cursor: pointer;
    font-family: 'Cascadia Code';
    color: #fefefe; /* White or very light gray */
    text-decoration: underline;
  }
  
  .project-media {
    width: 100%;
  }
  
  .project-media img,
  .project-media iframe {
    width: 100%;
  }
  
  .project-description {
    padding: 10px;
    color: #fefefe; /* White or very light gray */
  }
  </style>
  