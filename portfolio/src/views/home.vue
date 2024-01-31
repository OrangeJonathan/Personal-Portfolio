<template>
  <div class="home-screen">
    <Name />
    <Socials />
  </div>
</template>

<script>
import Name from '@/components/Name.vue'
import Socials from '@/components/Socials.vue'
export default {
    name: 'Home',
    components: {
    Name,
    Socials,
  },
}
</script>

<style scoped>
  .home-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a1a; /* Very dark gray or black */
  }
</style>