import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

describe('Home', () => {
  it('renders the welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Welcome to Gospel Blooms Kitengela')).toBeInTheDocument()
  })

  it('renders the mission section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
  })

  it('renders the vision section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText('View Services')).toBeInTheDocument()
    expect(screen.getByText('Latest Updates')).toBeInTheDocument()
  })
})
