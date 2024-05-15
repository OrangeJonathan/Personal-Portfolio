<template>
  <h1 class="master-title">
    <span>Projects</span> 
    <span class="cursor blink">|</span>
  </h1> <!-- Add this line -->


    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="project-media">
          <!-- If it's an image -->
            <img v-if="project.type === 'image'" :src="project.media" :alt="project.title" style="width: 400px; height: 200px;">
            
            <!-- If it's a YouTube video -->
            <iframe v-else :src="project.media" frameborder="0" allowfullscreen style="width: 400px; height: 200px;"></iframe>
        </div>
        <div class="project-description">
          <p v-html="project.description"></p>
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
            title: 'PokeRacer',
            media: 'https://www.youtube.com/embed/U5n4XEMcUnY?si=JjCoHDk2skEAH7rU', // YouTube video URL
            type: 'video', // 'image' or 'video'
            description: "PokeRacer is a web application/game that I made in the third semester of my study. It was an introduction to fullstack development for me. Using Vue.js for my front-end and Java in the back-end. Using websockets I was able to make a game where it is possible to race against eachother in guessing Pokémon. Besides this it's also possible to chat with eachother to flex on your Pokémon guessing skills." // Explanation of the project
          },
          {
            id: 2,
            title: 'Medieval Fortress',
            media: 'https://www.youtube.com/embed/Gx8M9FG4yBo?si=OQJuQIV0C8fR3sd', // Path to image
            type: 'video', // 'image' or 'video'
            description: "Medieval Fortress is a game I made with a friend of mine. The game was created within 6 to 7 weeks during the fourth semester of my study. It's a tower defense game where you have to defend your 'castle' from animals that are possessed by an evil wizard. <br /> The game is made within Unity3D and is playable on  <a href='https://biiiy.itch.io/medievalfortress'> itch.io </a> " // Explanation of the project
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
  width: 400px;
  margin: 20px 150px; /* top/bottom margins are 20px, right/left margins are 40px */
}

  
  .project-title {
    cursor: pointer;
    font-family: 'Cascadia Code';
    color: #fefefe; /* White or very light gray */
    text-decoration: underline;
    font-size: 1.5em;
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

  .master-title {
    color: #fefefe; /* White or very light gray */
    font-size: 3rem; /* Adjust font size as needed */
    font-family: 'Cascadia Code'; /* Use your preferred font */
    white-space: nowrap;
}
.cursor {
    animation: blink 1.2s infinite;
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  </style>
  