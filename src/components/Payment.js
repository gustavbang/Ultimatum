import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";
import RalewayText from "./Reuseables/RalewayText";

import MobilePay from '../assets/img/mobilepay.png'
import Plus from "../assets/img/plus.png";

class Payment extends React.Component {


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                    <Grid container justify={"center"} alignItems={"center"} direction={"column"}
                          style={{width: '100%', zIndex: '10'}}>
                        <Grid container style={{backgroundColor: 'black', opacity: 0.8, width: '30vw', minWidth: '300px', height: '20vw', minHeight: '435px', borderRadius: '15px', padding: '10px'}} justify={"center"}>
                        <RalewayText margin={10}bold color={'red'} fontSize={1.5}>Få den fulde version af spillet for kun 29.95 kr</RalewayText>
                        <RalewayText margin={10} fontSize={1.3}>1. Betal via MobilePay til <b>+45 42 39 22 76</b> og
                            skriv 'ultimatum' i noten</RalewayText>
                        <RalewayText margin={10} fontSize={1.3}>2. Når mobilappen udkommer, får du den gratis, til en værdi af
                            200kr</RalewayText>
                            {window.innerWidth > 700 ?
                                <img src={MobilePay} style={{width: '400px'}}/>
                                :
                                <img src={MobilePay} style={{width: '250px'}}/>
                            }
                                </Grid>
                    </Grid>

            </Grid>
        )
    }
}

export default Payment
