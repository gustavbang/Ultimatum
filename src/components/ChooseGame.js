import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";
import {Link} from "react-router-dom";
import {postlist} from "../assets/data/games";
import LoginModal from "./LoginModal";

import {keys} from "../assets/data/LoginKeys";

//img
import WarmUp from '../assets/img/categories/warmup.png'
import BoysNight from '../assets/img/categories/boysnight.png'
import GirlsNight from '../assets/img/categories/girlsnight.png'
import ChristmasLunch from '../assets/img/categories/christmaslunch.png'

import WarmUpLocked from '../assets/img/categories/warmup_locked.png'
import BoysNightLocked  from '../assets/img/categories/boysnight_locked.png'
import GirlsNightLocked  from '../assets/img/categories/girlsnight_locked.png'
import ChristmasLunchLocked  from '../assets/img/categories/christmaslunch_locked.png'

class ChooseGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            paidVersion: false,
            loginKey: "",
            showLoginModal: false,
            showWrongPassword: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    startGame() {
        localStorage.setItem("posts", JSON.stringify(postlist))
    }

    showLoginModal = () => {
        this.setState({showLoginModal: !this.state.showLoginModal})
    }

    login() {
        for (let i=0; i<keys.length; i++) {
            if(this.state.loginKey === keys[i].key) {
                this.setState({showLoginModal: false})
                this.setState({paidVersion: true})
            } else {
                this.setState({showWrongPassword: true})
            }
        }
    }

    handleChange(event) {
        this.setState({loginKey: event.target.value})
    }

    render()  {
        return (
            <Grid container style={{width: '100%'}} alignItems={"center"} justify={"center"}>

                {this.state.showLoginModal === true ?
                    <LoginModal handleChange={this.handleChange} login={this.login} showLoginModal={this.showLoginModal} showWrongPassword={this.state.showWrongPassword}/>
                    :
                    <Grid/>
                }

                <Background/>

                <btn onClick={this.startGame}>
                    <Link type="submit" to={"/spil"}>
                        <img src={WarmUp} style={{width: '80vw', maxWidth: '500px', marginTop: '20px'}}/>
                    </Link>
                </btn>

                {this.state.paidVersion === true ?
                    <Grid container direction={"column"} alignItems={"center"}>
                        <Link type="submit" to={"/spil"} style={{pointerEvents: 'none'}}>
                            <img src={BoysNight} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </Link>

                        <Link type="submit" to={"/spil"}>
                            <img src={GirlsNight} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </Link>

                        <Link type="submit" to={"/spil"}>
                            <img src={ChristmasLunch} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </Link>
                    </Grid>
                    :
                    <Grid container direction={"column"} alignItems={"center"}>
                        <btn onClick={this.showLoginModal}>
                            <img src={BoysNightLocked} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </btn>

                        <btn onClick={this.showLoginModal}>
                            <img src={GirlsNightLocked} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </btn>

                        <btn onClick={this.showLoginModal}>
                            <img src={ChristmasLunchLocked} style={{width: '80vw', maxWidth: '500px', marginTop: '10px'}}/>
                        </btn>
                    </Grid>
                }
            </Grid>
        )
    }
}

export default ChooseGame
