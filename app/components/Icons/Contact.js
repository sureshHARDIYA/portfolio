import React from 'react';

function Contact(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      height="1.5em"
      width="1.2em"
      className={props.className}
    >
      <path
        d="M53,49H11a3,3,0,0,1-3-3V18a3,3,0,0,1,3-3H53a3,3,0,0,1,3,3V46A3,3,0,0,1,53,49ZM13,39h7a1,1,0,1,0,0-2H13a1,1,0,1,0,0,2ZM24,25H13a1,1,0,1,0,0,2H24a1,1,0,1,0,0-2Zm2,6H13a1,1,0,1,0,0,2H26a1,1,0,0,0,0-2Zm7-11a1,1,0,0,0-2,0V44a1,1,0,0,0,2,0Zm19,.5A1.5,1.5,0,0,0,50.5,19h-9A1.5,1.5,0,0,0,40,20.5v11A1.5,1.5,0,0,0,41.5,33h9A1.5,1.5,0,0,0,52,31.5ZM49.5,31h-7a.5.5,0,0,1-.5-.5v-9a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5v9A.5.5,0,0,1,49.5,31Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

Contact.propTypes = {
  className: React.PropTypes.string,
};

export default Contact;
