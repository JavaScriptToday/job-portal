import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

// Testing if company name is in the document
// If  the company property (JavaScript Today - Careers) changes you must edit this otherwise won't pass the test.
describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("JavaScript Today - Careers");
    expect(companyName).toBeInTheDocument();
  });
  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    // Checking if the arrays are in the same order
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at JavaScript Today",
      "How we Hire",
      "Students",
      "Jobs",
    ]);
  });
});
