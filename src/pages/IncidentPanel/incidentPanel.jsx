import React, { useEffect, useState } from "react";
import { Table, Button, FormControl } from "react-bootstrap";
import { AiOutlineNumber } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { HiCalendarDays } from "react-icons/hi2";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { TbClockHour4 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ListItems } from "../login/crudHooks";
import { incidentCompanyPageURL, incidentTruckPageURL } from "../../api/apiurl";
import { ListPaginatedData } from "../../hooks/listPaginatedData";
import { PaginacionUtils } from "../../hooks/paginacionUtils";
import { formatDate } from "../../utils/timeFormatters";

export function IncidentPanel() {
  const navigate = useNavigate();

  const companyId = localStorage.getItem("companyId");

  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [incidentData, setIncidentData] = useState();

  const viewIncidentDetails = (id) => {
    localStorage.setItem("incidentIdSelected", id)
    localStorage.setItem("routeback", "/incidents")
    navigate("/incident-details");
  };

  useEffect(() => {
    ListPaginatedData(`${incidentCompanyPageURL}/${companyId}?page=${pageNumber}`, setIncidentData, setTotalPages, setCurrentPage);
  }, [pageNumber]);

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
          {incidentData && incidentData.length > 0 && incidentData.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{formatDate(incident.dia)}</td>
              <td>{incident.hora}</td>
              <td>{incident.nombre}</td>
              <td>{incident.estado ? "Revisado" : "Sin revisar"}</td>
              <td>
                <Button onClick={() => viewIncidentDetails(incident.id)} variant="info" size="sm">
                  Ver detalles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginacionUtils setPageNumber={setPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
