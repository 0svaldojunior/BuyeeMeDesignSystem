import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@buyee.me-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],

  args: {
    children: <Text>Box Element</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
