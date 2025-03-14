import { greet } from "../greet";

test("greets the user by name", () => {
  expect(greet("Cux")).toBe("Hello, Cux!");
});
