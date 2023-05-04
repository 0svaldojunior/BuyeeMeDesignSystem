import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps, Box } from '@buyee.me-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  args: {
    src: 'https://github.com/0svaldojunior.png',
    alt: 'Osvaldo Junior',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },

  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Undefined: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
