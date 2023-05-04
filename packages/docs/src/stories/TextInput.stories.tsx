import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@buyee.me-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Information to Input</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'buyee.me/',
    placeholder: 'Complete with name',
  },
}
