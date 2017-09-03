/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'skmukhiya.components.Footer.license.message',
    defaultMessage: 'This is my portfolio website.',
  },
  authorMessage: {
    id: 'skmukhiya.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
