import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import MobileBackgroundDark from "../assets/img/mobile_background_dark.png";

import Typography from "@material-ui/core/Typography";

import {Link} from "react-router-dom";

//Stylesheet
import stylesheet from '../assets/style.css'
import Background from "./Reuseables/Background";
//images



class Landingpage extends React.Component {

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} justify={"center"} >
                    <Grid container justify={"center"} alignItems="center" direction={"column"}>
                        <Grid style={{height: '50px', width: '100vw'}}/>
                        <Typography style={{color: 'white', fontSize: '2.5em', fontFamily: 'Bitter', fontWeight: '700'}}>Ultimatum</Typography>
                        <Typography style={{color: 'white', fontSize: '1.5em', fontFamily: 'Bitter', fontWeight: '500'}}>Festen starter her!</Typography>

                    </Grid>



                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100vw', marginTop: '30px'}}>
                        <form action="https://gmail.us5.list-manage.com/subscribe/post?u=af0c1b08d198ac67e4c19d987&amp;id=52625faf3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <Typography style={{color :'white', fontSize: '1.2em', fontFamily: 'Bitter', fontWeight: '500', marginBottom: '10px', marginLeft: '20px'}}>Skriv dig på maillisten for tidlig adgang til Ultimatum</Typography>

                            <Grid container alignItems={"center"} justify={"center"}><input className={"button"} type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe"/></Grid>
                        </form>
                    </Grid>

                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100vw', marginTop: '30px'}}>
                        <Typography style={{color :'white', fontSize: '1.2em', fontFamily: 'Bitter', fontWeight: '500', marginBottom: '10px'}}>Eller prøv spillet nu:</Typography>

                        <Grid container alignItems={"center"} justify={"center"}><Link className={"button"} type="submit" to={"/BeforeYouStart"}>Spil Ultimatum</Link></Grid>
                    </Grid>

                </Grid>

            </Grid>
        )
    }
}

export default Landingpage
