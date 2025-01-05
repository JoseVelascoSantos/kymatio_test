<template>
  <div class="p-3 h-100 d-flex text-white flex-column align-items-center gap-3 profile-summary-general-container">
    <img class="profile-summary-avatar" :src="profile.avatar" :alt="profile.first_name + ' avatar'" />
    <h4>{{ profile.first_name + " " + profile.last_name }}</h4>
  </div>
</template>

<script lang="ts">
import {User} from "../models/User.ts";

export default {
  props: {
    profile: {
      type: Object as () => User,
      required: true,
    },
  },
};
</script>

<style>
.profile-summary-general-container {
  background-color: var(--primary-color);
  width: 15rem;
}

.profile-summary-avatar {
  width: 10rem;
  border-radius: 100%;
}

@media only screen and (max-width: 870px) {
  .profile-summary-general-container {
    width: 3rem;
  }

  .profile-summary-general-container h4 {
    display: none;
  }

  .profile-summary-avatar {
    width: 2rem;
  }
}

</style>
