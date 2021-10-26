import React, { useState, useEffect } from "react";
import { Button, Card, Accordion, useAccordionButton, } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import './LeftCol.css'

import { addForm } from '../../redux/actions'

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



const MyButton = () => {

  const counter = 0;

  const dispatch = useDispatch()


  const buttonHandler = () => {
    const n = counter + 1
  };

  useEffect(() => {
    const box = {name: "New Form"};
    dispatch(addForm(box));
  }, [buttonHandler]);

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
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Email</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Url</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Phone Number</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Tags</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Address</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Date / Time</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Day</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Time</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Currency</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Survey</Button>
              <Button className="Buttons" onClick={buttonHandler} type="submit" size="sm"> Signature</Button>
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

export default MyButton
