import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Button } from "react-bootstrap";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function Graphics2({ gdata, type, id, nombre }) {
  if (!gdata || gdata.length === 0) {
    // Si gdata es null, undefined o una lista vacía, muestra un mensaje o realiza alguna acción alternativa
    return <div>No hay datos disponibles para graficar.</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${type === "individual" ? "Promedios por hora" : "Promedios diarios"} ${nombre ? "de " + nombre : ""}`,
      },
    },
  };

  let labels, voltajePromedioData, temperaturaPromedioData, cargaPromedioData, corrientePromedioData;

  // Determinar qué datos usar basado en el tipo (individual o diario)
  if (type === "individual") {
    labels = gdata.map((item) => item.hora);
    voltajePromedioData = gdata.map((item) => item.voltajePromedio);
    temperaturaPromedioData = gdata.map((item) => item.temperaturaPromedio);
    cargaPromedioData = gdata.map((item) => item.cargaPromedio);
    corrientePromedioData = gdata.map((item) => item.corrientePromedio);
  } else {
    labels = gdata.map((item) => item.dia.join("/")); // Formato de fecha: yyyy/mm/dd
    voltajePromedioData = gdata.map((item) => item.voltajePromedio);
    temperaturaPromedioData = gdata.map((item) => item.temperaturaPromedio);
    cargaPromedioData = gdata.map((item) => item.cargaPromedio);
    corrientePromedioData = gdata.map((item) => item.corrientePromedio);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Voltaje Promedio",
        data: voltajePromedioData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Temperatura Promedio",
        data: temperaturaPromedioData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Carga Promedio",
        data: cargaPromedioData,
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
      },
      {
        label: "Corriente Promedio",
        data: corrientePromedioData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} style={{ width: "100%", height: "300px", margin: "20px auto" }} />;
}
