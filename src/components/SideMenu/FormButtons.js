import React from "react";
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import './Buttons.css'

import { addForm } from '../../redux/actions'


const FormButtons = () => {

  const dispatch = useDispatch()

  const buttonHandler = (name, type) => {
    const n = name;
    const t = type;
    dispatch(
      addForm({name: n, formType: t}),
    );
  };


  return (
    <>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Email", "email")}
        type="submit" size="sm"
      > Email</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Url", "url")}
        type="submit"
        size="sm"
      > Url</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Phone number", "phone")}
        type="submit"
        size="sm"
      > Phone Number</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Tags", "tags")}
        type="submit"
        size="sm"
      > Tags</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Address", "address")}
        type="submit"
        size="sm"
      > Address</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Data / Time", "data")}
        type="submit"
        size="sm"
      > Date / Time</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Day", "day")}
        type="submit" size="sm"
      > Day</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Time", "time")}
        type="submit"
        size="sm"
      > Time</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Currency", "currency")}
        type="submit"
        size="sm"
      > Currency</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Survey", "survey")}
        type="submit"
        size="sm"
      > Survey</Button>
      <Button
        className="Buttons"
        onClick={() => buttonHandler("Signature", "signature")}
        type="submit"
        size="sm"
        >Signature</Button>
    </>
  );
}

export default FormButtons
