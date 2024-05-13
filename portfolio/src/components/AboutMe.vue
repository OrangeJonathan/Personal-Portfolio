<template>
    <div class="about-me">
      <h2 class="cascadiacodefont">
        <span class="underlined">About Me</span>
      </h2>
      <div class="about-content">
        <div class="text">
          <p>
            Hey, I'm Jonathan, an 18-year-old student at Fontys in Eindhoven, studying Software Engineering and Game Design. I'm all about the fusion of logic and creativity, whether it's crafting code or immersive gaming experiences. Video games have been my passion for as long as I can remember, offering not just entertainment but also a playground for problem-solving and strategic thinking.
          </p>
          <br />
          <p>
            When I'm not buried in code or exploring virtual realms, you'll likely find me tackling puzzles and riddles. There's something incredibly satisfying about unlocking secrets and piecing together clues to reveal the bigger picture. I'm on a constant quest for innovation and discovery, eager to push the boundaries of what's possible in both the digital and analog worlds.
          </p>
        </div>
        <div class="image">
          <img src="/src/assets/JongJonathanHigherQuality.jpg" alt="Jonathan" width="200">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
    // You can add additional data, methods, etc. here if needed 
  }
  </script>
  
  <style scoped>
  .about-me {
    max-width: 800px;
    margin: 0 auto;
  }

  .underlined {
    text-decoration: underline;
  }

  .cascadiacodefont {
    font-family: 'Cascadia Code';
    color: #fefefe; /* White or very light gray */
  }
  
  .about-content {
    display: flex;
    justify-content: space-between;
    color: #fefefe; /* White or very light gray */
  }
  
  .text {
    width: 60%;
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
  
  .image {
    width: 35%;
  }
  
  /* Add additional styling as needed */
  </style>
  