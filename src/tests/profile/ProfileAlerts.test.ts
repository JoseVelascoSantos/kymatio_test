import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";
import ProfileAlerts from "../../modules/profile/components/ProfileAlerts.vue";
import { profileMockData } from "../mocks/ProfileMock.ts";

describe("ProfileAlerts.vue", () => {
  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("Renders the profile alerts component correctly", () => {
    const wrapper = mount(ProfileAlerts, {
      props: {
        profile: profileMockData,
      },
    });

    expect(wrapper.find(".position-fixed").exists()).toBe(true);
  });

  it("Renders the correct number of alerts", () => {
    const wrapper = mount(ProfileAlerts, {
      props: {
        profile: profileMockData,
      },
    });

    const alerts = wrapper.findAll(".alert");
    expect(alerts.length).toBe(profileMockData.alerts.length);
  });

  it("Applies correct classes based on alert type", () => {
    const wrapper = mount(ProfileAlerts, {
      props: {
        profile: profileMockData,
      },
    });

    const alerts = wrapper.findAll(".alert");

    expect(alerts[0].classes()).toContain("alert-danger");
    expect(alerts[1].classes()).toContain("alert-warning");
    expect(alerts[2].classes()).toContain("alert-info");
  });

  it("Renders the correct text for each alert", () => {
    const wrapper = mount(ProfileAlerts, {
      props: {
        profile: profileMockData,
      },
    });

    const alertTexts = wrapper.findAll(".alert");

    expect(alertTexts[0].text()).toContain(profileMockData.alerts[0].text);
    expect(alertTexts[1].text()).toContain(profileMockData.alerts[1].text);
    expect(alertTexts[2].text()).toContain(profileMockData.alerts[2].text);
  });

  it("Includes a close button in each alert", () => {
    const wrapper = mount(ProfileAlerts, {
      props: {
        profile: profileMockData,
      },
    });

    const closeButtons = wrapper.findAll(".btn-close");
    expect(closeButtons.length).toBe(profileMockData.alerts.length);

    closeButtons.forEach((button) => {
      expect(button.attributes("aria-label")).toBe("Close");
    });
  });
});
