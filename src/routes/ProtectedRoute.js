import React, { useEffect, useRef } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { expiredToken, reset } from "../features/userSlice";

export default function ProtectedRoute() {
  const location = useLocation();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const logOutRef = useRef(false);
  let navigate = useNavigate();

    let token = user !== null ? user?.accessToken : false;
    let decodedToken = jwt_decode(token);
    let currentDate = new Date();

    console.log(decodedToken);

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      dispatch(reset());
      dispatch(expiredToken());
      localStorage.clear();
      token = false;
    }

    return token ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );

//   useEffect(() => {
//     // if (user) dispatch(getAllExams());
//     if (logOutRef.current) {
//       if (user) {
//         navigate("/login");
//       }
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [user]);

//   if (!user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} />;
//   }
}
