<template>
  <div class="position-fixed bottom-0 w-100 px-4 d-flex flex-column">
    <div v-for="alert in profile.alerts" :key="alert.text" :class="'alert alert-dismissible fade show alert-' + alert.type" role="alert">
      <strong>Alert:</strong> {{alert.text}}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script lang="ts">
import type {User} from "../models/User.ts";

export default {
  props: {
    profile: {
      type: Object as () => User,
      required: true,
    },
  },
};
</script>
