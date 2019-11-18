import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";

//images
import ThumbsDown from '../../assets/img/thumbs_down.png'
import ThumbsUp from '../../assets/img/thumbs_up.png'
import {Link} from "react-router-dom";
import Background from "../Reuseables/Background";





class Spil extends React.Component {

    componentDidMount() {
    }


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                    <Typography style={{color: 'black', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '10px', marginTop: '25px'}}>Spotify battle</Typography>
                    <Typography style={{color: 'black', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '10px'}}>Personen der fik udfordringen er nu nynnemaster og dommer og den eneste der må se på telefonen. de resterende deltagere deles op i 2 hold. nynnemasteren får 3 sange at vælge imellem (3 runder). Nynnemasteren skal i hver af de 3 runder, vælge en af de 3 sange i spotify(eller lign) som han skal nynne for de 2 hold. det hold som først gætter sangen må give 5 tåre ud til modstanderholdet.
                    </Typography>

                    <Grid direction={"row"}>
                        <Link to={"BadResult"}>
                            <img src={ThumbsDown} style={{width: '40px', margin: '20px'}}/>
                        </Link>
                        <Link to={"GoodResult"}>
                            <img src={ThumbsUp} style={{width: '40px', margin: '20px'}}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Spil
