import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Graphics } from "../../common/graphics/graphics";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { CgDanger } from "react-icons/cg";
import { BsBatteryHalf } from "react-icons/bs";
import { AiFillThunderbolt, AiOutlineNumber } from "react-icons/ai";
import { FaCarBattery, FaExclamationTriangle } from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

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
              <th>
                <BsBatteryHalf className="icon" /> Carga %
              </th>
              <th>
                <AiFillThunderbolt className="icon" /> Voltaje V
              </th>
              <th>
              <FaCarBattery className="icon" />  Corriente A
              </th>
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
            <th>ID <AiOutlineNumber className="icon" /></th>
            <th>Día <HiCalendarDays className="icon" /></th>
            <th>Hora <TbClockHour4 className="icon"/>
            </th>
            <th>
              Incidencia <CgDanger className="icon"/>
            </th>
            <th>Estado <MdOutlineAssignmentTurnedIn className="icon" /></th>
            <th>
              Opciones <SlOptions className="icon"/>
            </th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td>22/01/2024</td>
              <td>12:15 AM</td>
              <td>Fallo de sistema</td>
              <td>Pendiente</td>
              <td>
                <Button variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>22/01/2024</td>
              <td>11:30 AM</td>
              <td>Error de conexión</td>
              <td>Resuelto</td>
              <td>
                <Button variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>22/01/2024</td>
              <td>10:25 PM</td>
              <td>Problema de energía</td>
              <td>En curso</td>
              <td>
                <Button variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>22/01/2024</td>
              <td>09:45 PM</td>
              <td>Problema de energía</td>
              <td>En curso</td>
              <td>
                <Button variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button className="n-button">
          {" "}
          <CgDanger className="icon" /> Ver historial de incidencias de este vehiculo <FaExclamationTriangle />
        </Button>
      </div>
    </div>
  );
}
