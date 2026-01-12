import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza o texto principal", () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
