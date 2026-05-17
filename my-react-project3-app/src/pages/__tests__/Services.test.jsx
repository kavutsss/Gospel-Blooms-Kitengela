import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Services from '../Services'

describe('Services', () => {
  it('renders the page title', () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    )
    expect(screen.getByText('Service Times & Location')).toBeInTheDocument()
  })

  it('renders service times', () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    )
    expect(screen.getByText('Sunday Morning Service')).toBeInTheDocument()
    expect(screen.getByText('Wednesday Bible Study')).toBeInTheDocument()
    expect(screen.getByText('Friday Prayer Meeting')).toBeInTheDocument()
  })

  it('renders location section', () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    )
    expect(screen.getByText('Location')).toBeInTheDocument()
  })
})
