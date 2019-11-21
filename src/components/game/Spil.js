import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";

//images
import ThumbsDown from '../../assets/img/thumbs_down.png'
import ThumbsUp from '../../assets/img/thumbs_up.png'
import {Link} from "react-router-dom";
import Background from "../Reuseables/Background";
import {posts} from "../../assets/data/games";


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import WarmUp from "../../assets/img/categories/warmup.png";
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import BoysNight from "../../assets/img/categories/boysnight.png";
import GirlsNight from "../../assets/img/categories/girlsnight.png";
import Halloween from "../../assets/img/categories/halloween.png";


class Spil extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post: {},
        }
    }

    componentDidMount() {
        this.pickRandomGame()
    }

    pickRandomGame() {
        let min = Math.ceil(0);
        let max = Math.floor(posts.length);
        let rand =  Math.floor(Math.random() * (max - min)) + min;
        console.log(rand)
        console.log(posts[rand])
        this.setState({post: posts[rand]} )
    }

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} alignItems={"center"} justify={"center"}>

                <AwesomeSlider cssModule={AwesomeSliderStyles}>
                    <div> <img src={BoysNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/></div>
                    <div> <img src={WarmUp} style={{width: '80vw', marginLeft: '10vw', marginTop: '20px'}}/></div>
                    <div> <img src={GirlsNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/></div>
                    <div> <img src={Halloween} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/></div>
                </AwesomeSlider>


                    <Typography style={{color: 'black', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '10px', marginTop: '25px'}}>{this.state.post.title}</Typography>
                    <Typography style={{color: 'black', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '10px'}}>{this.state.post.content}</Typography>

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
