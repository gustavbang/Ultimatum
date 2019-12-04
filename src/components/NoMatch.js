import React from 'react'
import {Grid} from '@material-ui/core'
import Background from "./Reuseables/Background";
import RalewayText from "./Reuseables/RalewayText";



class NoMatch extends React.Component {


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>
                <Grid container style={{width: '100%', height: '500px', zIndex: '10'}} justify="center" alignItems="center">
                    <RalewayText bold fontSize={2.0} >No matching search results</RalewayText>
                </Grid>
            </Grid>
        )
    }
}

export default NoMatch
