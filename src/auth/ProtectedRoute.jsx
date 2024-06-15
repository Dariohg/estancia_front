import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useCustomNav from "../hook/useCustomNav";
import { Outlet } from "react-router-dom";


const ProtectedRoute = ({ children, pagePermission }) => {
    const { navRefreshTo, currentPath } = useCustomNav();
    const [cookies, setCookie] = useCookies(["session_token", "role_session"]);
    const [isAllowed, setIsAllowed] = useState(false);

    const verifyToken = async () => {
        const token = cookies.session_token;
        console.log('el token de autenticacion es: ',token);
        const roleCode =  cookies.role_session;
        console.log('el rol de autenticacion es: ',roleCode);

        console.log(currentPath);

        if(!token){
            navRefreshTo("/login");
            return;
        }

        let role;
        if ("super_user", roleCode) {
            role = "super_user";
        } else if ("user", roleCode) {
            role = "user";
        } else {
            role = null;
        }

        const allowedRoles = {
            "super_user": ["super_user", "user"],
            "user": ["user"],
        };

        if (allowedRoles[role].includes(pagePermission)) {
            setIsAllowed(true);
        } else {
            setIsAllowed(false);
            if (role === "user") {
                navRefreshTo("/home");
            } else {
                navRefreshTo("/login");
            }
        }
    };

    useEffect(() => {
        verifyToken();
    }, []);

    return isAllowed ? (children || <Outlet />) : null;
};

export default ProtectedRoute;