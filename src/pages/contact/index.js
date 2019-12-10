import React from 'react'
import { navigate } from 'gatsby-link'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '5rem', marginBottom: '5rem' }}>
          <h1>Contact</h1>
          <Form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <FormGroup>
              <Label for="nameField">Your name</Label>
              <Input
                type="text"
                name="name"
                id="nameField"
                onChange={this.handleChange}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <Label for="emailField">Email</Label>
              <Input
                type="email"
                name="email"
                id="emailField"
                onChange={this.handleChange}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <Label for="messageField">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="messageField"
                onChange={this.handleChange}
                required={true}
              />
            </FormGroup>

            <Button type="submit">Send</Button>
          </Form>
        </Container>
      </Layout>
    )
  }
}
