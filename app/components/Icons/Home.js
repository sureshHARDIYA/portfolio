import React from 'react';

const Home = (props) => (
  <svg
    viewBox="0 0 64 64"
    height="1.5em"
    width="1.2em"
    className={props.className}
  >
    <path
      d="M48.01,10.0209a2,2,0,0,1,2,2v8.5253a.75.75,0,0,1-1.28.53L42.5959,14.94a2,2,0,0,1-.5855-1.414V12.0209a2,2,0,0,1,2-2Zm0,44h-9a2,2,0,0,1-2-2v-12a2,2,0,0,0-2-2h-6a2,2,0,0,0-2,2v12a2,2,0,0,1-2,2h-9a2,2,0,0,1-2-2V34.0078H10.02A2.0007,2.0007,0,0,1,8.606,30.5927L30.6,8.5862a1.999,1.999,0,0,1,2.8277,0l21.994,22.0065a2.0006,2.0006,0,0,1-1.4137,3.4151H50.01v18.013A2,2,0,0,1,48.01,54.0208Z"
      fillRule="evenodd"
    />
  </svg>
);

Home.propTypes = {
  className: React.PropTypes.string,
};

export default Home;
