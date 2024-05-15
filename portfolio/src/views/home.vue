<template>
  <div class="home-screen">
    <div class="titlebackground">
      <div class="title">
        <Name />
      </div>
      <Socials class="marginbottom15vh"/>
    </div>
    <AboutMe class="marginbottom15vh"/>
    <Projects />
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
}
</script>

<style scoped>

.title {
  margin-top: 20vh;
}

.marginbottom15vh {
  margin-bottom: 15vh;
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
  background-color: #151515; /* Very dark gray or black */
  overflow: auto; /* Add this */
  height: 100vh; /* Add this */
}

.home-screen::-webkit-scrollbar {
  width: 12px ;
}

.home-screen::-webkit-scrollbar-track {
  background: transparent ;
}

.home-screen::-webkit-scrollbar-thumb {
  background-color: rgba(83, 83, 83, 0.7) ;
  border-radius: 10px ;
  border: 3px solid transparent ;
}

</style>
