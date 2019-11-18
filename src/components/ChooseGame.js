import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";




class ChooseGame extends React.Component {


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>
            </Grid>
        )
    }
}

export default ChooseGame
