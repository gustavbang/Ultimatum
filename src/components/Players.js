import React from 'react'
import {Grid} from '@material-ui/core'
import Popup from "./Popup";


//images
import Background from '../assets/img/background.png'
import MobileBackground from '../assets/img/mobile_background.png'
import Logo from '../assets/img/logo.png'
import Plus from "../assets/img/plus.png";


class Landingpage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            extraInputs: [],
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addInput(extraInputs) {
        extraInputs.push(1)
        this.setState({extraInputs: extraInputs})
    }

    removeInput(extraInputs) {
        if (extraInputs.length >= 1) {
            let newArray = extraInputs
            newArray.pop()
            this.setState({extraInputs: newArray})
        }
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
                    <img src={MobileBackground} style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '-10'
                    }}/>
                }
                <Grid container justify={"center"} alignItems={"center"}>
                    <img src={Logo} style={{height: '120px'}}/>
                </Grid>

                <Popup extraInputs={this.state.extraInputs} addInput={() => this.addInput(this.state.extraInputs)} removeInput={() => this.removeInput(this.state.extraInputs)}/>

            </Grid>
        )
    }
}

export default Landingpage
