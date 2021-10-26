import React from 'react';
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FaRegCalendar } from 'react-icons/fa';

export const TextForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Text field</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Text area</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  )
};

export const EmailForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const UrlForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const PhoneForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const TagsForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const AddressForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};


export const DataForm = ({form}) => {
  return(
    <>
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInputGroup" >
        Date / Time
        </Form.Label>
        <InputGroup className="mb-2">
          <FormControl
            id="inlineFormInputGroup"
            type="date"
          />
          <InputGroup.Text><FaRegCalendar /></InputGroup.Text>
        </InputGroup>
      </Col>
    </>
  )
};

export const DayForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const TimeForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const CurrencyForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const SurveyForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};

export const SignatureForm = ({form}) => {
  return(
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{form.name}</Form.Label>
          <Form.Control
          type="text"
          />
        </Form.Group>
      </Form>
    </>
  )
};
