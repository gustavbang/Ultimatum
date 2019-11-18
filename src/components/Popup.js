import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";


//img
import Plus from "../assets/img/plus.png";
import Minus from "../assets/img/minus.png";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        width: '155px'
    }
}));

function savePlayerNames() {
    console.log("Players saved..")
}

export default function Popup(props) {

    const classes = useStyles();

    return (
        <div>
            <Modal open={true} BackdropProps={{ invisible: true }}>
                <Grid container style={{width: '100%', height: '100%'}} justify={"center"} alignItems={"center"}>
                    <Grid container className={classes.paper} justify={"center"}>
                        <Grid style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.5, borderRadius: '25px', zIndex: '-10'}}/>

                        <h2>Tilføj spillere</h2>
                        <Grid container direction={"column"} alignItems={"center"}>
                            <input className={classes.input} placeholder={"Torben"}/>
                            <input className={classes.input} placeholder={"Børge"}/>
                            <Grid>
                            {
                                props.extraInputs.map((value, index) => {
                                    return (
                                        <Grid container alignItems={'center'} key={index}>
                                            <input className={classes.input}/>
                                        </Grid>
                                    )
                                })
                            }
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} justify={"center"}>
                            <btn onClick={props.removeInput} style={{width: '20px', margin: '15px'}}>
                                <img src={Minus}/>
                            </btn>

                            <btn onClick={props.addInput} style={{width: '20px', margin: '15px'}}>
                                <img src={Plus}/>
                            </btn>
                            </Grid>
                        <btn onClick={savePlayerNames()}>
                            <Link style={{backgroundColor: '#50B72A', borderRadius: '25px', width: '110px', height: '15px', paddingTop: '6px'}} className={"button"} type="submit" to={"/ChooseGame"}>Start</Link>
                        </btn>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    );
}