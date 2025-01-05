import { computed } from "vue";
import { profileStore } from "./ProfileStore";

export class ProfileViewModel {
  private store: any;
  constructor() {
    this.store = profileStore;
  }

  get profile() {
    return computed(() => this.store.profile);
  }

  get loading() {
    return computed(() => this.store.loading);
  }

  get error() {
    return computed(() => this.store.error);
  }

  fetchProfile() {
    this.store.fetchProfile();
  }
}
