<template>
  <h1 class="master-title">
    <span>Projects</span> 
    <span class="cursor blink">|</span>
  </h1>
  <div class="project-list">
    <div v-for="(project, index) in projects" :key="index" class="project-item">
      <h2 class="project-title">{{ project.title }}</h2>
      <div class="project-media">
        <img v-if="project.type === 'image'" :src="project.media" :alt="project.title" class="project-media-content">
        <iframe v-else :src="project.media" frameborder="0" allowfullscreen class="project-media-content"></iframe>
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
            description: "PokeRacer is a web application/game that I made in the third semester of my study. It was an introduction to fullstack development for me. Using Vue.js for my front-end and Java in the back-end. Using websockets I was able to make a game where it is possible to race against eachother in guessing Pokémon. Besides this it's also possible to chat with eachother to flex on your Pokémon guessing skills. View the code on Github: <a href='https://github.com/OrangeJonathan/S3DB-IP-PokemonRace-BackEnd'> Backend </a> - <a href='https://github.com/OrangeJonathan/S3DB-IP-PokemonRace-FrontEnd'> Frontend </a>" // Explanation of the project
          },
          {
            id: 2,
            title: 'Medieval Fortress',
            media: 'https://www.youtube.com/embed/Gx8M9FG4yBo?si=OQJuQIV0C8fR3sd', // Path to image
            type: 'video', // 'image' or 'video'
            description: "Medieval Fortress is a game I made with a friend of mine. The game was created within 6 to 7 weeks during the fourth semester of my study. It's a tower defense game where you have to defend your 'castle' from animals that are possessed by an evil wizard. <br /> The game is made within Unity3D and is playable on  <a href='https://biiiy.itch.io/medievalfortress'> itch.io </a>. View the code on <a href='https://github.com/OrangeJonathan/MedievalFortress'> Github </a> " // Explanation of the project
          },
          {
            id: 3,
            title: 'YawVR',
            media: 'https://www.youtube.com/embed/HsIeX5ex8r0?si=qDZHQH1a_8kAFDJ6', // Path to image
            type: 'video', // 'image' or 'video'
            description: "The YawVR chair is a chair which is able to move with certain actions in game. During this project my team and I worked for Enversed Studios in order to develop an interactive game to be played in their VR center. The game is about exploring a planet whilst you are in the YawVR chair. During the project me and my team were instructed to build the game in Unreal Engine, but with the limitations of the YawVR chair we had to use Unreal4 instead of the newer Unreal5." // Explanation of the project
          },
          {
            id: 4,
            title: 'Mars Runner',
            media: '/src/assets/Images/MarsRunner.jpeg', // Path to image
            type: 'image', // 'image' or 'video'
            description: "Mars Runner is an endless runner game. In this game you are on Mars and you have to evade obstacles. I used Assets from <a href='https://Kenney.nl'> Kenney.nl </a>. This game was created by me in Unity3D to get more knowledge about the Engine and Optimizing games. The game is playable on my <a href='https://orangeplayah.itch.io/mars-runner'> itch.io </a>. View the code on <a href='https://github.com/OrangeJonathan/MarsRunner'> Github </a> " // Explanation of the project
          },
          
          // Add more projects as needed
        ]
      };
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
  }
  
  .project-item {
    background-color: #333; /* Adjust as needed */
    padding: 20px;
    border-radius: 8px;
    color: #fefefe;
    text-align: center;
  }
  
  .project-title {
    cursor: pointer;
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
    }
  }
  </style>