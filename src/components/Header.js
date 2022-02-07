import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Container,
    useMediaQuery
} from "@mui/material";
import Drawer from "./Drawer";
import theme from "./theme";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const NavbarLinks = styled("div")({
    marginRight : theme.spacing(15),
    display : "flex"
});

const Links = styled(Link)({
    textDecoration : "none",
    color : "white",
    fontWeight : "bold",
    fontSize : "20px",
    marginLeft : theme.spacing(20),
    "&:hover" : {
        color : "#ff9033",
        borderBottom : "1px solid white"
    },
});

function Header() {

    
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <AppBar position="sticky" >
            <CssBaseline />
            <Container maxWidth="xl">
                <Toolbar>
                <Typography variant = "h5" sx={{flexGrow : 1}}>
                    Riga Cafe`s
                </Typography>
                {isMobile ? (
                    <Drawer/>
                    ) : (
                        <NavbarLinks>
                            <Links to="/">
                                Home
                            </Links>
                            <Links to="/coffees" >
                                Coffees
                            </Links>
                        </NavbarLinks>
                        
                    )
                }
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;