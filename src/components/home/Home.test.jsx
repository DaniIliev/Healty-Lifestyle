import {render, screen} from '@testing-library/React'
import { describe, expect } from 'vitest'
import Home from './Home'
describe('Correct startup', () => [
    it('Should have text Welcome to Healty Lifestyle', () => {
        const message = screen.queryByText(/Welcome to Healty Lifestyle/i)
        expect(message).toBeDefined()
    }),
    it('Should have text Here you will discover how to eat deliciously and healthily', () => {
        const message = screen.queryByText(/Here you will discover how to eat deliciously and healthily/i)
        expect(message).toBeDefined()
    }),
    it('Should have text If you have a hidden culinary talent, the recipes on this site will make sure you develop it', () => {
        const message = screen.queryByText(/Here you will discover how to eat deliciously and healthily/i)
        expect(message).toBeDefined()
    }),
    it('Should have image with alt love', () => {
        const message = screen.queryByText(/love/i)
        expect(message).toBeDefined()
    }),
    it('Should have sections advantage', () => {
        const message = screen.getByRole(/toBeDefined/i)
    })
])
