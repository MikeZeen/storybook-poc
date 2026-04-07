import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, within } from 'storybook/test'
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
    'onButton-pressed': fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1)
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    'onButton-pressed': fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1)
  },
}