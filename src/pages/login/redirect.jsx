import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutToken } from "../../hooks/logoutToken";
import { userInfoURL } from "../../api/apiurl";
import { ListItems } from "./crudHooks";

export function Redirect() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const username = localStorage.getItem("username");

  LogoutToken();
  useEffect(() => {
    ListItems(`${userInfoURL}/${username}`, setData);
  }, [username]);

  useEffect(() => {
    if (data) {
      let path;
      switch (data.rolesModel.id) {
        case 1:
          path = "/driver";
          break;
        case 2:
          path = "/driver";
          break;
        case 3:
          path = "/menu";
          break;
        case 4:
          path = "/sa";
          break;
        default:
          path = "/";
          break;
      }
      
      navigate(path);
    }
  }, [data, navigate]);

  return (
    <>
      <h1>Redirigiendo</h1>
    </>
  );
}
