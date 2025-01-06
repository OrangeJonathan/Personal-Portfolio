<template>
  <div class="about-me">
    <h2 class="cascadiacodefont">
      Introduction
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
        <img src="/src/assets/Jonathan-TransparentBackground.png" alt="Jonathan" width="200">
      </div>
    </div>
    <br />
    <br />
    <div class="about-content">
      <div class="image">
        <img src="/src/assets/JongJonathanHigherQuality.jpg" alt="Jonathan" width="250">
      </div>
      <div class="text">
        <h2 class="cascadiacodefont">
          Skills
        </h2>
        <p>
          During my studies, I became proficient in various programming languages, like Java and C#. I've also played around in Web Development using frameworks like Vue3 and React. Creating games is where my real interest lies and I've worked within Unity and Unreal Engine to create various games that can be found on this website. I'm always eager to learn new technologies and expand my skill set, so I'm constantly experimenting with new tools and techniques, like Godot.
        </p>
        <br />
        <p>
          As a Dutch native, I am proud to say that I have a C1 level in English, which allows me to communicate effectively and understand complex texts. This proficiency has been invaluable in my studies and projects, enabling me to collaborate with international peers and access a vast array of resources.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>
.about-me {
  max-width: 800px;
  margin: 0 auto;
  color: #fefefe; /* White or very light gray */
  padding: 20px;
  border-radius: 8px;
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

.image {
  width: 35%;
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