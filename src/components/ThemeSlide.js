import React from 'react'
import {Grid} from '@material-ui/core'

import Coverflow from 'react-coverflow'

import Girls from '../assets/img/girls.png'
import Guys from '../assets/img/guys.png'
import NewYear from '../assets/img/newyear.png'


class ThemeSlide extends React.Component {

    componentDidMount() {
    }

    fn() {
        /* do you want */
    }


    render()  {
        return (
            <Grid style={{margin: '10px', }}>
                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <div
                        onClick={() => this.fn()}
                        onKeyDown={() => this.fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                    </div>
                    <img src={Girls} alt='Album one' data-action="spil1" style={{width: '193px'}}/>

                    <img src={Guys} data-action="spil1" style={{width: '193px'}}/>

                    <img src={NewYear} data-action="spil1" style={{width: '193px'}}/>




                </Coverflow>,
            </Grid>
        )
    }
}

export default ThemeSlide
