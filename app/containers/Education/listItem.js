import React from 'react';
import Proptypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
import ListItem from './styles/listItem';
import Date from './styles/date';
import TimeLine from './styles/timeline';
import Info from './styles/info';
import messages from './messages';

const ListHeader = styled.span`
  font-weight: bold;
  margin-right: 10px;

  &:after {
    content: ':';
  }
`;

const List = (props) => {
  const [startYear, , endYear] = props.year.split(' ');
  return (
    <ListItem>
      <div>
        <Date right>
          {startYear}
        </Date>
        <Date iscolored bold large>
          {endYear}
        </Date>
      </div>
      <TimeLine>
        <span />
      </TimeLine>
      <Info>
        <h4>
          {props.school}
        </h4>
        <div>
          <span>
            <ListHeader>
              <FormattedMessage {...messages.educationScore} />
            </ListHeader>
            {props.grade}
          </span>
          <span>
            <ListHeader>
              <FormattedMessage {...messages.educationCountry} />
            </ListHeader>
            {props.address}
          </span>
          <span>
            <ListHeader>
              <FormattedMessage {...messages.educationCourseName} />
            </ListHeader>
            {props.course}
          </span>
          <span>
            <A href={props.reference}>
              <FormattedMessage
                {...messages.educationInstituteMoreInformation}
              />
            </A>
          </span>
        </div>
      </Info>
    </ListItem>
  );
};

List.propTypes = {
  year: Proptypes.string.isRequired,
  school: Proptypes.string.isRequired,
  grade: Proptypes.string.isRequired,
  course: Proptypes.string.isRequired,
  address: Proptypes.string.isRequired,
  reference: Proptypes.string,
};

export default List;
