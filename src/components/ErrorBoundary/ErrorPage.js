import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";

const ErrorPage = ({ error, errorInfo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/signin");
      window.location = "/login";
    }, 1000);
    return () => {};
  }, []);

  return <></>;
};
export default ErrorPage;
