import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import Typography from "@material-ui/core/Typography";

//images
import Background from '../assets/img/background.png'
import MobileBackgroundDark from '../assets/img/mobile_background_dark.png'
import Logo from '../assets/img/logo.png'
import {Link} from "react-router-dom";

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
                {window.outerWidth > 800 ?
                    <img src={Background} style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '-10'
                    }}/>
                    :
                    <img src={MobileBackgroundDark} style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '-10'
                    }}/>
                }
                <Grid container direction={"column"} style={{width: '100%'}}>
                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100%', marginTop: '20px'}}>
                        <img src={Logo} style={{width: '150px'}}/>
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

export default Landingpage
