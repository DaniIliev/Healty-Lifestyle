import {render, screen} from '@testing-library/React'

import { expect } from 'vitest'



it("Should have Hello world", () => {
    render();

    const message = screen.queryByText(/Hello world/i)
    expect(message).toBeDefined()
})




