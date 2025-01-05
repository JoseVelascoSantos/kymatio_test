<template>
  <Menu />
  <div class="h-100 mh-100 w-100 mw-100 d-flex flex-row justify-content-center align-items-center">
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading && !profile" class="text-danger">No se han podido obtener los datos del usuario.</div>
    <div v-if="error" class="text-danger">{{ error }}</div>

    <ProfileSummary v-if="!loading && profile" :profile="profile" />
    <div v-if="!loading && profile" class="flex-grow-1 d-flex flex-column align-items-center gap-1 p-3 overflow-scroll">
      <ProfileNotifications :profile="profile" />
      <ProfileEvolution :profile="profile" />
      <ProfileGamification :profile="profile" />
    </div>
    <ProfileAlerts v-if="!loading && profile" :profile="profile" />
  </div>
  <Chatbot />
</template>

<style>
.spinner-border {
  color: var(--primary-color);
}
</style>

<script lang="ts">
import { onMounted } from "vue";
import { ProfileViewModel } from "./ProfileViewModel";
import ProfileSummary from "./components/ProfileSummary.vue";
import ProfileAlerts from "./components/ProfileAlerts.vue";
import ProfileNotifications from "./components/ProfileNotifications.vue";
import ProfileEvolution from "./components/ProfileEvolution.vue";
import ProfileGamification from "./components/ProfileGamification.vue";
import Menu from "../../components/Menu.vue";
import Chatbot from "../chatbot/Chatbot.vue";

export default {
  components: {
    Chatbot,
    Menu,
    ProfileEvolution,
    ProfileNotifications,
    ProfileAlerts,
    ProfileSummary,
    ProfileGamification
  },
  setup() {
    const viewModel = new ProfileViewModel();

    onMounted(() => {
      viewModel.fetchProfile();
    });

    return {
      profile: viewModel.profile,
      loading: viewModel.loading,
      error: viewModel.error,
    };
  },
};
</script>
