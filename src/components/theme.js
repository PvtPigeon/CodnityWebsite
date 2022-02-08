import { createTheme } from "@mui/material";
import {orange, yellow, red } from "@mui/material/colors";

const primaryColor = yellow[300];
const heading1Color = yellow[300];
const secondaryColor = orange[200];
const hoverColor = red[300];

const theme = createTheme({
    palette : {
        primary : {
            main : primaryColor,
        },
        secondary : {
            main : secondaryColor,
        },
    },
    components : {
        MuiFab : {
            defaultProps : {
                target : "_blank"
            },
            styleOverrides : {
                sizeLarge : {
                    "&:hover" : {
                        color: "white",
                        backgroundColor : hoverColor,
                    },
                }
            }
        },
        MuiButton : {
            styleOverrides : {
                contained : {
                    fontWeight : "bold",
                    fontSize : "20px",
                    "&:hover" : {
                        color : "white",
                        backgroundColor : hoverColor,
                    }
                }
            }
        },
        MuiTypography : {
            styleOverrides : {
                h1 : {
                    fontWeight: "bold",
                    marginBottom : "10px",
                    color : heading1Color
                },
                h3 : {
                    fontWeight : "bold"
                },
                h4 : {
                    color : "white",
                    margin : "10px 0 30px 0",
                    fontWeight : "bold"
                },
                h5 : {
                    fontWeight : "bold"
                }
            }
        },
        MuiLink : {
            defaultProps : {
                target : "_blank"
            }
            
        },
        MuiAppBar : {
            styleOverrides : {
                colorPrimary : {
                    backgroundColor : "black"
                }
            }
        
        },
        MuiGrid : {
            styleOverrides : {
                item : {
                    display : "flex",
                    justifyContent : "space-between",
                }
            }
        },
        MuiCardActions : {
            styleOverrides : {
                root : {
                    flexDirection : "column",
                }
            }
        },
        MuiIconButton : {
            defaultProps : {
                target : "_blank"
            }
        }
    },
});

export default theme;