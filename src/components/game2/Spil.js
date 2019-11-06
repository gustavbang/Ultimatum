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
                    <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '50px', marginTop: '50px'}}>Quiz battle</Typography>
                    <Typography style={{color: 'white', fontSize: '1.3em', fontFamily: 'Bitter', fontWeight: '500'}}>Vælg en quiz-makker hver. Vælg en 5. person der er quiz-master: Hver gruppe får 5 spørgsmål.
                        Personen der fik udfordringen er nu quizmaster. De resterende deltagere deles op i 2 hold. Quizmasteren læser nu 1 spørgsmål højt ad gangen(5 i alt). Holdene skriver hver især deres svar ned. Det hold med flest rigtige svar på give en bunder ud til modstanderholdet.

                    </Typography>

                    <Grid style={{height: '140px'}}/>

                    <Grid direction={"row"}>
                        <Link to={"BadResult2"}>
                            <img src={ThumbsDown} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                        <Link to={"GoodResult2"}>
                            <img src={ThumbsUp} style={{width: '150px', margin: '30px'}}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Spil
