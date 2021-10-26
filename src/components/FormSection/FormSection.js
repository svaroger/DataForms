import React from "react";
import './FormSection.css'
import { useSelector } from 'react-redux';

import  ListForms  from './ListForms';


const FormSection = () => {
  // to get forms
  const forms = useSelector(state => state.forms);

  const toListForms = forms.map((form, index) => <ListForms key={index} form={form} />)

  return (
    <div className="FormSection">
      {toListForms}
    </div>
  );
}

export default FormSection
