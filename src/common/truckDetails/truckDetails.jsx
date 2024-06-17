import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Graphics } from "../graphics/graphics";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";

export function TruckDetails() {
  const navigate = useNavigate();

  // Datos simulados para el gráfico
  const graphicsData = [
    {
      carrilId: 1,
      carrilNombre: "Carril 1",
      dias: [
        { fecha: [2023, 6, 15], cantidad: 5 },
        { fecha: [2023, 6, 16], cantidad: 8 },
        { fecha: [2023, 6, 17], cantidad: 3 },
      ],
    },
    // Agregar más datos según sea necesario para diferentes carriles
  ];

  const [showStatistics, setShowStatistics] = useState(false);

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="c-background">
      <Button className="backButton" onClick={() => navigate("/menu")}>
        Atras
      </Button>
      <div>
        <span className="title">Placa 1234</span>
        <Table striped bordered hover variant="dark" style={{ width: "80%", margin: "auto" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Batería</th>
              <th>Voltaje</th>
              <th>Corriente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>80%</td>
              <td>12V</td>
              <td>5A</td>
            </tr>
            <tr>
              <th>2</th>
              <td>90%</td>
              <td>12.5V</td>
              <td>4.5A</td>
            </tr>
            <tr>
              <th>3</th>
              <td>60%</td>
              <td>11.8V</td>
              <td>6A</td>
            </tr>
          </tbody>
        </Table>

        {/* Renderizar el componente Graphics */}
      </div>

      <Button className="n-button" onClick={toggleStatistics}>
        {showStatistics ? <IoIosEyeOff className="icon" /> : <IoIosEye className="icon" />}
        {showStatistics ? " Ocultar estadisticas " : " Mostrar estadisticas "}
        <ImStatsDots className="icon" />
      </Button>
      {showStatistics && (
        <>
          <div className="graph-container-bat">
            <span className="subtitle-white">Bateria 1</span>
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
          </div>
          <div className="graph-container-bat">
            <span className="subtitle-white">Bateria 2</span>
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
          </div>
          <div className="graph-container-bat">
            <span className="subtitle-white">Bateria 3</span>
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
            <Graphics gdata={graphicsData} type="individual" id={1} nombre="Carril 1" />
          </div>
        </>
      )}
    <div>
        <span className="title">Incidencias recientes</span>
        <Table striped bordered hover variant="dark" style={{ width: "80%", margin: "auto" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Día</th>
              <th>Hora</th>
              <th>Incidencia</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>22/01/2024</td>
              <td>10:15 AM</td>
              <td>Fallo de sistema</td>
              <td>Pendiente</td>
            </tr>
            <tr>
              <td>2</td>
              <td>22/01/2024</td>
              <td>11:30 AM</td>
              <td>Error de conexión</td>
              <td>Resuelto</td>
            </tr>
            <tr>
              <td>3</td>
              <td>22/01/2024</td>
              <td>12:45 PM</td>
              <td>Problema de energía</td>
              <td>En curso</td>
            </tr>
          </tbody>
        </Table>
        <Button className="n-button">Ver incidencias</Button>
      </div>
    </div>

    
  );
}
