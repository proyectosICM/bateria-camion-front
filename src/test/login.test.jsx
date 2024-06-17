import React from "react";
import { render, screen, fireEvent, waitFor  } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../pages/login/useAuth"; // Corregido
import { LogoutToken } from "../hooks/logoutToken"; // Corregido
import { Login } from "../pages/login/login"; // Corregido

// Mocking useAuth and LogoutToken hooks
jest.mock("../pages/login/useAuth"); // Corregido
jest.mock("../hooks/logoutToken"); // Corregido
jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("Login Component", () => {
  beforeEach(() => {
    useAuth.mockReturnValue({
      login: jest.fn(),
      isLoading: false,
      error: null,
    });
    LogoutToken.mockImplementation(() => {});
  });

  test("renders login form", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const loginButtons = screen.getAllByText(/Iniciar sesión/i);
    expect(loginButtons.length).toBeGreaterThan(0);
    expect(screen.getByPlaceholderText(/Ingresa el usuario/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ingresa la contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Iniciar sesión/i })).toBeInTheDocument();
  });
  test("submits login form successfully", async () => {
    const mockLogin = jest.fn();
    useAuth.mockReturnValue({
      login: mockLogin,
      isLoading: false,
      error: null,
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText(/Ingresa el usuario/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText(/Ingresa la contraseña/i), { target: { value: "password" } });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /Iniciar sesión/i }));

    // Wait for the login function to be called
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("testuser", "password");
    });

    // Verify redirection
    expect(window.location.pathname).toBe("/"); // Assuming successful login redirects to '/'
  });
});
