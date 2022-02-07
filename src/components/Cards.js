import * as React from "react";

import { styled } from "@mui/system";
import {
    Fab,
    Card,
    CardActions,
    CardMedia,
    Typography,
    Grid,
    CardContent,
    Container

} from "@mui/material";


const CardsContainer = styled(Container)({
    padding: "80px 0 80px 0",
    margin: "40px auto 40px auto",
    backgroundColor: "#FF9F45",
    textAlign: "center",
    borderRadius : "15px"
});


const CardTitle = styled("div")({
    paddingBottom: "40px",
    fontWeight: "Bold"
});



function Cards() {
    return (
    <CardsContainer>
            <CardTitle>
                <Typography variant="h3" >
                    VISIT THESE BEAUTIFUL CAFE`S NOW
                </Typography>
            </CardTitle>
        <Grid container justifyContent = "center" direction = "row" rowSpacing={3} columnSpacing = {{xs: 1, sm : 2, md : 3}}>
            <Grid item xs={6} >
                <Card>
                    <CardMedia
                    component="img"
                    alt="Coffee LV img"
                    height="200"
                    image="/images/caffeine_lv.png"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{mr : 1}}>
                        Caffeine LV
                    </Typography>
                    <Typography variant="body2">
                        Come to visit the nearest Caffeine after expertly cooked coffee or buy Caffeine coffee beans for aromatic mornings at home
                        Come to visit the nearest Caffeine after expertly
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Fab href="https://caffeine.lv/" variant = "extended" size="large" color = "secondary" sx={{mr : 1}}>
                        <Typography>
                            Visit Cafe Page
                        </Typography>
                        </Fab>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item   xs={6}>
                <Card >
                    <CardMedia
                    component="img"
                    alt="Coffee LV img"
                    height="200"
                    image="/images/costacoffee_lv.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{mr : 1}}>
                            Costa Coffee
                        </Typography>
                        <Typography variant="body2">
                        From revolutionary methods and commitment to quality to unforgettable successes that have made Costa Coffee the Nation’s Favourite* coffee shop, our story is as unique as our coffee.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Fab href="https://www.costa.lv/lv/" variant = "extended" size="large" color = "secondary" sx={{mr : 1}}>
                            <Typography>
                                Visit Cafe Page
                            </Typography>
                        </Fab>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card >
                    <CardMedia
                    component="img"
                    alt="Coffee LV img"
                    height="200"
                    image="/images/all_cappuccino.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"  sx={{mr : 1}}>
                        A.l.l. Cappuccino
                        </Typography>
                        <Typography variant="body2">
                            Different from your standard, everyday chain-style coffee shop, this tiny place has personality. 
                            There’s plenty of stuff to go around, even decaf, as tea, hot cocoa and lots of soft drinks.    
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Fab href="https://www.allcappuccino.lv/" variant = "extended" size="large" color="secondary" sx={{mr : 1}}>
                            <Typography>
                                Visit Cafe Page
                            </Typography>
                        </Fab>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={6}>
                <Card >
                    <CardMedia
                    component="img"
                    alt="Coffee LV img"
                    height="200"
                    image="/images/miitcoffee_lv.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"  sx={{mr : 1}}>
                            MiiT Coffee
                        </Typography>
                        <Typography variant="body2">
                            The offer is not and will not be uniform, because every day the café chefs conjure up something new and exciting.
                            Vegans and people who need to follow a smooth diet will also find a suitable meal for themselves
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Fab href="https://www.facebook.com/miit.tiim/" variant = "extended" size="large" color = "secondary">
                        <Typography>
                            Visit Cafe Page
                        </Typography>
                        </Fab>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </CardsContainer>
    );
}

export default Cards;
