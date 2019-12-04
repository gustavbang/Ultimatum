import React from 'react'
import {Grid} from '@material-ui/core'

//images
import DrinkResponsibly from '../assets/img/drink_responsibly.png'
import AgeRequirements from '../assets/img/age_requirements.png'
import AcceptTerms from '../assets/img/accept_terms.png'

import {Link} from "react-router-dom";
import Background from "./Reuseables/Background";
import RalewayText from "./Reuseables/RalewayText";


class BeforeYouStart extends React.Component {

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} style={{width: '100%', zIndex: '10'}}>
                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100%', marginTop: '20px'}}>
                        <RalewayText width={200} fontSize={1.7} margin={10} bold>Før du starter..</RalewayText>

                        <Grid container direction={"row"} justify={"center"}>
                            <img src={AgeRequirements} style={{height: '75px', marginTop: '5px'}}/>
                            <RalewayText width={150} margin={10}>Alle spillere er over 18 år</RalewayText>
                        </Grid>
                        <Grid container direction={"row"} justify={"center"}>
                            <img src={DrinkResponsibly} style={{height: '75px', marginTop: '22px'}}/>
                            <RalewayText width={150} margin={10}>Alle spillere drikker ansvarligt</RalewayText>
                        </Grid>
                        <Grid container direction={"row"} justify={"center"}>
                            <img src={AcceptTerms} style={{height: '75px', marginTop: '10px'}}/>
                            <RalewayText width={150} margin={10}>Accepter vores cookie- og privatlivspolitik</RalewayText>
                        </Grid>
                        <Link className={"button"} type="submit" to={"/Players"}>Accepter</Link>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default BeforeYouStart
