import API from "../../services/API";
import album from "../../types/items";
import { useEffect, useState } from "react";
import AlbumTitle from "../../components/albumTitle";
import * as S from './style'


const Home = ()=>{
    
    const [items,setItems] = useState<album[]>([]);
  useEffect(()=>{
    getPromise();
  },[])

  const getPromise = async ()=>{
    const json = await API.getAllAlbums();
    setItems(json);
  }
  return(
    <S.AlbumsContainer>
      {items?.map((item,index)=>(
         <AlbumTitle key = {index} id = {item.id} title={item.title}/>
      ))}
    </S.AlbumsContainer>
  )
}
export default Home