import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import Beer from '../assets/img/animated_beer.png'

//images



const Title = styled.h1`
  font-size: 2em;
  color: #067291;
`;

const Subtitle = styled.h1`
  font-size: 1.5em;
  color: #C4E3E6;
`;

const Text = styled.p`
  font-size: 1.0em;
  color: #067291;
`;



class Landingpage extends React.Component {

    componentDidMount() {
    }



    render()  {
        return (
            <Grid container alignItems={"center"} justify={"center"} style={{backgroundColor: '#3164CC', width: '100%', height: '100vh'}}>
                <img src={Beer} style={{width: '30vh'}}/>
            </Grid>
        )
    }
}

export default Landingpage
