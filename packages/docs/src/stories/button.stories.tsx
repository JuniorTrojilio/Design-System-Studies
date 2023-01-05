import { Button, ButtonProps } from '@juniortrojilio/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
