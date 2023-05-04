import type { StoryObj, Meta } from '@storybook/react'

import { Box, Heading, HeadingProps } from '@buyee.me-ui/react'

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  tags: ['autodocs'],

  args: {
    children: 'Custom Title',
    size: 'md',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
        '10xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },

  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const H1: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
