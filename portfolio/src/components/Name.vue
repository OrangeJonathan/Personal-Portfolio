<template>
    <div class="">
      <div class="typing-effect">
        <span class="typed-text">{{ typedName }}</span>
        <span class="cursor blink">|</span>
      </div>
    </div>
  </template>
  
  <script>
  import Socials from '@/components/Socials.vue'
  export default {
    data() {
      return {
        name: "Jonathan Kat",
        typedName: "",
        typingSpeed: 150, // Adjust typing speed in milliseconds
      };
    },
    mounted() {
      this.typeName();
    },
    components: {
      Socials,
    },
    methods: {
      typeName() {
        let index = 0;
        const intervalId = setInterval(() => {
          this.typedName += this.name[index];
          index++;
          if (index === this.name.length) {
            clearInterval(intervalId);
          }
        }, this.typingSpeed);
      },
    },
  };
  </script>
  
  <style scoped>  
  .typing-effect {
    color: #ffffff; /* White or very light gray */
    font-size: 2rem; /* Adjust font size as needed */
    font-family: 'Arial', sans-serif; /* Use your preferred font */
    white-space: nowrap;
  }
  
  .cursor {
    animation: blink 0.7s infinite;
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  </style>
  