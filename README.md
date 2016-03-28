# meteor-auth

A reusable composer to implement authentication for Mantra applications


## Installation

    npm install -s meteor-auth


## Usage

Simply import `authComposer` and compose your component with it. Your component
will reactively receive `loggedIn` and `loggingIn` props.

```js
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


## License

MIT
