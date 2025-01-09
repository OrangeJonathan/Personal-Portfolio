<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import Home from './views/home.vue';



export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>