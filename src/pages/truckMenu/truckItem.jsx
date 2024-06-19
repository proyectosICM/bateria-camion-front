import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { FaCarBattery } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import "./truckItems.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function TruckItem({data}) {
  const navigate = useNavigate();  
  console.log(data) 


  const handleDetails = (id) => {
    localStorage.setItem("truckIdSelected", id);
    navigate('/details');
  };

  return (
    <div className="t-item">
      <div className="plate-container">
        <FaTruckMoving className="truck-icon" />
        <span className="plate-value">{data.placa}</span>
      </div>
      <div className="item">
        <span className="label">Carga:</span>
        <span className="value">80%</span>
        <BsBatteryHalf className="car-ti-icon" />
      </div>
      <div className="item">
        <span className="label">Voltaje:</span>
        <span className="value">12.6V</span>
        <AiFillThunderbolt className="car-ti-icon" />
      </div>

      <div className="item">
        <span className="label">Corriente:</span>
        <span className="value">1.2A</span>
        <FaCarBattery className="car-ti-icon" />
      </div>
      <Button onClick={() => handleDetails(data.id)}>Ver detalles</Button>
    </div>
  );
}
