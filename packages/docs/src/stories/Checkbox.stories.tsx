import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox, CheckboxProps } from '@buyee.me-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

  argTypes: {
    onClick: { action: 'checked | unchecked' },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
