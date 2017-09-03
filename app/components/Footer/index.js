import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Facebook from 'components/Icons/Facebook';
import Twitter from 'components/Icons/Twitter';
import Github from 'components/Icons/Github';
import GooglePlus from 'components/Icons/GooglePlus';
import Email from 'components/Icons/Email';

import Wrapper from './Wrapper';
import messages from './messages';
import FooterMenu from './FooterMenu';
import FooterMenuItem from './FooterMenuItem';
import LicenseSection from './LicenseSection';

const author = 'S.K. Mukhiya';

function Footer() {
  return (
    <Wrapper>
      <section>
        <LocaleToggle />
      </section>
      <FooterMenu>
        <FooterMenuItem>
          <A href="https://www.facebook.com/jagapati">
            <Facebook />
          </A>
        </FooterMenuItem>
        <FooterMenuItem>
          <A href="https://twitter.com/dr_code_skm">
            <Twitter />
          </A>
        </FooterMenuItem>
        <FooterMenuItem>
          <A href="https://github.com/sureshHARDIYA">
            <Github />
          </A>
        </FooterMenuItem>
        <FooterMenuItem>
          <A href="https://plus.google.com/u/0/+SureshKUMARMukhiya">
            <GooglePlus />
          </A>
        </FooterMenuItem>
        <FooterMenuItem>
          <A href="mailto:itsmeskm99@gmail.com">
            <Email />
          </A>
        </FooterMenuItem>
      </FooterMenu>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <A href="https://twitter.com/dr_code_skm">
                {author}
              </A>
            ),
          }}
        />
      </section>
      <LicenseSection>
        <FormattedMessage {...messages.licenseMessage} />
      </LicenseSection>
    </Wrapper>
  );
}

export default Footer;
