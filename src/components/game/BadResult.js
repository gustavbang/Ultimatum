import React from 'react'
import {Grid} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Background from "../Reuseables/Background";





class BadResult extends React.Component {

    componentDidMount() {
    }


    render()  {
        return (
            <Grid container style={{width: '100%'}}>
                <Background/>

                <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                    <Typography style={{color: 'black', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '700', marginBottom: '10px', marginTop: '25px'}}>Du er lort</Typography>
                    <Typography style={{color: 'black', fontSize: '1.0em', fontFamily: 'Bitter', fontWeight: '500', margin: '10px'}}>Drik 5 tåre</Typography>

                    <Grid direction={"row"} style={{border: '6px solid #FE6347', width: '200px'}}>
                        <Link to={"spil"} style={{textDecoration: 'none'}} >
                            <Typography style={{color: 'white', fontSize: '2em', fontFamily: 'Bitter', fontWeight: '700', margin: '20px'}}>Nyt spørgsmål</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default BadResult
