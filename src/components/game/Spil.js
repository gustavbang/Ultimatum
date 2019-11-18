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
                    <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '50px', marginTop: '50px'}}>Spotify battle</Typography>
                    <Typography style={{color: 'white', fontSize: '1.3em', fontFamily: 'Bitter', fontWeight: '500'}}>Personen der fik udfordringen er nu nynnemaster og dommer og den eneste der må se på telefonen. de resterende deltagere deles op i 2 hold. nynnemasteren får 3 sange at vælge imellem (3 runder). Nynnemasteren skal i hver af de 3 runder, vælge en af de 3 sange i spotify(eller lign) som han skal nynne for de 2 hold. det hold som først gætter sangen må give 5 tåre ud til modstanderholdet.
                    </Typography>

                    <Grid style={{height: '140px'}}/>

                    <Grid direction={"row"}>
                        <Link to={"BadResult"}>
                            <img src={ThumbsDown} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                        <Link to={"GoodResult"}>
                            <img src={ThumbsUp} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Spil