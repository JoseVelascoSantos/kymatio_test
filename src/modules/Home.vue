<template>
  <Menu />
  <div class="h-100 mh-100 w-100 mw-100 d-flex flex-column justify-content-center align-items-center gap-5">
    <h1 class="text-center">Prueba de capacitación tecnológica Kymatio</h1>
    <h3 class="text-center">Desarrollado por José Velasco</h3>
  </div>
  <Chatbot />
</template>

<script setup lang="ts">
import Menu from "../components/Menu.vue";
import Chatbot from "./chatbot/Chatbot.vue";
</script>
