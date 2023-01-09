import { Heading, HeadingProps } from '@juniortrojilio/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: `H1 Heading.`,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Por padrão o componente Heading é um h2, mas pode ser alterado para qualquer outro elemento HTML.',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
