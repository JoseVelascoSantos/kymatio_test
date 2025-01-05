import { reactive } from "vue";
import axios from "axios";

export const chatbotStore = reactive({
  questions: null,
  loading: false,
  error: '',

  async fetchQuestions() {
    this.loading = true;
    this.error = '';

    try {
      const response = await axios.get('https://618404bd91d76c00172d1d23.mockapi.io/api/chat');
      this.questions = response.data[0].questions;
    } catch (err) {
      this.error = "Error al cargar las preguntas";
    } finally {
      this.loading = false;
    }
  },
});
