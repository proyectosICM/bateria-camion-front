import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ListItems } from "../login/crudHooks";
import { detailsBatteryAVGDURL, detailsBatteryAVGHURL, detailsBatteryPagebURL } from "../../api/apiurl";
import { ListPaginatedData } from "../../hooks/listPaginatedData";
import { formatDate } from "../../utils/timeFormatters";
import { PaginacionUtils } from "../../hooks/paginacionUtils";
import { Graphics } from "./../../common/graphics/graphics";
import { Graphics2 } from "../../common/graphics/graphics2";

export function StatsDetails() {
  const navigate = useNavigate();

  const batteryIdSelected = localStorage.getItem("batteryIdSelected");

  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [detailsData, setDetailsData] = useState();
  const [dataHour, setDataHour] = useState();
  const [dataDay, setDataDay] = useState();
  
  useEffect(() => {
    ListPaginatedData(`${detailsBatteryPagebURL}/${batteryIdSelected}?page=${pageNumber}`, setDetailsData, setTotalPages, setCurrentPage);
  }, [pageNumber]);

  
  useEffect(() => {
    ListItems(`${detailsBatteryAVGHURL}/${batteryIdSelected}`, setDataHour);
    ListItems(`${detailsBatteryAVGDURL}/${batteryIdSelected}`, setDataDay);
  },[batteryIdSelected]);

  return (
    <div className="c-background">
      <Button className="backButton" onClick={() => navigate("/details")}>
        Atras
      </Button>
      <h1 className="title">Registros</h1>
      <Table striped bordered hover variant="dark" style={{ width: "80%", margin: "auto" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Dia</th>
            <th>Hora</th>
            <th>Codigo</th>
            <th>Voltaje</th>
            <th>Corriente</th>
            <th>Carga</th>
            <th>Temperatura</th>
          </tr>
        </thead>
        <tbody>
          {detailsData &&
            detailsData.length > 0 &&
            detailsData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{formatDate(data.dia)}</td>
                <td>{data.hora}</td>
                <td>{data.bateriasModel.nombre}</td>
                <td>{data.voltaje}</td>
                <td>{data.corriente}</td>
                <td>{data.carga}</td>
                <td>{data.temperatura}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <PaginacionUtils setPageNumber={setPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      <div className="graph-container-stats">
        <div style={{ width: "100%", height: "300px", display: "flex", flexDirection: "row" }}>
          <Graphics2 gdata={dataHour} type="individual" id={1} nombre="Carril 1" />
          <Graphics2 gdata={dataDay} type="d" id={1} nombre="Carril 1" />
        </div>
        <div style={{ width: "100%", height: "300px", display: "flex", flexDirection: "row" }}>
          <Graphics2 gdata={dataHour} type="individual" id={1} nombre="Carril 1" />
          <Graphics2 gdata={dataHour} type="individual" id={1} nombre="Carril 1" />
        </div>
      </div>
    </div>
  );
}
