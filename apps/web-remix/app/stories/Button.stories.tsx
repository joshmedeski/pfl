import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const SignUp = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
SignUp.args = {
  children: 'Sign Up',
  onClick: () => alert('Sign Up Clicked!')
}
