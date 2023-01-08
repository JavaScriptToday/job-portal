import { render, screen } from "@testing-library/vue";

import ActionButton from "@/components/ActionButton.vue";

describe("Action Button", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click/i,
    });
    expect(button).toBeInTheDocument();
  });
  it("applies one of several styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", {
      name: /click/i,
    });
    expect(button).toHaveClass("primary");
  });
});
