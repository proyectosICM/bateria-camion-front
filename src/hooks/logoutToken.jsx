import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LogoutToken() { 
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return null;
}
