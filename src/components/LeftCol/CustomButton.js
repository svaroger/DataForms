import { Button, Card, Accordion, useAccordionButton, } from 'react-bootstrap'

import './LeftCol.css'



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
  return (
    <Accordion defaultActiveKey="0">
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
          <CustomToggle eventKey="0">Advanced</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
              <Button className="Buttons" type="submit" size="sm"> Email</Button>
              <Button className="Buttons" type="submit" size="sm"> Url</Button>
              <Button className="Buttons" type="submit" size="sm"> Phone Number</Button>
              <Button className="Buttons" type="submit" size="sm"> Tags</Button>
              <Button className="Buttons" type="submit" size="sm"> Address</Button>
              <Button className="Buttons" type="submit" size="sm"> Date / Time</Button>
              <Button className="Buttons" type="submit" size="sm"> Day</Button>
              <Button className="Buttons" type="submit" size="sm"> Time</Button>
              <Button className="Buttons" type="submit" size="sm"> Currency</Button>
              <Button className="Buttons" type="submit" size="sm"> Survey</Button>
              <Button className="Buttons" type="submit" size="sm"> Signature</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Layout</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Data</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Premium</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default MyButton
