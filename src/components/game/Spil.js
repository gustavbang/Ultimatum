import React from 'react'
import {Grid} from '@material-ui/core'

import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Background from "../Reuseables/Background";
import Beer from "../../assets/img/game_images/beer.png"
import Info from "../../assets/img/info.png"
import {postlist} from "../../assets/data/games";
import InfoModal from "../InfoModal";

class Spil extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post: {},
            showModal: false
        }
    }

    componentDidMount() {
        this.pickRandomGame()
    }

    pickRandomGame() {
        //Henter posts
        let posts = JSON.parse(localStorage.getItem("posts"))

        //sætter random range
        let min = Math.ceil(0);
        let max = Math.floor(posts.length);
        //random algoritme
        let rand =  Math.floor(Math.random() * (max - min)) + min;

        //henter den valgte post
        let post = posts[rand]
        this.setState({post: post})

        //fjerner den valgte post
        let kus = posts.splice(rand,1)


        //sætter det nye array uden den valgte post
        localStorage.setItem("posts", JSON.stringify(posts))

        //Resetter når alle spørgsmål er gået igennem
        if (posts.length < 1) {
            localStorage.setItem("posts", JSON.stringify(postlist))
        }

    }

    refresh() {
        window.location.reload()
    }

    showModal = () => {
        console.log("Showing modal")
        this.setState({showModal : !this.state.showModal})
    }

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} alignItems={"center"} justify={"center"}>

                    <btn onClick={this.refresh} style={{position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%'}}/>

                    {this.state.post.img === "beer" &&
                        <img src={Beer}/>
                    }
                    <Typography style={{color: 'black', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '700', marginTop: '25px'}}>{this.state.post.title}</Typography>
                    <Typography style={{color: 'black', fontSize: '1.5em', fontFamily: 'Bitter', fontWeight: '500', marginBottom: '10px'}}>{this.state.post.subtitle}</Typography>
                    <Typography style={{color: 'black', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '10px'}}>{this.state.post.content}</Typography>
                    <btn onClick={this.showModal} style={{zIndex: '10000'}}>
                        <img src={Info}/>
                    </btn>

                    {this.state.showModal && <InfoModal exit={this.showModal} description={this.state.post.description}/> }

                </Grid>
            </Grid>
        )
    }
}

export default Spil
