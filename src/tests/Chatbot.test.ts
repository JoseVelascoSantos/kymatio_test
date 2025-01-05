import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Chatbot from '../modules/chatbot/Chatbot.vue';

let currentMockData: any = {
  questions: [],
  loading: false
};

describe('Chatbot.vue', () => {
  const mockChatbotViewModel = (questions: any[], loading: boolean) => {
    currentMockData = { questions, loading };
    vi.mock('../modules/chatbot/ChatbotViewModel.ts', () => {
      return {
        ChatbotViewModel: vi.fn().mockImplementation(() => ({
          questions: currentMockData.questions,
          loading: currentMockData.loading,
          fetchQuestions: vi.fn()
        })),
      };
    });
  };

  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('Renders the chatbot component correctly', () => {
    mockChatbotViewModel([], true);

    const wrapper = mount(Chatbot);

    expect(wrapper.find('.chatbot-general-container').exists()).toBe(true);
    expect(wrapper.find('.chatbot-header-container').text()).toContain('Chatbot');
  });

  it('Displays the spinner when loading', () => {
    mockChatbotViewModel([], true);

    const wrapper = mount(Chatbot);

    expect(wrapper.find('.spinner-border').exists()).toBe(true);
  });

  it('Render first question and answers correctly', () => {
    mockChatbotViewModel(
      [
        {
          title: "Mocked Question 1",
          answers: [
            { value: 1, title: "Mocked Answer 1" },
            { value: 2, title: "Mocked Answer 2" },
          ],
        },
      ],
      false
    );

    const wrapper = mount(Chatbot);
    expect(wrapper.text()).toContain("Mocked Question 1");

    const questions = wrapper.findAll(".chatbot-message");
    expect(questions.length).toBe(1);
    expect(questions[0].text()).toBe("Mocked Question 1");

    const answers = wrapper.findAll(".chatbot-user-response");
    expect(answers.length).toBe(2);
    expect(answers[0].text()).toBe("(1)Mocked Answer 1");
    expect(answers[1].text()).toBe("(2)Mocked Answer 2");
  });

  it('Render first user response', async () => {
    mockChatbotViewModel(
      [
        {
          title: "Mocked Question 1",
          answers: [
            { value: 1, title: "Mocked Answer 1" },
            { value: 2, title: "Mocked Answer 2" },
          ],
        },
      ],
      false
    );

    const wrapper = mount(Chatbot);
    await wrapper.find('.chatbot-user-response').trigger('click');

    const messages = wrapper.findAll(".chatbot-user-message");
    expect(messages.length).toBe(1);
    expect(messages[0].text()).toBe("Mocked Answer 1");
  });

  it('Render first success message', async () => {
    mockChatbotViewModel(
      [
        {
          title: "Mocked Question 1",
          answers: [
            { value: 1, title: "Mocked Answer 1" },
            { value: 2, title: "Mocked Answer 2" },
          ],
          successMessages: [
            { value: 1, title: "Mocked success message 1" },
            { value: 1, title: "Mocked success message 2" },
          ]
        },
      ],
      false
    );

    const wrapper = mount(Chatbot);
    await wrapper.find('.chatbot-user-response').trigger('click');

    const messages = wrapper.findAll(".chatbot-message");
    expect(messages.length).toBe(2);
    expect(messages[1].text()).toBe("Mocked success message 1");
  });
});
