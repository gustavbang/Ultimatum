import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';
import Background from "../../assets/img/background.png";
import Typography from "@material-ui/core/Typography";

//images
import ThumbsDown from '../../assets/img/thumbs_down.png'
import ThumbsUp from '../../assets/img/thumbs_up.png'
import {Link} from "react-router-dom";





class GoodResult extends React.Component {

    componentDidMount() {
    }


    render()  {
        return (
            <Grid container justify={"center"} alignItems={"center"} style={{width: '100%'}}>
                <img src={Background} style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '-10'}}/>
                <Grid container direction={"column"} alignItems={"center"} justify={"center"} style={{height: '80vh', width: '50%'}}>
                    <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '50px', marginTop: '50px'}}>Du er en stjerne</Typography>
                    <Typography style={{color: 'white', fontSize: '1.3em', fontFamily: 'Bitter', fontWeight: '500'}}>modtag 10 øl fra loui med S
                    </Typography>

                    <Grid style={{height: '140px'}}/>

                    <Grid direction={"row"} style={{border: '6px solid #FE6347'}}>
                        <Link to={"spil2"} style={{textDecoration: 'none'}} >
                            <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700', margin: '20px'}}>Nyt spørgsmål</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default GoodResult
