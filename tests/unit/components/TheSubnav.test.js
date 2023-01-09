import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/TheSubnav.vue";

// Test will be changed when real pages added

describe("TheSubnav", () => {
  describe("When user is on jobs page", () => {
    it("Displays  job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("When user is not on jobs page", () => {
    it("Does NOT display the job count"),
      () => {
        render(TheSubnav, {
          global: {
            stubs: {
              FontAwesomeIcon: true,
            },
          },
          data() {
            return {
              onJobResultsPage: false,
            };
          },
        });

        const jobCount = screen.queryByText("1653");

        expect(jobCount).not.toBeInTheDocument();
      };
  });
});
