import React from 'react'
import {Grid} from '@material-ui/core'

import styled from 'styled-components';

//images





class Package extends React.Component {

    componentDidMount() {
    }


    render()  {
        return (
            <Grid style={{margin: '10px'}}>
                <img src={this.props.img} style={{width: '30vh'}}/>
            </Grid>
        )
    }
}

export default Package
