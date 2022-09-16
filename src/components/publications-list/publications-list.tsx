// https://mui.com/material-ui/react-image-list/#main-content

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useEffect, useState } from 'react';
import { IPublication } from '../../models/publication';
import { PublicationsListService } from '../../services/publications-list-service';

const myStyle = { 
  // border: "2px solid red",
  // borderRadius: "25px",
};
let front = true;

interface IState {
  loading: boolean;
  publications: IPublication[];
  errorMessage: string;
}



export default function PublicationsList() {

  let [state, setState] = useState<IState>({
    loading: false,
    publications: [] as IPublication[],
    errorMessage : ''
  });

  useEffect(() => {

    setState({
      ...state,
      loading: true
    });

    PublicationsListService
      .getAllPublications()

      .then( (response) => {
        // alert(JSON.stringify(response.data));
        setState({
          ...state,
          loading: false,
          publications: response.data,
        });
      })

      .catch( (error) => {
        // console.log(error.errorMessage)
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        });
      });

  }, []);

  let {loading, publications, errorMessage} = state;
  loading ? console.log(loading): console.log(loading);
  errorMessage ? alert(errorMessage): console.log(errorMessage);


  return (
    <>
      <ImageList variant="masonry" cols={5} gap={8}>
        {publications.map((item) => (
          <ImageListItem key={item.front}>
              <img style={myStyle}
                src={item.front}
                alt={item.title}
                id={"e"}
                onDoubleClick={() => window.open(item.back)}
                loading="lazy" />

            <ImageListItemBar position="bottom" title={item.title} subtitle={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
    
  );
}

