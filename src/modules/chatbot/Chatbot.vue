<template>
  <div class="position-fixed d-flex flex-column bg-white rounded shadow-lg chatbot-general-container">
    <div class="d-flex flex-row justify-content-between align-items-center text-white px-2 chatbot-header-container">
      <h5 class="m-0">Chatbot <i class="bi bi-messenger"></i></h5>
      <button class="chatbot-button-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#chatbotContent">
        <i class="button-collapse bi bi-chevron-up text-white"></i>
        <i class="button-not-collapse bi bi-chevron-down text-white"></i>
      </button>
    </div>
    <div class="collapse show" id="chatbotContent">
      <div class="d-flex flex-column justify-content-center align-items-center chatbot-content-container">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="!loading && questions" class="d-flex flex-column flex-grow-1 overflow-scroll" ref="chatContent">
          <div v-for="questionIndex in (questions.length < answers.length + 1 ? questions.length : answers.length + 1)" class="d-flex flex-column">
            <div class="m-2 d-flex flex-row justify-content-start align-items-center">
              <div class="px-2 py-1 rounded chatbot-message" v-html="questions[questionIndex - 1].title"></div>
            </div>
            <div v-if="questionIndex <= answers.length" class="m-2 d-flex flex-row justify-content-end align-items-center">
              <div
                  class="px-2 py-1 rounded text-white chatbot-user-message"
                  v-html="questions[questionIndex - 1].answers.find((a: any) => a.value === answers[questionIndex - 1]).title"
              >
              </div>
            </div>
            <div v-if="questionIndex <= answers.length && questions[questionIndex - 1].successMessages" class="m-2 d-flex flex-row justify-content-start align-items-center">
              <div
                  class="px-2 py-1 rounded chatbot-message"
                  v-html="questions[questionIndex - 1].successMessages.find((sm: any) => sm.value === answers[questionIndex - 1]).title"
              >
              </div>
            </div>
          </div>
        </div>
        <div v-if="!loading && questions && answers.length < questions.length" class="m-2 p-1 d-flex flex-column gap-1 chatbot-user-container-response">
          <span>Answer:</span>
          <button
              v-for="answerIndex in questions[answers.length].answers.length"
              class="py-1 rounded text-white d-flex flex-row chatbot-user-response"
              @click="setAnswer(questions[answers.length].answers[answerIndex - 1].value)"
          >
            <span>({{answerIndex}})</span>
            <span class="flex-grow-1" v-html="questions[answers.length].answers[answerIndex - 1].title"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.chatbot-general-container {
  bottom: 0.5rem;
  right: 0.5rem;
  border: 2px solid #31BA4F;
  z-index: 20;
  width: 20rem;
}

@media only screen and (max-width: 870px) {
  .chatbot-general-container {
    width: 100vw;
    bottom: 0;
    right: 0;
  }
}

.chatbot-header-container {
  background-color: #31BA4F;
}

.chatbot-button-collapse {
  background-color: #31BA4F;
  font-size: 26px;
  padding: 0;
}

.chatbot-button-collapse .button-not-collapse {
  display: none;
}

.chatbot-button-collapse:not(.collapsed) .button-not-collapse {
  display: inline;
}

.chatbot-button-collapse .button-collapse {
  display: inline;
}

.chatbot-button-collapse:not(.collapsed) .button-collapse {
  display: none;
}

.chatbot-content-container {
  height: 25rem;
}

.chatbot-message {
  background-color: #d0d0d0;
}

.chatbot-user-message {
  background-color: #31BA4F;
}

.chatbot-user-container-response {
  border-top: 2px solid #31BA4F;
  width: calc(100% - 1rem);
}

.chatbot-user-response {
  background-color: #31BA4F;
  border: 0;
}

.chatbot-user-response:hover {
  background-color: #56bb6c;
  border: 0;
}
</style>

<script lang="ts">
import {nextTick, onMounted, ref} from "vue";
import {ChatbotViewModel} from "./ChatbotViewModel";

export default {
  methods: {
    handleKeyPress(event: any) {
      const key = event.key;
      if (!isNaN(key) && !this.loading && this.questions && this.answers.length < this.questions.length) {
        const validValues = this.questions[this.answers.length].answers.map((a: any) => a.value);
        const value = Number(key);
        if (validValues.includes(value)) {
          this.setAnswer(value);
        }
      }
    },
    setAnswer(answerValue: number) {
      this.answers.push(answerValue);

      this.scrollToBottom();
    },
    scrollToBottom() {
      nextTick(() => {
        if (this.chatContent) {
          const container = this.chatContent;
          console.log(this.chatContent);
          console.log(container);
          if (container) {
            container.scrollTop = container.scrollHeight;
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  },
  setup() {
    const viewModel = new ChatbotViewModel();;

    onMounted(() => {
      viewModel.fetchQuestions();
    });

    return {
      answers: ref<number[]>([]),
      questions: viewModel.questions,
      chatContent: ref<HTMLElement | null>(null),
      loading: viewModel.loading,
      error: viewModel.error,
    };
  }
};
</script>
