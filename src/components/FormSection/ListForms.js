import React from 'react';

import {
  TextForm,
  EmailForm,
  UrlForm,
  PhoneForm,
  TagsForm,
  AddressForm,
  DataForm,
  DayForm,
  TimeForm,
  CurrencyForm,
  SurveyForm,
  SignatureForm
} from './AdvancedForms'


const ListForms = ({form}) => {
  if (form.formType === 'text') {
    return(
    <TextForm form={form} />
    )
  }
  if (form.formType === 'email') {
    return(
    <EmailForm form={form} />
    )
  }
  if (form.formType === 'url') {
    return(
    <UrlForm form={form} />
    )
  }
  if (form.formType === 'phone') {
    return(
    <PhoneForm form={form} />
    )
  }
  if (form.formType === 'tags') {
    return(
    <TagsForm form={form} />
    )
  }
  if (form.formType === 'address') {
    return(
    <AddressForm form={form} />
    )
  }
  if (form.formType === 'data') {
    return(
    <DataForm form={form} />
    )
  }
  if (form.formType === 'day') {
    return(
    <DayForm form={form} />
    )
  }
  if (form.formType === 'time') {
    return(
    <TimeForm form={form} />
    )
  }
  if (form.formType === 'currency') {
    return(
    <CurrencyForm form={form} />
    )
  }
  if (form.formType === 'survey') {
    return(
    <SurveyForm form={form} />
    )
  }
  if (form.formType === 'signature') {
    return(
    <SignatureForm form={form} />
    )
  }
  return (
    <>
      <h3>Unknown action</h3>
    </>

  );

}


export default ListForms
