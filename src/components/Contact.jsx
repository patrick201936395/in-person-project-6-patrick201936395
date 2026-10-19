import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function validateField(name, value) {
    const text = value.trim()

    if (name === 'name' && text === '') {
      return 'Name is required'
    }
    if (name === 'email') {
      if (text === '') {
        return 'Email is required'
      }
      if (!text.includes('@')) {
        return 'Email must contain @'
      }
    }
    if (name === 'message') {
      if (text === '') {
        return 'Message is required'
      }
      if (text.length < 10) {
        return 'Message must be at least 10 characters'
      }
    }

    return ''
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
    setIsSubmitted(false)
  }

  function handleBlur(e) {
    const { name, value } = e.target
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitted(false)

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    }
    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name ? 'error' : ''}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby="name-error"
                  required
                />
                <span id="name-error" className="error-message" aria-live="polite">{errors.name}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? 'error' : ''}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                  required
                />
                <span id="email-error" className="error-message" aria-live="polite">{errors.email}</span>
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? 'error' : ''}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                  required
                ></textarea>
                <span id="message-error" className="error-message" aria-live="polite">{errors.message}</span>
              </div>
              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </div>
            {isSubmitted && (
              <p className="success-message" role="status">
                Thank you! Your form was submitted successfully. This demo does not send messages.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
