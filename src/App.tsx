import API from "./services/API";
import album from "./types/items";
import { useEffect, useState } from "react";
import AlbumTitle from "./components/albumTitle";

const App = ()=>{
  const [items,setItems] = useState<album[]>();
  useEffect(()=>{
    getPromise();
  },[])

  const getPromise = async ()=>{
    const json = await API.getAlbum();
    setItems(json);
  }
  return(
    <div>
      {items?.map((item,index)=>(
         <AlbumTitle key = {index} id = {item.id} title={item.title}/>
      ))}
    </div>
  )
}
export default App