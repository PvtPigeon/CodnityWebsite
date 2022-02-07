import {React, useRef} from "react";
import Cards from "./Cards.js";
// import { styled, createTheme, ThemeProvider} from '@mui/system';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";


const HomeContainer = styled("div")({
  background: "center center/cover no-repeat",
  minHeight: "100vh",
  width: "100%",
  boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)",
  backgroundImage : "url( /images/cafe_interiorr.jpg)",
  textAlign: "center",
  paddingBottom: "40px"
    
});



const HomeContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 0 80px 0"
});



function Home () {
  const cardRef = useRef(null);

  function handleClick() {
    cardRef.current.scrollIntoView({behavior: "smooth"})
  };
  return (
      <HomeContainer>
          <HomeContent>
            <Typography  variant="h1">
              Cafe`s of Riga
            </Typography>
            <Typography  variant="h4">
              Best tasting coffee there is
            </Typography>
              <Button onClick = {handleClick} variant="contained"  color="primary">
                Find your cafe!
              </Button>
          </HomeContent>
            <div ref={cardRef}>
              <Cards />
            </div>
      </HomeContainer>
      
  )
}
export default Home;