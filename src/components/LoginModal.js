import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import Exit from "../assets/img/exit.png";
import RalewayText from "./Reuseables/RalewayText";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: window.innerWidth > 450 ? 400 : 250,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '25px',
        color: 'white',
    },
    input: {
        borderRadius: '15px',
        marginTop: '15px',
        padding: '5px',
        width: '155px',
        fontSize: '1.0em',
        fontFamily: 'Bitter',
        fontWeight: 600
    }
}));

export default function LoginModal(props) {

    const classes = useStyles();

    return (
        <div>
            <Modal open={true} BackdropProps={{ invisible: true }}>
                <Grid container style={{width: '100%', height: '100%'}} justify={"center"} alignItems={"center"}>
                    <Grid container className={classes.paper} justify={"center"} direction={"column"} alignItems={"center"}>
                        <Grid style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.8, borderRadius: '25px', zIndex: '-10'}}/>
                        <btn onClick={props.showLoginModal} style={{position: 'absolute', top: '12px', left: '10px'}}>
                            <img src={Exit}/>
                        </btn>
                        <RalewayText bold>Indtast din nøgle</RalewayText>
                        <input className={classes.input} style={{marginBottom: '8px'}} placeholder={"Nøgle"} onChange={props.handleChange.bind(this)}/>
                        {props.showWrongPassword === true ?
                            <RalewayText color={'red'} fontSize={0.8}>Forkert nøgle, prøv igen</RalewayText>
                            : <Grid/>
                        }
                        <Link to={"Payment"}><RalewayText style={{textDecoration: 'underline'}} fontSize={1.0}>Ingen nøgle? klik her for at købe adgang</RalewayText></Link>
                        <button className={"btn"} onClick={props.login.bind(this)}>
                            Login
                        </button>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
}