import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";
import ProfileSummary from "../../modules/profile/components/ProfileSummary.vue";
import { profileMockData } from "../mocks/ProfileMock.ts";

describe("ProfileSummary.vue", () => {
  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("Renders the profile summary component correctly", () => {
    const wrapper = mount(ProfileSummary, {
      props: {
        profile: profileMockData,
      },
    });

    expect(wrapper.find(".profile-summary-general-container").exists()).toBe(true);
  });

  it("Displays the correct avatar", () => {
    const wrapper = mount(ProfileSummary, {
      props: {
        profile: profileMockData,
      },
    });

    const avatar = wrapper.find(".profile-summary-avatar");

    expect(avatar.attributes("src")).toBe(profileMockData.avatar);
    expect(avatar.attributes("alt")).toBe(`${profileMockData.first_name} avatar`);
  });

  it("Displays the correct full name", () => {
    const wrapper = mount(ProfileSummary, {
      props: {
        profile: profileMockData,
      },
    });

    const name = wrapper.find("h4");

    const fullName = `${profileMockData.first_name} ${profileMockData.last_name}`;
    expect(name.text()).toBe(fullName);
  });
});
