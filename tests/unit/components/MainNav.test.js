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
});
