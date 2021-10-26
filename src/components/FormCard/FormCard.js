import React, { useState, useEffect } from "react";
import './FormCard.css'
import { Button, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';

import { addForm } from '../../redux/actions'



const FormCard = () => {
  // to get forms
  const forms = useSelector(state => state.forms);
  // to use dispatch function
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(addForm(name))
  }, [name]);


const listForms = [forms]


  return (
        <div className="FormCard">
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

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup" >
            Date / Time
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl id="inlineFormInputGroup" placeholder="yyyy-MM-dd hh:mm a" />
            <InputGroup.Text>📅</InputGroup.Text>
          </InputGroup>
        </Col>

        {listForms.map((item) =>
          <Form>
            <Form.Label>{item.name}</Form.Label><Form.Control as="textarea" rows={3} />
          </Form>)}
        </div>
  );
}

export default FormCard
