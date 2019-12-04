import React from 'react'
import {Grid} from '@material-ui/core'

import Typography from "@material-ui/core/Typography";
import Background from "../Reuseables/Background";
import Info from "../../assets/img/info.png"
import {postlist} from "../../assets/data/games";
import InfoModal from "../InfoModal";

//gameImages
import Beer from "../../assets/img/game_images/beer.png"
import Camera from "../../assets/img/game_images/camera.png"
import ClosedEyes from "../../assets/img/game_images/closed_eyes.png"
import EyeContact from "../../assets/img/game_images/eye_contact.png"
import Hand from "../../assets/img/game_images/hand.png"
import Lipsync from "../../assets/img/game_images/lipsync.png"
import Tongue from "../../assets/img/game_images/tongue.png"
import Twerk from "../../assets/img/game_images/twerk.png"
import RalewayText from "../Reuseables/RalewayText";


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
        console.log(kus)

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

                <div style={{zIndex: '10', width: '100%'}}>
                    <Grid container direction={"column"} alignItems={"center"} justify={"center"}>

                        <btn onClick={this.refresh} style={{position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%'}}/>

                        {this.state.post.img === "beer" &&
                            <img src={Beer}/>
                        }
                        {this.state.post.img === "camera" &&
                            <img src={Camera}/>
                        }
                        {this.state.post.img === "closed_eyes" &&
                            <img src={ClosedEyes}/>
                        }
                        {this.state.post.img === "eye_contact" &&
                            <img src={EyeContact}/>
                        }
                        {this.state.post.img === "hand" &&
                            <img src={Hand} style={{height: '160px'}}/>
                        }
                        {this.state.post.img === "lipsync" &&
                            <img src={Lipsync} style={{width: '220px'}}/>
                        }
                        {this.state.post.img === "tongue" &&
                            <img src={Tongue} style={{height: '110px', marginTop: '10px'}}/>
                        }
                        {this.state.post.img === "twerk" &&
                        <img src={Twerk} style={{height: '160px'}}/>
                        }

                        <Grid container direction="column" alignItems="center" style={{maxWidth: '800px'}}>
                        <RalewayText color={'black'} fontSize={2.0} bold>{this.state.post.title}</RalewayText>
                        <RalewayText color={'black'} fontSize={1.5} >{this.state.post.subtitle}</RalewayText>
                        <RalewayText color={'black'} fontSize={1.0} >{this.state.post.content}</RalewayText>
                        </Grid>
                        <btn onClick={this.showModal} style={{zIndex: '10000'}}>
                            <img src={Info}/>
                        </btn>

                        {this.state.showModal && <InfoModal exit={this.showModal} description={"ingen info"}/> }

                    </Grid>
                </div>
            </Grid>
        )
    }
}

export default Spil
