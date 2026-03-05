import type { Meta, StoryObj } from '@storybook/vue3'
import PocButton from '../components/PocButton.vue'

const meta: Meta<typeof PocButton> = {
  title: 'Components/Button',
  component: PocButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    type: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
}

export default meta

type Story = StoryObj<typeof PocButton>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
    onClick: () => alert('Primary Button Clicked!'),
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    onClick: () => alert('Secondary Button Clicked!'),
  },
}