import React, { PureComponent } from 'react';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

const Tag = styled.span`
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
  margin-bottom: 8px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    cursor: default;
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`;

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
        <Tag>{item.language}</Tag>
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
