<template>
  <div class="app-general-container">
    <div class="app-inside-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Chatbot from "./modules/chatbot/Chatbot.vue";

export default {
  components: {
    Chatbot,
    Menu,
  },
};
</script>

<style>
:root {
  --primary-color: #10b783;
}

.app-general-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.app-inside-container {
  flex: 1;
}
</style>
