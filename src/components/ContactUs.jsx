import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import { 
  Box,
  BaseLabel,
  CenterStyled,
  Input,
  Textarea,
  StyledButton,
  Errors } from './styles'

const getContactFormErrors = (formData) => {
  const { name, email, subject, message } = formData
  const errors = {}

  if (!name) {
    errors.name = ['Your name is required']
  }

  if (!email) {
    errors.email = ['Your email is required']
  }

  if (!subject) {
    errors.subject = ['The subject of the message is required']
  }

  if (!message) {
    errors.message = ['The body of the message is required']
  }

  return errors
}

const FormError = ({ children }) => (
  <Errors>
    {children}
  </Errors>
)

const FormErrors = ({ errors }) => {
  return (
    <Box>
      {errors.map((error) => {
          return <FormError key={error}>{error}</FormError>
      })}
    </Box>
  )
}

const ContactUs = () => {
  const [send, setSend] = useState(false)
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  // eslint-disable-next-line
  const { name, email, subject, message } = state
  const [fieldsState, setFieldsState] = useState({})
  const formErrors = getContactFormErrors(state)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // eslint-disable-next-line
  const updateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))

    // Keep track of what fields the user has attempted to edit
    setFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [key]: true,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
    .sendForm(
      'service_e7qqhc7', 'template_1jdmeps', e.target, 'yE7xsq5MqPI3fXT5N'
    )
    .then(
      () => {
      clearState()
      setSend(true)
      },
      () => {
      }
    )
  }

  return (
    <>
      <div className="help-title">
        <h1>Contact-Us</h1>
      </div>
      <div className="help-content">
        {send && (
          <Box>
            <h3>Your message has been sent, thank you!</h3>
          </Box>
        )}
        <form id="form" onSubmit={handleSubmit}>
          <Box>
            <BaseLabel>Your name</BaseLabel>
          </Box>
          <Box>
            <Input 
              type="text" 
              name="name" 
              id="name"
              required
              onChange={handleChange}
            />
            {formErrors.handleDateChange && fieldsState.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
          </Box>
          <Box>
            <BaseLabel>Your e-mail</BaseLabel>
          </Box>
          <Box>
            <Input 
              type="text" 
              name="email" 
              id="email"
              required
              onChange={handleChange}
            />
            {formErrors.handleDateChange && fieldsState.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
          </Box>
          <Box>
            <BaseLabel>Subject</BaseLabel>
          </Box>
          <Box>
            <Input 
              type="text" 
              name="subject" 
              id="subject"
              required
              onChange={handleChange} 
            />
            {formErrors.handleDateChange && fieldsState.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
          </Box>
          <Box>
            <BaseLabel>Message</BaseLabel>
          </Box>
          <Box>
            <Textarea 
              name="message" 
              id="message"
              required
              onChange={handleChange} 
            />
            {formErrors.handleDateChange && fieldsState.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
          </Box>
          <Box>
            <CenterStyled>
              <StyledButton 
                  type="submit" 
                  id="button" 
                  value="Send Email">
                  Send Email
              </StyledButton>
            </CenterStyled>
          </Box>
          {send && (
            <Box>
                <BaseLabel>Message sent!</BaseLabel>
            </Box>
          )}
        </form>
      </div>
    </>
  )
}

export default ContactUs