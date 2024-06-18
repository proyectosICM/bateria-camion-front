import React from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { FaCarBattery } from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export function IncidentDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <Button className="backButton" onClick={() => navigate("/incidents")}>
        Atras
      </Button>
      <div>
        <div
          style={{
            width: "80%",
            height: "330px",
            border: "2px solid black",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "25px",
            backgroundColor: "#1b5381"
          }}
        >
          <span className="title">Bateria responsable de la incidencia: 0001</span>
          <br />
          <span className="title">Placa del camion asociado: ABC-123</span>
          <br />
          <span className="title">Irregularidad: Presión baja en neumático</span>
          <br />
        </div>

        <Table striped bordered hover variant="dark" style={{ width: "80%", margin: "auto" }}>
          <thead>
            <tr>
              <th>
                Día <HiCalendarDays className="icon" />
              </th>
              <th>
                Hora <TbClockHour4 className="icon" />
              </th>
              <th>
                <BsBatteryHalf className="icon" /> Carga registrada %
              </th>
              <th>
                <AiFillThunderbolt className="icon" /> Voltaje registrado V
              </th>
              <th>
                <FaCarBattery className="icon" /> Corriente registrada A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-06-01</td>
              <td>08:30</td>
              <td>80%</td>
              <td>12V</td>
              <td>5A</td>
            </tr>
          </tbody>
        </Table>

        <span className="title">Estado de la Irregularidad: Pendiente a revision</span>
        <br />
        <span className="title">Revisado por: Pendiente a revision</span>
        <br />
        <Button>Marcar irregularidad como revisada</Button>
      </div>
    </div>
  );
}
