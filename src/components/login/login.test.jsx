import {render, screen} from '@testing-library/React'
import { expect } from 'vitest'
import Login from './Login'

it('Should have text Sign in', () => {
    const message = screen.queryByText(/Sign in/i)
    expect(message).toBeDefined()
})


it('Should show login form', () => {
    render(<Login/>)
    const input = screen.getByLabelText('Email')
})
