import * as S from './style'
import photo from '../../types/photo'
import {useNavigate} from 'react-router-dom'

type Props = {
   data: photo,
}

const AlbumPhoto = (props:Props)=>{

    const navigate = useNavigate();

    const handleClickPhoto = ()=>{
        navigate(`/photos/${props.data.id}`);
    }

    return(
       <S.AlbumContainer>
           <S.AlbumImgs onClick={handleClickPhoto} src = {props.data.thumbnailUrl}/>
       </S.AlbumContainer>
    )
}
export default AlbumPhoto;