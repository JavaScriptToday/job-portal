import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

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
  describe("when the user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i, // i means case insensitive
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /Sign in/i,
      });
      // Click button is async / it returns promise
      await userEvent.click(loginButton);
      // Modify getByRole when backend added for automatic image change!
      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
