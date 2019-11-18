import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";

import WarmUp from '../assets/img/categories/warmup.png'
import BoysNight from '../assets/img/categories/boysnight.png'
import GirlsNight from '../assets/img/categories/girlsnight.png'
import Halloween from '../assets/img/categories/halloween.png'
import {Link} from "react-router-dom";



class ChooseGame extends React.Component {

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Link type="submit" to={"/spil"}>
                    <img src={WarmUp} style={{width: '80vw', marginLeft: '10vw', marginTop: '20px'}}/>
                </Link>

                <Link type="submit" to={"/spil"}>
                    <img src={BoysNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>
                </Link>

                <Link type="submit" to={"/spil"}>
                    <img src={GirlsNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>
                </Link>

                <Link type="submit" to={"/spil"}>
                    <img src={Halloween} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>
                </Link>


            </Grid>
        )
    }
}

export default ChooseGame
