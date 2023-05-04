import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      default: {
        color: '$gray100',
        background: '$blue400',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blue300',
        },

        '&:disabled': {
          color: '$white',
          backgroundColor: '$gray200',
        },
      },

      outlineColor: {
        color: '$blue400',
        border: '2px solid $blue400',

        '&:not(:disabled):hover': {
          background: '$blue400',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          backgroundColor: '$gray800',
          border: '2px solid $gray200',
        },
      },

      outlineNone: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: '$10',
      },

      md: {
        height: '$12',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: Element
}

Button.displayName = 'Button'
