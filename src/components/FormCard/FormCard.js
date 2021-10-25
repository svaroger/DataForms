import React, { useState, useEffect } from "react";
import './FormCard.css'
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap'


const FormCard = () => {

  return (
        <div className="ColumnTwo">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Text field</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Text area</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" >
            Date / Time
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl id="inlineFormInputGroup" placeholder="yyyy-MM-dd hh:mm a" />
            <InputGroup.Text>📅</InputGroup.Text>
          </InputGroup>
        </Col>
        </div>
  );
}

export default FormCard
