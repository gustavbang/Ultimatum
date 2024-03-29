import React from 'react'
import {Grid} from '@material-ui/core'

//images
import BG from '../../assets/img/background.png'
import MobileBG from '../../assets/img/mobile_background.png'
import Logo from '../../assets/img/logo.png'




class Background extends React.Component {

    render()  {
        return (
            <Grid style={{width: '100%'}}>
                {window.outerWidth > 700 ?
                    <img src={BG} style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '1'
                    }}/>
                    :
                    <img src={MobileBG} style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '1'
                    }}/>
                }
                <Grid container justify={"center"} alignItems={"center"}>
                    <img src={Logo} style={{height: '120px', zIndex: 2}}/>
                </Grid>
            </Grid>
        )
    }
}

export default Background
