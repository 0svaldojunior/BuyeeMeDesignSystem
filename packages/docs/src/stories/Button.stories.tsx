import type { StoryObj, Meta } from '@storybook/react'

import { Box, Button, ButtonProps } from '@buyee.me-ui/react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'outlineColor', 'outlineNone'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
  },
}

export const OutlineColor: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlineColor',
    children: 'Create New',
  },
}

export const OutlineNone: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlineNone',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        With Icon
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const WithIconLeft: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ArrowLeft weight="bold" />
        With Icon
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}
