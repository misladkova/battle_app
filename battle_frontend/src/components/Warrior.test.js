import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Warrior from './Warrior'

test('renders content', () => {
    const warrior = {
        id: '123',
        name: 'Blah'
    }

    const component = render(
        <Warrior warrior={warrior}/>
    )

    expect(component.container).toHaveTextContent(
        '123 Blah'
    )
})