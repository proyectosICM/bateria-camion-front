//Bases URL
export const base = "http://localhost:8080";
export const baseAPIURL = `${base}/api`;
export const loginURL = `${base}/login`;

//Users/Workers URL
export const userURL = `${baseAPIURL}/trabajadores`;
export const userInfoURL = `${userURL}/info`

// Trucks 
export const truckURL = `${baseAPIURL}/camiones`;
export const truckCompanyURL = `${truckURL}/empresa`
export const truckCompanyPageURL = `${truckURL}/empresa-page`

// Battery
export const batteryURL = `${baseAPIURL}/baterias`;
export const batteryTruckURL = `${batteryURL}/camion`