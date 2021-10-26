import React from "react";
import { Card, Accordion, useAccordionButton } from 'react-bootstrap'

import './Buttons.css'

import FormButtons from './FormButtons'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <div
      type="text"
      style={{}}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}



const CustButtons = () => {

  return (
    <Accordion defaultActiveKey="2">
    <Card>
    <input className="Search" placeholder="Search field(s)" />
    </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Basic</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Advanced</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
              <FormButtons />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">Layout</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="4">Data</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="5">Premium</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CustButtons
