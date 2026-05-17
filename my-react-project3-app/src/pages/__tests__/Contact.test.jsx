import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders the page title', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    )
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })
})
