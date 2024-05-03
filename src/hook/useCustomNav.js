import { useNavigate, useLocation } from "react-router-dom";

const useCustomNav = () => {
    const navigation = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;
    let domainPath = currentPath.split("/")[1];

    const goTo = (to) => navigation(to);

    const goBackR = () => {
        const pathArray = currentPath.split("/");
        const newPath = pathArray.slice(0, pathArray.length - 1).join("/");
        navigation(newPath);
    };

    const goBack = () => {
        navigation(-1);
    };

    const navRefreshTo = (route) => {
        window.location.href = route;
        // window.location.reload();
    }

    const navNewTabTo = (route) => {
        window.open(route, '_blank');
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return { goTo, goBack, goBackR, navRefreshTo, refreshPage, navNewTabTo, currentPath, domainPath };
};

export default useCustomNav;
