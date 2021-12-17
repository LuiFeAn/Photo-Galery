import MainRoutes from "./routes/mainroutes"
import { useNavigate } from "react-router-dom";

const App = ()=>{
  return(
    <>
    <h1>Galeria de Fotos</h1>
    <MainRoutes/>
    </>
  )
}
export default App