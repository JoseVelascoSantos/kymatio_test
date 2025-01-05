import { reactive } from "vue";
import axios from "axios";

export const profileStore = reactive({
  profile: null,
  loading: false,
  error: '',

  async fetchProfile() {
    this.loading = true;
    this.error = '';

    try {
      const response = await axios.get('https://618404bd91d76c00172d1d23.mockapi.io/api/profile');
      this.profile = response.data[0];
    } catch (err) {
      this.error = "Error al cargar los usuarios";
    } finally {
      this.loading = false;
    }
  },
});
