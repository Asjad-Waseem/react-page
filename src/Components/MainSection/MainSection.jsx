import React from "react";
import "./MainSection.css";
import {Row,Col } from "react-bootstrap";
import Card from '../Card/Card';
import CardProfessionals from '../Card/CardProfessionals';

import CardAppointment from '../Card/CardAppointment'
import CardSeeking from '../Card/CardSeeking'
import CardSchedule from '../Card/CardSchedule'

export default function MainSection() {

  return (
    <React.Fragment>
      <div>
      <Row>
        <Col md ={7}>
        <Card/>
        <CardProfessionals/>
        <CardAppointment/>
        </Col>
        <Col md ={5}>
        <CardSeeking/>
        <CardSchedule/>
        </Col>
      </Row>
        </div>
    </React.Fragment>
  );
}

