import React from 'react';
import Proptypes from 'prop-types';
import ListItem from './styles/listItem';
import Date from './styles/date';
import TimeLine from './styles/timeline';
import Info from './styles/info';


const List = (props) => {
  const [startYear, , endYear] = props.year.split(' ');
  return (
    <ListItem>
      <div>
        <Date right>{ startYear }</Date>
        <Date iscolored bold large>{ endYear }</Date>
      </div>
      <TimeLine>
        <span></span>
      </TimeLine>
      <Info>
        <h4>{ props.school }</h4>
        <div>
          <span>{ props.grade }</span>
          <span>{ props.address }</span>
          <span>{ props.course }</span>
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
};

export default List;
