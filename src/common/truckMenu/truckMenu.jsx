import React from "react";
import { TruckItem } from "./truckItem";
import "./truckMenu.css";
import NavBarG from "./../navbarG";
import { LogoutToken } from "./../../hooks/logoutToken";

export function TruckMenu() {
  LogoutToken();

  return (
    <div className="c-background">
      <h1 className="title">Menu de Camiones</h1>
      <div className="menu-container">
        <TruckItem />
        <TruckItem />
        <TruckItem />
        <TruckItem />
        <TruckItem />
        <TruckItem />
        <TruckItem />
        <TruckItem />
      </div>
    </div>
  );
}
