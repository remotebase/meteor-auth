# meteor-auth

A user authentication solution for Mantra applications


## Installation

    npm install -s meteor-auth


## Usage

This module includes:

* `authComposer`
* `EnsureLoggedIn`


### authComposer

Compose a component with `authComposer` using `composeWithTracker`. The
component will reactively receive `loggedIn` and `loggingIn` props.

*container*

```js
import {composeAll, composeWithTracker} from 'mantra-core';
import MyComponent from '../components/my_component.jsx';
import {authComposer} from 'meteor-auth';

// ...

return composeAll(
  composeWithTracker(authComposer),
)(MyComponent);
```

*component*

```js
import React form 'react'

const MyComponent = ({loggedIn, loggingIn}) => (
  {
    loggedIn ? <div>Welcome</div> :
    loggingIn ? <div>Loading...</div> : <div>Please log in</div>
  }
);
```

### EnsureLoggedIn

Wrap a content with `<EnsureLoggedIn>` to make sure only logged in users can
see the content.

```js
import React form 'react'
import {EnsureLoggedIn} from 'meteor-auth';

const MyComponent = () => (
  <EnsureLoggedIn>
    <div>Welcome</div>
  </EnsureLoggedIn>
);
```

#### props

**unauthenticatedMessage**

* type: React component
* Replace the default component displayed when user is not logged in
* example:

```js
const Dashboard = () => (
  <EnsureLoggedIn unauthenticatedMessage={NotLoggedInMessage}>
    <DashboardView />
  </EnsureLoggedIn>
);

const NotLoggedInMessage = (
  <div>
    Please login. <a href="/">Go back to the main page</a>.
  </div>
);
```

## Production ready

We are using `meteor-auth` in [RemoteBase](https://remotebase.io) to serve
actual users.

![](https://cldup.com/QUydmNJ7Ea.gif)


## License

MIT
