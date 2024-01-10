<template>
    <div class="home-screen">
      <div class="typing-effect">
        <span class="typed-text">{{ typedName }}</span>
        <span class="cursor blink">|</span>
      </div>
    </div>
  </template>
  
  <script>
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
  .home-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1a1a1a; /* Very dark gray or black */
  }
  
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
  