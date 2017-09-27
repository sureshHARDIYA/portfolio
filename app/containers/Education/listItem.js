import React from 'react';
import Proptypes from 'prop-types';

import A from 'components/A';
import ListItem from './styles/listItem';
import Date from './styles/date';
import TimeLine from './styles/timeline';
import Info from './styles/info';
import ListItemTitle from './ListItemTitle';

const List = (props) => {
  const [startYear, , endYear] = props.year.split(' ');
  return (
    <ListItem>
      <div>
        <Date right>{startYear}</Date>
        <Date iscolored bold large>
          {endYear}
        </Date>
      </div>
      <TimeLine>
        <span />
      </TimeLine>
      <Info>
        <h4>{props.school}</h4>
        <div>
          <span>
            <ListItemTitle>Grade</ListItemTitle>
            {props.grade}
          </span>
          <span>
            <ListItemTitle>Address</ListItemTitle>
            {props.address}
          </span>
          <span>
            <ListItemTitle>Course</ListItemTitle>
            {props.course}
          </span>
          <span>
            <ListItemTitle>Link</ListItemTitle>
            <A href={props.website}>{props.website}</A>
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
  website: Proptypes.string.isRequired,
};

export default List;
