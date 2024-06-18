import React from "react";
import { Table, Button, FormControl } from "react-bootstrap";
import { AiOutlineNumber } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { HiCalendarDays } from "react-icons/hi2";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const incidents = [
  { id: 1, day: "2024-06-01", time: "08:30", incident: "Falla de motor", status: "Pendiente" },
  { id: 2, day: "2024-06-02", time: "14:00", incident: "Presión baja en neumático", status: "Resuelto" },
  { id: 3, day: "2024-06-03", time: "16:45", incident: "Problemas de frenos", status: "En progreso" },
  { id: 4, day: "2024-06-04", time: "10:15", incident: "Aceite bajo", status: "Pendiente" },
  { id: 5, day: "2024-06-05", time: "11:00", incident: "Problemas eléctricos", status: "Resuelto" },
  { id: 6, day: "2024-06-06", time: "09:30", incident: "Refrigerante bajo", status: "En progreso" },
  { id: 7, day: "2024-06-07", time: "13:45", incident: "Luz de freno defectuosa", status: "Pendiente" },
  { id: 8, day: "2024-06-08", time: "15:30", incident: "Fallo en el sistema de GPS", status: "Resuelto" },
  { id: 9, day: "2024-06-09", time: "12:00", incident: "Sobrecalentamiento", status: "En progreso" },
  { id: 10, day: "2024-06-10", time: "07:50", incident: "Falla en el alternador", status: "Pendiente" },
];

export function IncidentPanel() {
  const navigate = useNavigate();

  const viewIncidentDetails = () => {
    navigate("/incident-details");
  };

  return (
    <div className="c-background">
      <span className="title">Panel de incidencias</span>
      <br />

      <FormControl type="text" placeholder="Buscar por placa" style={{ width: "30%", margin: "10px 0px 10px 60% " }} />

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
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.day}</td>
              <td>{incident.time}</td>
              <td>{incident.incident}</td>
              <td>{incident.status}</td>
              <td>
                <Button onClick={viewIncidentDetails} variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
