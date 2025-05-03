import Grid from "@mui/material/Grid2";
import imageOne from "./images/9.jpg";
import imageTwo from "./images/10.jpg";
import imageThree from "./images/11.jpg";
import imageFour from "./images/12.jpg";
import imageFive from "./images/13.jpg";
import imageSix from "./images/14.jpg";
import imageSeven from "./images/15.jpg";
import imageEight from "./images/16.jpg";
import imageTen from "./images/17.jpg";
import imageTwelve from "./images/18.jpg";
import imageThirteen from "./images/10.jpg";
import imageFourteen from "./images/11.jpg";


import * as React from "react";
import { Container } from "@mui/material";


const Gallery = () => {
    return (

        <>
            <Container sx={{ marginTop: '50px' }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <img src={imageOne} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageTwo} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageThree} height={"200px"} width={"100%"} />
                    </Grid>

                    <Grid size={4}>
                        <img src={imageFour} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageFive} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageSix} height={"200px"} width={"100%"} />
                    </Grid>

                    <Grid size={4}>
                        <img src={imageSeven} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageEight} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageTen} height={"200px"} width={"100%"} />
                    </Grid>


                    <Grid size={4}>
                        <img src={imageTwelve} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageThirteen} height={"200px"} width={"100%"} />
                    </Grid>
                    <Grid size={4}>
                        <img src={imageFourteen} height={"200px"} width={"100%"} />
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Gallery
