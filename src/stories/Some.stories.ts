import type {Meta, StoryObj} from '@storybook/angular';
import {SomeComponent} from '../app/some/some.component';
import {moduleMetadata} from '@storybook/angular';
import {TranslocoRootModule} from '../app/transloco-root.module';

const meta: Meta<SomeComponent> = {
  component: SomeComponent,
  decorators: [
    moduleMetadata({
      imports: [TranslocoRootModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SomeComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/angular/api/csf
 * to learn how to use render functions.
 */
export const Some: Story = {
  render: () => ({
    props: {
      label: 'SomeComponent',
      primary: true,
    },
  }),
};
