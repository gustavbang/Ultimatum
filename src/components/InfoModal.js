import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";


//img
import Exit from "../assets/img/exit.png";
import RalewayText from "./Reuseables/RalewayText";


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: window.innerWidth > 450 ? 400 : 250,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '25px',
        color: 'white',
    },
}));

export default function InfoModal(props) {

    const classes = useStyles();

    return (
        <div>
            <Modal open={true} BackdropProps={{ invisible: true }}>
                <Grid container style={{width: '100%', height: '100%'}} justify={"center"} alignItems={"center"}>
                    <Grid container className={classes.paper} justify={"center"}>
                        <Grid style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.75, borderRadius: '25px', zIndex: '-10'}}/>


                        <Grid container justify={"flex-start"} alignItems={"flex-start"}>
                            <btn onClick={props.exit}>
                                <img src={Exit}/>
                            </btn>
                        </Grid>

                        <Grid container justify={"center"} alignItems={"center"}>
                            <RalewayText>{props.description}</RalewayText>
                        </Grid>

                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
}