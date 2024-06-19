import React, { useEffect, useState } from "react";
import { TruckItem } from "./truckItem";
import "./truckMenu.css";
import NavBarG from "../../common/navbarG";
import { LogoutToken } from "../../hooks/logoutToken";
import { ListPaginatedData } from "../../hooks/listPaginatedData";
import { truckCompanyPageURL, truckCompanyURL } from "../../api/apiurl";
import { PaginacionUtils } from "../../hooks/paginacionUtils";

export function TruckMenu() {
  LogoutToken();
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [data, setData] = useState();

  const companyId = localStorage.getItem("companyId");


  useEffect(() => {
    ListPaginatedData(`${truckCompanyPageURL}/${companyId}?page=${pageNumber}`, setData, setTotalPages, setCurrentPage)
  }, [pageNumber]);

  return (
    <div className="c-background">
      <h1 className="title">Menu de Camiones</h1>
      <div className="menu-container">
        {data && data.length > 0 ? (
          data.map((truck) => (
            <TruckItem
              key={truck.id}
              data={truck}
              id={truck.id}
              name={truck.name}
              model={truck.model}
              licensePlate={truck.licensePlate}
            />
          ))
        ) : (
          <p>No hay camiones disponibles.</p>
        )}
      </div>
      <PaginacionUtils setPageNumber={setPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
