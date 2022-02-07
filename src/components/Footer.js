import React from "react";
import 
{
    Grid,
    Container,
    Box,
    Link,
    Typography,
    useMediaQuery
}
from "@mui/material";
import theme from "./theme";

import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterContainer = styled(Container)({
    display : "flex"
});

const FooterContainerGrid = styled(Grid)({
    flexGrow : "1",
    alignItems : "center"
});

const FooterSocialIconsContainer = styled(Grid)({
    direction: "row",
    justifyContent : "center",
    alignItems : "center",
    display : "flex"
})

const FooterSocialIcons = styled(Box)({
    marginLeft : "30px",
})



const FacebookSocialIcon = styled(FacebookIcon)({
    fontSize : "90px"
})

const InstagramSocialIcon = styled(InstagramIcon)({
    fontSize : "90px"
})
const TwitterSocialIcon = styled(TwitterIcon)({
    fontSize : "90px"
})

function Footer() {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <Box px = {{xs : 7, sm : 12, md : 12}} py={{xs : 5, sm : 12, md: 12}}>
        <FooterContainer >
            <FooterContainerGrid container rowSpacing = {6}>
                <Grid textAlign="center" item xs={12} sm={4} lg={3} xl={3}>
                    {isMobile ? (
                    <Box borderBottom={1}>
                        <Typography variant="h4" color="black">
                            Check out our Social Media
                        </Typography>
                    </Box>
                    ) : (
                        <Box borderRight= {1}>
                        <Typography variant="h4" color="black">
                            Check out our Social Media
                        </Typography>
                    </Box>
                    )}
                </Grid>
                <FooterSocialIconsContainer container item xs={11} sm={8} >
                    <FooterSocialIcons item>
                        <Link href="https://www.facebook.com/codnity/" > 
                            <FacebookSocialIcon color="secondary" />
                        </Link>
                    </FooterSocialIcons>
                    <FooterSocialIcons item>
                        <Link  href="https://www.instagram.com/becodnity/" >
                            <InstagramSocialIcon color="secondary"/>
                        </Link>
                    </FooterSocialIcons>
                    <FooterSocialIcons item >
                        <Link href="https://twitter.com/codnity" >
                            <TwitterSocialIcon color="secondary" />
                        </Link>
                    </FooterSocialIcons>
                </FooterSocialIconsContainer>
            </FooterContainerGrid>
        </FooterContainer>
      </Box>
    )
}

export default Footer;
