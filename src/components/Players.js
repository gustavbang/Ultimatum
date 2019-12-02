import React from 'react'
import {Grid} from '@material-ui/core'
import PlayersModal from "./PlayersModal";
import Background from "./Reuseables/Background";



class Players extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            extraInputs: [1, 1],
            players: []
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(index, event) {

        let tempArray = this.state.players

        tempArray.splice(index, index+1)

        tempArray.splice(index, 0, event.target.value)

        this.setState({players: tempArray})
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

    savePlayerNames() {
        localStorage.setItem("players", JSON.stringify(this.state.players))
    }


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>
                <PlayersModal extraInputs={this.state.extraInputs} addInput={() => this.addInput(this.state.extraInputs)} removeInput={() => this.removeInput(this.state.extraInputs)}
                              handleChange={this.handleChange} savePlayerNames={() => this.savePlayerNames()}/>

            </Grid>
        )
    }
}

export default Players
