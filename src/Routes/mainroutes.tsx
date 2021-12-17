import { useRoutes } from "react-router-dom";
import Home from '../pages/home'
import Album from '../pages/album'
import Photo from '../pages/photo'
const MainRoutes = ()=>{
    
    return useRoutes([
        {path: "/", element:<Home/>},
        {path:"/album/:id", element:<Album/>},
        {path:"/photos/:id", element:<Photo/>}
    ])
}
export default MainRoutes;