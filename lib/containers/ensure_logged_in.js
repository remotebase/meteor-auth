import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import {authComposer} from '../auth_composer';
import EnsureLoggedin from '../components/ensure_logged_in';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EnsureLoggedin);
