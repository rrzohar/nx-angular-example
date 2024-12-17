import type { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ExampleComponent } from './example.component';

const meta: Meta<ExampleComponent> = {
  component: ExampleComponent,
  title: 'SharedUiComponent',
};
export default meta;
type Story = StoryObj<ExampleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shared-ui works!/gi)).toBeTruthy();
  },
};
