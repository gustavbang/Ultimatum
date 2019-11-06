import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

import Beer from '../assets/img/animated_beer.png'
import Girls from '../assets/img/girls.jpg'
import Guys from '../assets/img/guys.jpg'
import NewYear from '../assets/img/newyear.jpg'
import Package from "./Package";
import Typography from "@material-ui/core/Typography";

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
  background-color: #4CAF50; /* Green */
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
            <Grid container style={{backgroundColor: '#3164CC', width: '100%'}}>
                <Grid container direction={"column"} justify={"center"} >
                    <Grid container justify={"center"} direction={"column"}>
                        <Grid style={{backgroundColor: '#3164CC', height: '50px', width: '100vw'}}/>
                        <Typography style={{color: 'white', fontSize: '3em'}}>Ultimatum</Typography>
                        <Typography style={{color: 'white', fontSize: '2em'}}>En social app som kan bla bla bla</Typography>

                    </Grid>

                    <Grid container justify={"center"} direction={"row"} style={{width: '100%'}}>
                        <Grid>
                        <Package img={Girls}/>
                            <Typography style={{color: 'white', fontSize: '1.8em'}}>Tøseaften</Typography>
                        </Grid>
                        <Grid>
                            <Package img={Guys}/>
                            <Typography style={{color: 'white', fontSize: '1.8em'}}>Drengeaften</Typography>
                        </Grid>
                        <Grid>
                            <Package img={NewYear}/>
                            <Typography style={{color: 'white', fontSize: '1.8em'}}>Nytårsaften</Typography>
                        </Grid>
                    </Grid>


                    <Grid container justify={"center"} style={{width: '100vw', marginTop: '100px'}}>
                        <form action="https://gmail.us5.list-manage.com/subscribe/post?u=af0c1b08d198ac67e4c19d987&amp;id=52625faf3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                <Typography style={{color :'white', fontSize: '1.7em'}}>Skriv dig på maillisten for tidlig adgang til Ultimatum</Typography>

                                <div><Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                        </form>
                    </Grid>

                </Grid>

                <Grid style={{backgroundColor: '#3164CC', height: '300px', width: '100vw'}}/>
                </Grid>
        )
    }
}

export default Landingpage
