import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../../../features/userSlice";

export default function ProtectedRoute() {
	// const location = useLocation();
	// let dispatch = useDispatch();
	// const { user } = useSelector((state) => state.userReducer);

	// let token = user !== null ? user?.token : false;
	// let decodedToken = jwt_decode(token);
	// let currentDate = new Date();

	// if (decodedToken.exp * 1000 < currentDate.getTime()) {
	// 	dispatch(reset());
	// 	token = false;
	// }

	// return token ? (
	// 	<Outlet />
	// ) : (
	// 	<Navigate to="/signin" state={{ from: location }} replace />
	// );
}
