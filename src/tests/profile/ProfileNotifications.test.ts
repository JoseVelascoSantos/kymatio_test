import { mount } from '@vue/test-utils';
import {describe, it, expect, vi, afterEach} from 'vitest';
import ProfileNotifications from '../../modules/profile/components/ProfileNotifications.vue';
import {profileMockData} from '../mocks/ProfileMock.ts';

describe('ProfileNotifications.vue', () => {

  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('Renders the profile notifications component correctly', () => {
    const wrapper = mount(ProfileNotifications, {
      props: {
        profile: profileMockData
      }
    });

    expect(wrapper.find('.profile-notifications-general-container').exists()).toBe(true);
    expect(wrapper.find('.profile-notifications-header-container').text()).toContain('Notifications');
  });

  it("Displays the correct number of notifications in the badge", () => {
    const wrapper = mount(ProfileNotifications, {
      props: {
        profile: profileMockData
      }
    });

    const badge = wrapper.find(".badge");
    expect(badge.text()).toBe(String(profileMockData.notifications.length));
  });

  it("Applies correct classes based on notification type", () => {
    const wrapper = mount(ProfileNotifications, {
      props: {
        profile: profileMockData
      }
    });

    const notifications = wrapper.findAll("div[role='alert']");

    expect(notifications[0].classes()).toContain("profile-notifications-warning");
    expect(notifications[1].classes()).toContain("profile-notifications-danger");
    expect(notifications[2].classes()).toContain("profile-notifications-success");
  });

  it("Renders the correct icon based on read status", () => {
    const wrapper = mount(ProfileNotifications, {
      props: {
        profile: profileMockData
      }
    });

    const buttons = wrapper.findAll("button");

    expect(buttons[1].find("i").classes()).toContain("bi-eye-slash");
    expect(buttons[2].find("i").classes()).toContain("bi-eye")
    expect(buttons[3].find("i").classes()).toContain("bi-eye-slash");
  });

  it("Renders the correct text for each notification", () => {
    const wrapper = mount(ProfileNotifications, {
      props: {
        profile: profileMockData
      }
    });

    const notificationTexts = wrapper.findAll("div[role='alert'] span");

    expect(notificationTexts[0].text()).toBe(profileMockData.notifications[0].text);
    expect(notificationTexts[1].text()).toBe(profileMockData.notifications[1].text);
    expect(notificationTexts[2].text()).toBe(profileMockData.notifications[2].text);
  });


});
