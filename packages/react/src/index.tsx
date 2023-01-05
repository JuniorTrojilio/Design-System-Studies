import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$4',
  border: 'none',
  color: '$white',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        padding: '$2',
      },
      md: {
        fontSize: '$md',
        padding: '$4',
      },
      lg: {
        fontSize: '$lg',
        padding: '$6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
