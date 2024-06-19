import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { FaCarBattery } from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ListItems } from "../login/crudHooks";
import { incidentURL } from "../../api/apiurl";

export function IncidentDetails() {
  const navigate = useNavigate();

  const incidentIdSelected = localStorage.getItem("incidentIdSelected");
  const routeback = localStorage.getItem("routeback");
  const [incidentData, setIncidentData] = useState();

  useEffect(() => {
    ListItems(`${incidentURL}/${incidentIdSelected}`, setIncidentData);
  }, [incidentIdSelected]);

  return (
    <div>
      <Button className="backButton" onClick={() => navigate(`${routeback}`)}>
        Atras
      </Button>
      <div>
        <div
          style={{
            width: "80%",
            height: "230px",
            border: "2px solid black",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "25px",
            backgroundColor: "#1b5381",
          }}
        >
          <span className="title">Bateria responsable de la incidencia: {incidentData && incidentData.bateriasModels.id}</span>
          <br />
          <span className="title">Placa del camion asociado: {incidentData && incidentData.camionesModel.placa}</span>
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
              <td>{incidentData && incidentData.hora}</td>

              <td>{incidentData && incidentData.carga} %</td>
              <td>{incidentData && incidentData.voltaje} V</td>
              <td>{incidentData && incidentData.corriente} A</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <span className="title">Irregularidad: {incidentData && incidentData.nombre}</span>
        <br />
        <span className="title">Detalles: Fallo en tal y cual</span>
        <br />
        <br />
        <span className="title">Estado de la Irregularidad: {incidentData && incidentData.estado ? "Revisado" : "Sin revisar"}</span>
        <br />
        {incidentData && incidentData.estado ? (
          <span className="title">Revisado por: Usuario 22</span>
        ) : (
          <Button>Marcar irregularidad como revisada</Button>
        )}

        <br />
      </div>
    </div>
  );
}
