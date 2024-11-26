import type { Preview } from '@storybook/react';
import { PreviewContainer } from './PreviewContainer';

const preview: Preview = {
    decorators: [PreviewContainer],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
