import React from 'react';

const EnsureLoggedIn = ({loggedIn, children, unauthenticatedMessage}) => {
  let errorComponent = unauthenticatedMessage || DefaultUnauthenticatedMessage;

  return (
    <div>
      {loggedIn ? children : errorComponent}
    </div>
  );
};

const DefaultUnauthenticatedMessage = (
  <div>
    Please log in to view this page.
  </div>
);

export default EnsureLoggedIn;
