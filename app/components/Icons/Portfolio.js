import React from 'react';

const Portfolio = (props) =>
  <svg
    viewBox="0 0 64 64"
    height="1.5em"
    width="1.2em"
    className={props.className}
  >
    <path
      d="M52,52H12a4,4,0,0,1-4-4V33.5374a1.5283,1.5283,0,0,1,2.3847-1.2709A9.9147,9.9147,0,0,0,16,34H28v2.0841C28,36.9473,29.5971,38,32,38s4-1.0527,4-1.9159V34H48a9.9145,9.9145,0,0,0,5.6151-1.7335A1.5285,1.5285,0,0,1,56,33.5374V48A4,4,0,0,1,52,52ZM48,32H36V30a1,1,0,0,0-1-1H29a1,1,0,0,0-1,1v2H16a8,8,0,0,1-8-8V20a4,4,0,0,1,4-4h9V13a5,5,0,0,1,5-5H38a5,5,0,0,1,5,5v3h9a4,4,0,0,1,4,4v4A8,8,0,0,1,48,32ZM39,13a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v3H39Z"
      fillRule="evenodd"
    />
  </svg>;

Portfolio.propTypes = {
  className: React.PropTypes.string,
};

export default Portfolio;
