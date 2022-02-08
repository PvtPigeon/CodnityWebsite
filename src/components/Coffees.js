import * as React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Container,
  Typography,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "./theme";
import InfoIcon from "@mui/icons-material/Info";
import itemData from "./interior_data";

const InteriorContent = styled(Box)( {
  backgroundImage : "url( /images/interior_lv.jpg)", 
  overflow : "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)",
});


export default function MasonryImageList() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <InteriorContent  px={{xs : 5, sm : 5, md : 10}}  py={{xs : 5, sm : 12, md: 12}}>
      <Typography  variant="h1">
        Cozy interior designs
      </Typography>
      <Typography  variant="h4">
        Find a design for you
      </Typography>
      <Container  maxWidth="md" sx={{ borderRadius : "20px", backgroundColor : "white", height : "700px", overflowY : "scroll"}}  >
        {isMobile ? 
        (
        <ImageList  >
      {itemData.map((item) => (
        <ImageListItem key={item.img}  >
          <img 
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
              >
                <InfoIcon color="secondary" />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
        ): (
          <ImageList variant="masonry" cols={3} gap={6}>
          {itemData.map((item) => (
            <ImageListItem sx={{ borderRadius : "50px" }} key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                
              />
              <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton href={item.href}
                >
                  <InfoIcon color="secondary"/>
                </IconButton>
              }
              />
            </ImageListItem>
          ))}
        </ImageList>
        )}
      </Container>
    </InteriorContent>
  );
}
