import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';
import CardProfessionals from '../Card/CardProfessionals';
import CardAppointment from '../Card/CardAppointment'
import CardSeeking from '../Card/CardSeeking'
import CardSchedule from '../Card/CardSchedule'
import './MainSection.css'
export default function MainSection() {

  return (
    <React.Fragment>
     
      <Grid container spacing={3} className="main-padding-section">
        <Grid item md ={7} xs={12}>
        <Card/>
        <CardProfessionals/>
        <CardAppointment/>
        </Grid>
        <Grid item md ={5} xs={12}>
        <CardSeeking/>
        <CardSchedule/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

