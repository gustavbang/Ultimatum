import React from 'react'
import {Grid} from '@material-ui/core'
import Popup from "./Popup";
import Background from "./Reuseables/Background";



class Players extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
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
                <Background/>
                <Popup extraInputs={this.state.extraInputs} addInput={() => this.addInput(this.state.extraInputs)} removeInput={() => this.removeInput(this.state.extraInputs)} handleChange={() => this.handleChange()}/>

            </Grid>
        )
    }
}

export default Players
