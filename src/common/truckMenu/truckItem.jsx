import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { FaCarBattery } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import "./truckItems.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function TruckItem() {
  const navigate = useNavigate(); 

  return (
    <div className="t-item">
      <div className="plate-container">
        <FaTruckMoving className="truck-icon" />
        <span className="plate-value">ABC-1234</span>
      </div>
      <div className="item">
        <span className="label">Batería:</span>
        <span className="value">80%</span>
        <BsBatteryHalf className="car-battery-icon" />
      </div>
      <div className="item">
        <span className="label">Voltaje:</span>
        <span className="value">12.6V</span>
        <AiFillThunderbolt className="car-battery-icon" />
      </div>
      <div className="item">
        <span className="label">Carga:</span>
        <span className="value">70%</span>
        <FaCarBattery className="car-battery-icon" />
      </div>
      <div className="item">
        <span className="label">Corriente:</span>
        <span className="value">1.2A</span>
        <BsBatteryHalf className="car-battery-icon" />
      </div>
      <Button onClick={() => navigate('/details')}>Ver detalles</Button>
    </div>
  );
}
