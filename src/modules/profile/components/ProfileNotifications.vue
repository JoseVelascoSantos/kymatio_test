<template>
  <div class="position-fixedd-flex flex-column rounded overflow-hidden profile-notifications-general-container">
    <div class="d-flex flex-row justify-content-between align-items-center p-1 text-white profile-notifications-header-container">
      <h5 class="m-0 position-relative px-4">
        Notifications
        <span class="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
          {{ profile.notifications.length }}
        </span>
      </h5>
      <button class="profile-notifications-button-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#notificationList">
        <i class="button-collapse bi bi-chevron-down text-white"></i>
        <i class="button-not-collapse bi bi-chevron-up text-white"></i>
      </button>
    </div>
    <div class="collapse show" id="notificationList">
      <div class="d-flex flex-column gap-2 m-2">
        <div v-for="notification in profile.notifications" :key="notification.text" :class="'rounded d-flex justify-content-between align-items-center ' + getClassFromNotificationType(notification.type)" role="alert">
          <span class="p-2">{{notification.text}}</span>
          <button type="button" class="btn p-0 p-2">
            <i :class="'bi fs-3 bi-eye' + (notification.read ? '' : '-slash')"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type {User} from "../models/User.ts";

function getClassFromNotificationType(type: string): string {
  switch (type) {
    case 'password-renewal': return 'profile-notifications-warning';
    case 'email-breach': return 'profile-notifications-danger';
    case 'new-coworker': return 'profile-notifications-success';
    default: return 'secondary';
  }
}

export default {
  methods: {
    getClassFromNotificationType
  },
  props: {
    profile: {
      type: Object as () => User,
      required: true,
    },
  },
};
</script>

<style>
.profile-notifications-general-container {
  border: 2px solid var(--primary-color);
  width: 100%;
  max-width: 600px;
}

.profile-notifications-header-container {
  background-color: var(--primary-color);
}

.profile-notifications-button-collapse {
  background-color: var(--primary-color);
  font-size: 26px;
  padding: 0;
}

.profile-notifications-button-collapse .button-not-collapse {
  display: none;
}

.profile-notifications-button-collapse:not(.collapsed) .button-not-collapse {
  display: inline;
}

.profile-notifications-button-collapse .button-collapse {
  display: inline;
}

.profile-notifications-button-collapse:not(.collapsed) .button-collapse {
  display: none;
}

.profile-notifications-danger {
  background-color: #fc7575;
}

.profile-notifications-warning {
  background-color: #ffcf0d;
}

.profile-notifications-success {
  background-color: #5eda5e;
}
</style>
