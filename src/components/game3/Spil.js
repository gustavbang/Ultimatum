import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';
import Background from "../../assets/img/background.png";
import Typography from "@material-ui/core/Typography";

//images
import ThumbsDown from '../../assets/img/thumbs_down.png'
import ThumbsUp from '../../assets/img/thumbs_up.png'
import {Link} from "react-router-dom";





class Spil extends React.Component {

    componentDidMount() {
    }


    render()  {
        return (
            <Grid container justify={"center"} alignItems={"center"} style={{width: '100%'}}>
                <img src={Background} style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '-10'}}/>
                <Grid container direction={"column"} alignItems={"center"} justify={"center"} style={{height: '80vh', width: '50%'}}>
                    <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '50px', marginTop: '50px'}}>Flip the cup</Typography>
                    <Typography style={{color: 'white', fontSize: '1.3em', fontFamily: 'Bitter', fontWeight: '500'}}>Alle deltagere deles op i 2  hold. Herefter placeres en plastikkop med bunden i vejret, på bordkanten, og foran hver deltager. der tælles ned fra 3 til nu, og på nu starter deltageren fra hvert hold i samme ende med at flippe sin kop. når koppen er vendt, og landet korrekt på bunden, skal næste spiller i rækken begynde. Alle spillere fra det tabende hold skal vise et billede af deres værste scoring og tage 3 tåre. En endelig vinder af værste scoring findes og vedkommende må som kompensation give en bunder ud til en fra modstanderholdet.
                    </Typography>

                    <Grid style={{height: '100px'}}/>

                    <Grid direction={"row"}>
                        <Link to={"BadResult3"}>
                            <img src={ThumbsDown} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                        <Link to={"GoodResult3"}>
                            <img src={ThumbsUp} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Spil
