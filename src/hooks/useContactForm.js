import { useState, useCallback } from 'react'

/**
 * Custom hook for managing contact form state and validation.
 */
export function useContactForm() {
  const initialState = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on typing
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const validate = useCallback(() => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    return newErrors
  }, [formData])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const validationErrors = validate()

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setSubmitting(true)
      // Simulate async submission
      setTimeout(() => {
        setSubmitting(false)
        setSubmitted(true)
        setFormData(initialState)
      }, 1500)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [validate]
  )

  const resetForm = useCallback(() => {
    setSubmitted(false)
    setErrors({})
    setFormData(initialState)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    formData,
    errors,
    submitted,
    submitting,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

