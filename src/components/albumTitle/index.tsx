import * as S from './style'
import {useParams,useNavigate} from 'react-router-dom';

type Props = {
    title: string,
    id: number,
}

const AlbumTitle = ({title,id}:Props)=>{

    const navigate = useNavigate();

    const handleList = async ()=>{
       navigate(`album/${id}`);
    }

    return(
        <S.TitleContainer>
          <S.TitleOrder>
              <S.TitleList onClick={handleList}>
                  Album: {id} - {title.toUpperCase()}
              </S.TitleList>
          </S.TitleOrder>
        </S.TitleContainer>
    )
}
export default AlbumTitle;