import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, fn, userEvent, within } from 'storybook/test'
import PocButton from '../components/PocButton.vue'

// Hier werden Informationen über die Story definiert die teilweise auch in der App überschreibbar sind (bspw. die argTypes)
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

// Hier wird die Primary Variante definiert
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
    'onButton-pressed': fn(),
  },
  // Hier wird der Interaktionstest für die Primary Variante definiert (Button Click -> Ein Emit wird erwartet damit der Test erfolgreich ist)
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(1)
  },
}

// Hier wird die Secondary Variante definiert
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
    'onButton-pressed': fn(),
  },
  // Hier wird ein Fehlerhafter Interaktionstest für die Secondary Variante definiert (Button Click -> Zwei Emits werden erwartet damit der Test erfolgreich ist)
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args['onButton-pressed']).toHaveBeenCalledTimes(2) // Nutzen 2 damit es fehlschlägt um zu zeigen was dann passiert
  },
}