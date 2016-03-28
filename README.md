# meteor-auth

A reusable composer to implement authentication for Mantra applications


## Installation

    npm install -s meteor-auth


## Usage

Import `authComposer` and compose your component with it.

```js
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import MyComponent from '../components/my_component.jsx';
import {authComposer} from 'meteor-auth';

export function composer() {
  // your composer code
}

return composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps();
)(MyComponent);
```

Your component will reactively receive `loggedIn` and `loggingIn` props.

```js
import React form 'react'

const MyComponent = ({loggedIn, loggingIn}) => (
  {
    loggedIn ? <div>Welcome</div> :
    loggingIn ? <div>Loading...</div> : <div>Please log in</div>
  }
);
```


## License

MIT
