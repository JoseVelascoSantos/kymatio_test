import { computed } from "vue";
import { chatbotStore } from "./ChatbotStore";

export class ChatbotViewModel {
  private store: any;
  constructor() {
    this.store = chatbotStore;
  }

  get questions() {
    return computed(() => this.store.questions);
  }

  get loading() {
    return computed(() => this.store.loading);
  }

  get error() {
    return computed(() => this.store.error);
  }

  fetchQuestions() {
    this.store.fetchQuestions();
  }
}
