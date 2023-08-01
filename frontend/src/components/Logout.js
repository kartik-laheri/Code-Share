import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navigate("/");
    window.location.reload();
  }, []);

  return <>Logout Page</>;
};

export default Logout;
