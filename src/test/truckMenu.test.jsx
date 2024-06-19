import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { LogoutToken } from "../../hooks/logoutToken";
import { ListPaginatedData } from "../../hooks/listPaginatedData";
import { TruckMenu } from "../pages/truckMenu/truckMenu";

// Mocking dependencies
jest.mock("../../hooks/logoutToken");
jest.mock("../../hooks/listPaginatedData");
jest.mock("./truckItem", () => ({
  TruckItem: ({ name }) => <div>{name}</div>
}));

describe("TruckMenu Component", () => {
  beforeEach(() => {
    LogoutToken.mockImplementation(() => {});
    ListPaginatedData.mockImplementation((url, setData, setTotalPages, setCurrentPage) => {
      setData([
        { id: 1, name: "Camión 1", model: "Modelo 1", licensePlate: "ABC-123" },
        { id: 2, name: "Camión 2", model: "Modelo 2", licensePlate: "DEF-456" },
      ]);
      setTotalPages(1);
      setCurrentPage(0);
    });
  });

  test("renders TruckMenu with trucks", () => {
    render(
      <Router>
        <TruckMenu />
      </Router>
    );

    expect(screen.getByText("Menu de Camiones")).toBeInTheDocument();
    expect(screen.getByText("Camión 1")).toBeInTheDocument();
    expect(screen.getByText("Camión 2")).toBeInTheDocument();
  });

  test("shows 'No hay camiones disponibles' when there are no trucks", () => {
    ListPaginatedData.mockImplementationOnce((url, setData, setTotalPages, setCurrentPage) => {
      setData([]);
      setTotalPages(0);
      setCurrentPage(0);
    });

    render(
      <Router>
        <TruckMenu />
      </Router>
    );

    expect(screen.getByText("Menu de Camiones")).toBeInTheDocument();
    expect(screen.getByText("No hay camiones disponibles.")).toBeInTheDocument();
  });
});
