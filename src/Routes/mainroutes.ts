import { useRoutes } from "react-router-dom";
import Home from '../../pages/home';
const MainRoutes = ()=>{
    
    return useRoutes([
        {path: "/", element = {<Home/>}}
    ])
}
export default MainRoutes;