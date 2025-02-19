<template>
  <div class="home-screen">
    <div class="titlebackground" id="content">
      <a href="https://mmmlabel.tech">
        <img src="/images/cyborg.png" alt="mmmlabel Cyborg for use of GenAI" class="top-right-image" title="For this website I used AI to generate the CSS and a little bit of the Javascript, but I still had to edit lots of it myself!"/>
      </a>
      <div class="title">
        <Name />
      </div>
      <Socials class="marginbottom5vh"/> 
      <div class="buttons">
        <button @click="currentView = 'projects'" :class="{ active: currentView === 'projects', 'blinking-cursor': currentView === 'projects' }" class="cascadiacodefont">Projects</button>
        <button @click="currentView = 'tools'" :class="{ active: currentView === 'tools', 'blinking-cursor': currentView === 'tools' }" class="cascadiacodefont">Tools</button>
        <button @click="currentView = 'aboutMe'" :class="{ active: currentView === 'aboutMe', 'blinking-cursor': currentView === 'aboutMe' }" class="cascadiacodefont">About Me</button>
        <div class="slider" :class="{ 'slide-projects': currentView === 'projects', 'slide-aboutMe': currentView === 'aboutMe',  'slide-tools': currentView === 'tools'}"></div>
      </div>
    </div>
    <div v-if="currentView === 'projects'">
      <Projects />
    </div>
    <div v-if="currentView === 'tools'">
      <Tools />
    </div>
    <div v-if="currentView === 'aboutMe'">
      <AboutMe />
    </div>
  </div>
</template>

<script>
import Name from '@/components/Name.vue'
import Socials from '@/components/Socials.vue'
import Projects from '@/components/Projects.vue'
import AboutMe from '@/components/AboutMe.vue'
import Tools from '@/components/Tools.vue'


export default {
  name: 'Home',
  components: {
    Name,
    Socials,
    Projects,
    AboutMe,
    Tools
  },
  data() {
    return {
      currentView: 'projects' // Default view
    };
  }
}
</script>

<style scoped>
.title {
  margin-top: 20vh;
}

.marginbottom5vh {
  margin-bottom: 5vh; /* Reduced margin-bottom */
}

.titlebackground {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#content {
    position: relative;
}
#content img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
}

.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #2a2a2a, #111111); /* Subtle gradient */
  overflow: auto;
  height: 100vh;
}

.home-screen::-webkit-scrollbar {
  width: 12px;
}

.home-screen::-webkit-scrollbar-track {
  background: transparent;
}

.home-screen::-webkit-scrollbar-thumb {
  background-color: rgba(83, 83, 83, 0.7);
  border-radius: 10px;
  border: 3px solid transparent;
}

.buttons {
  position: relative;
  display: flex;
  gap: 20px; /* Increased gap between buttons */
  margin-bottom: 5vh; /* Reduced margin-bottom */
}

button {
  background: none;
  color: #fefefe;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px 20px;
  width: 160px; /* Increased fixed width for buttons */
  position: relative;
  font-family: 'Cascadia Code'; /* Use your preferred font */
  white-space: nowrap; /* Prevent text wrapping */
}

button.active {
  font-weight: bold;
}

button:hover {
  color: #ccc;
}

.slider {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 33%;
  background-color: #333;
  transition: transform 0.3s ease;
}

.slide-projects {
  transform: translateX(0%);
}

.slide-tools {
  transform: translateX(100%);
}

.slide-aboutMe {
  transform: translateX(200%);
}


.blinking-cursor::after {
  content: '|';
  animation: blink 1.2s infinite;
  margin-left: 5px;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>