import React, { PureComponent } from 'react';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export class RepoListItem extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const nameprefix = '';

    const content = (
      <Wrapper>
        <RepoLink href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>
    );

    return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
};

export default RepoListItem;
