import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

// Runs before the tests start running
expect.extend(matchers);

// To prevent one test to affect the other test
afterEach(() => {
  cleanup();
});
