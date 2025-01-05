import type {User} from "../../modules/profile/models/User.ts";

export const profileMockData: User = {
  id: 'A',
  first_name: "User first name",
  last_name: "User last name",
  avatar: "https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  evolution: [
    {
      date: new Date(),
      value: 27349
    }
  ],
  alerts: [
    {
      type: "danger",
      text: "Mocked danger alert"
    },
    {
      type: "warning",
      text: "Mocked warning alert"
    },
    {
      type: "info",
      text: "Mocked info alert"
    }
  ],
  notifications: [
    {
      type: "password-renewal",
      date: new Date(),
      text: "Mocked password renewal notification",
      read: false
    },
    {
      type: "email-breach",
      date: new Date(),
      text: "Mocked email breach notification",
      read: true
    },
    {
      type: "new-coworker",
      date: new Date(),
      text: "Mocked new coworker notification",
      read: false
    }
  ],
  timeline: [
    {
      type: "cybersecurity",
      id: "1",
      startDate: new Date(),
      title: "Mocked cybersecurity timeline"
    },
    {
      type: "phishing",
      id: "2",
      startDate: new Date(),
      title: "Mocked phishing timeline"
    },
  ],
};
