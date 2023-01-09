import { Button, ButtonProps, Text } from '@juniortrojilio/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: (
      <>
        <Text>Send</Text>
      </>
    ),
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
