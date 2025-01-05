<template>
  <div class="home-screen">
    <div class="titlebackground">
      <div class="title">
        <Name />
      </div>
      <Socials class="marginbottom5vh"/> <!-- Adjusted margin class -->
      <div class="buttons">
        <button @click="currentView = 'projects'" :class="{ active: currentView === 'projects' }" class="cascadiacodefont">Projects</button>
        <button @click="currentView = 'aboutMe'" :class="{ active: currentView === 'aboutMe' }" class="cascadiacodefont">About Me</button>
        <div class="slider" :class="{ 'slide-projects': currentView === 'projects', 'slide-aboutMe': currentView === 'aboutMe' }"></div>
      </div>
    </div>
    <div v-if="currentView === 'projects'">
      <Projects />
    </div>
    <div v-else>
      <AboutMe />
    </div>
  </div>
</template>

<script>
import Name from '@/components/Name.vue'
import Socials from '@/components/Socials.vue'
import Projects from '@/components/Projects.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'Home',
  components: {
    Name,
    Socials,
    Projects,
    AboutMe,
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

.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151515;
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
  gap: 10px;
  margin-bottom: 5vh; /* Reduced margin-bottom */
}

button {
  background: none;
  color: #fefefe;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px 20px;
  position: relative;
  font-family: 'Cascadia Code'; /* Use your preferred font */
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
  width: 50%;
  background-color: #333;
  transition: transform 0.3s ease;
}

.slide-projects {
  transform: translateX(0%);
}

.slide-aboutMe {
  transform: translateX(100%);
}
</style>