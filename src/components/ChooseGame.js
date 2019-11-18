import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";

import WarmUp from '../assets/img/categories/warmup.png'
import BoysNight from '../assets/img/categories/boysnight.png'
import GirlsNight from '../assets/img/categories/girlsnight.png'
import Halloween from '../assets/img/categories/halloween.png'



class ChooseGame extends React.Component {


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <img src={WarmUp} style={{width: '80vw', marginLeft: '10vw', marginTop: '20px'}}/>
                <img src={BoysNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>
                <img src={GirlsNight} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>
                <img src={Halloween} style={{width: '80vw', marginLeft: '10vw', marginTop: '10px'}}/>


            </Grid>
        )
    }
}

export default ChooseGame
