import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import Typography from "@material-ui/core/Typography";

//images
import MobileBackgroundDark from '../assets/img/mobile_background_dark.png'
import Logo from '../assets/img/logo.png'
import {Link} from "react-router-dom";
import Background from "./Reuseables/Background";


class BeforeYouStart extends React.Component {

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} style={{width: '100%'}}>
                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100%', marginTop: '20px'}}>
                        <Typography style={{color :'white', fontSize: '1.7em', fontFamily: 'Bitter', fontWeight: '500', marginTop: '10px'}}>Før du starter..</Typography>

                        <Grid container direction={"row"} justify={"center"}>
                            <img src={Logo} style={{height: '75px', marginTop: '10px'}}/>
                            <Typography style={{color :'white', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '15px', width: '150px'}}>Alle spillere er over 18 år</Typography>
                        </Grid>
                        <Grid container direction={"row"} justify={"center"}>
                            <img src={Logo} style={{height: '75px', marginTop: '10px'}}/>
                            <Typography style={{color :'white', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '15px', width: '150px'}}>Alle spillere drikker ansvarligt</Typography>
                        </Grid>
                        <Grid container direction={"row"} justify={"center"}>
                            <img src={Logo} style={{height: '75px', marginTop: '10px'}}/>
                            <Typography style={{color :'white', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '15px', width: '150px'}}>Accepter vores cookie- og privatlivspolitik</Typography>
                        </Grid>
                        <Link className={"button"} type="submit" to={"/Players"}>Accepter</Link>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default BeforeYouStart