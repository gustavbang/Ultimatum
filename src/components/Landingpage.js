import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import Beer from '../assets/img/animated_beer.png'
import Girls from '../assets/img/girls.png'
import Guys from '../assets/img/guys.png'
import Background from '../assets/img/background.png'
import Package from "./Package";
import Typography from "@material-ui/core/Typography";
import ThemeSlide from "./ThemeSlide";


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

const Button = styled.input`
  background-color: #960200;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`


class Landingpage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <img src={Background} style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '-10'}}/>
                <Grid container direction={"column"} justify={"center"} >
                    <Grid container justify={"center"} alignItems="center" direction={"column"}>
                        <Grid style={{height: '50px', width: '100vw'}}/>
                        <Typography style={{color: 'white', fontSize: '3em', fontFamily: 'Bitter', fontWeight: '700'}}>Ultimatum</Typography>
                        <Typography style={{color: 'white', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '500'}}>Festen starter her!</Typography>

                    </Grid>

                    <Grid container justify={"center"} direction={"row"} style={{width: '100%'}}>

                        <ThemeSlide/>

                    </Grid>


                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100vw', marginTop: '30px'}}>
                        <form action="https://gmail.us5.list-manage.com/subscribe/post?u=af0c1b08d198ac67e4c19d987&amp;id=52625faf3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <Typography style={{color :'white', fontSize: '1.7em', fontFamily: 'Bitter', fontWeight: '500', marginBottom: '10px'}}>Skriv dig på maillisten for tidlig adgang til Ultimatum</Typography>

                            <Grid container alignItems={"center"} justify={"center"}><Button type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" class="button"/></Grid>
                        </form>
                    </Grid>

                </Grid>

                <Grid style={{height: '300px', width: '100vw'}}/>

                </Grid>
        )
    }
}

export default Landingpage
