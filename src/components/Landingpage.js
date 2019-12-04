import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'

import {Link} from "react-router-dom";

//Stylesheet
import stylesheet from '../assets/style.css'
import Background from "./Reuseables/Background";
//images

import {postlist} from "../assets/data/games";
import RalewayText from "./Reuseables/RalewayText";


class Landingpage extends React.Component {

    componentDidMount() {
        localStorage.setItem("posts", JSON.stringify(postlist))
    }

    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} justify={"center"} alignItems="center" style={{zIndex: '10'}}>
                    <Grid container justify={"center"} alignItems="center" direction={"column"}>
                        <Grid style={{height: '30px', width: '100vw'}}/>
                        <RalewayText fontSize={2.5} bold>Ultimatum</RalewayText>
                        <RalewayText fontSize={1.5}>Festen starter her!</RalewayText>
                    </Grid>


                    <Grid container style={{backgroundColor: 'black', opacity: 0.8, width: '30vw', minWidth: '300px', height: '20vw', minHeight: '300px', borderRadius: '15px', paddingBottom: '20px'}} justify={"center"}>

                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100vw', marginTop: '30px'}}>
                        <form action="https://gmail.us5.list-manage.com/subscribe/post?u=af0c1b08d198ac67e4c19d987&amp;id=52625faf3c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <RalewayText margin={10}>Skriv dig på maillisten for tidlig adgang til Ultimatum</RalewayText>
                            <Grid container alignItems={"center"} justify={"center"}><input className={"button"} type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe"/></Grid>
                        </form>
                    </Grid>

                    <Grid container justify={"center"} alignItems={"center"} style={{width: '100vw', marginTop: '30px'}}>
                        <RalewayText margin={10}>Eller prøv spillet nu:</RalewayText>

                        <Grid container alignItems={"center"} justify={"center"}><Link className={"button"} type="submit" to={"/BeforeYouStart"}>Spil Ultimatum</Link></Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Landingpage
