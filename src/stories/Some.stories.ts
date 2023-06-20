import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SomeComponent } from '../app/some/some.component';
import { applicationConfig } from '@storybook/angular';
import {
  TranslocoHttpLoader,
  translocoConf,
} from '../app/transloco-root.module';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoModule, provideTransloco } from '@ngneat/transloco';

const meta: Meta<SomeComponent> = {
  component: SomeComponent,
  decorators: [
    moduleMetadata({
      imports: [TranslocoModule],
    }),
    applicationConfig({
      providers: [
        provideHttpClient(),
        provideTransloco({
          config: translocoConf,
          loader: TranslocoHttpLoader,
        }),
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
