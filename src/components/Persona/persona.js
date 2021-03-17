import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

// Material UI Components
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 300,
        margin: 'auto',
        marginTop: 50,
        minHeight: 550,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    customCard: {
        maxWidth: 600,
        minWidth: 275,
        margin: 'auto',
        padding: 20
    },
    media: {
        height: 140,
      },
    button: {
        margin: theme.spacing(1),
      },
    }));

export default function Persona(props) {
    const [dataObj, setDataObj] = useState({})
    const [profileExists, setProfileExists] = useState(false)

    console.log(props)
    const {
        state,
        accountId,
        balance
    } = props


    useEffect(
        () => {
  
        async function fetchData() {
            if(state.links.length || state.claimed.length > 0){
                return true
            }
        }

        fetchData()
            .then((res) => {
              console.log('res', res)
             res ? setProfileExists(true) : null
            })
        
    }, [state.links, state.claimed]
    )

const classes = useStyles()

    return (
        <Grid container justify="space-between" alignItems="flex-start" spacing={1}>
            <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                {profileExists ?  <Typography variant="overline" display="block">All Personas: {state.links.length + state.claimed.length}</Typography> : <Typography variant="overline" display="block">Personas: 0</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="overline" display="block">{accountId}: {balance} Ⓝ</Typography><br></br>
            </Grid>
        </Grid>
    )
}