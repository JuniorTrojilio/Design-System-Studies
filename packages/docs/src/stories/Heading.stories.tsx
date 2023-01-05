import { Heading, HeadingProps } from '@juniortrojilio/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: `Um Título.`,
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
