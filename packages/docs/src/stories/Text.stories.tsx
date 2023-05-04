import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextProps } from '@buyee.me-ui/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, nihil deleniti sunt eum blanditiis mollitia quia vel, impedit, praesentium explicabo error quibusdam molestiae beatae inventore quasi soluta consequuntur temporibus aspernatur?',
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Bold: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
