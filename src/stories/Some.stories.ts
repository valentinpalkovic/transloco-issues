import type {Meta, StoryObj} from '@storybook/angular';
import {SomeComponent} from '../app/some/some.component';
import {applicationConfig} from '@storybook/angular';
import {TranslocoRootModule} from '../app/transloco-root.module';
import {importProvidersFrom} from '@angular/core';

const meta: Meta<SomeComponent> = {
  component: SomeComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(TranslocoRootModule),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<SomeComponent>;

export const Some: Story = {
  render: () => ({
    props: {
      label: 'SomeComponent',
      primary: true,
    },
  }),
};
